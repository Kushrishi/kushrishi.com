"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type ModelVersion = "baseline" | "candidate";

type AtlasProps = {
  model: ModelVersion;
  stress: number;
  scrollProgressRef: { current: number };
  interactivePointer: boolean;
  reducedMotion: boolean;
  pointCount: number;
  boundarySegments: number;
};

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function boundaryAt(x: number, model: ModelVersion, stress: number) {
  const base =
    -0.18 +
    Math.sin(x * 1.45) * 0.26 +
    Math.sin(x * 3.1 + 0.6) * 0.08 +
    stress * 0.34;

  if (model === "baseline") return base;

  // Candidate improves one region but regresses around the center-right.
  const improvement = -0.22 * Math.exp(-Math.pow(x + 1.55, 2) / 0.5);
  const regression = 0.34 * Math.exp(-Math.pow(x - 0.85, 2) / 0.42);
  return base + improvement + regression;
}

function BehaviorAtlas({
  model,
  stress,
  scrollProgressRef,
  interactivePointer,
  reducedMotion,
  pointCount,
  boundarySegments,
}: AtlasProps) {
  const group = useRef<THREE.Group>(null);
  const probe = useRef<THREE.Mesh>(null);
  const failureMaterial = useRef<THREE.PointsMaterial>(null);

  const { nominal, failure, boundary } = useMemo(() => {
    const random = mulberry32(481516);
    const nominalValues: number[] = [];
    const failureValues: number[] = [];

    for (let i = 0; i < pointCount; i += 1) {
      const x = -2.55 + random() * 5.1;
      const y = -2.2 + random() * 4.4;
      const surface = boundaryAt(x, model, stress);
      const localNoise = (random() - 0.5) * 0.12;
      const z = (random() - 0.5) * 0.26;

      if (y > surface + localNoise) {
        failureValues.push(x, y, z);
      } else {
        nominalValues.push(x, y, z);
      }
    }

    const boundaryValues: number[] = [];
    for (let i = 0; i < boundarySegments - 1; i += 1) {
      const x1 = -2.6 + (i / (boundarySegments - 1)) * 5.2;
      const x2 = -2.6 + ((i + 1) / (boundarySegments - 1)) * 5.2;
      boundaryValues.push(x1, boundaryAt(x1, model, stress), 0.03);
      boundaryValues.push(x2, boundaryAt(x2, model, stress), 0.03);
    }

    return {
      nominal: new Float32Array(nominalValues),
      failure: new Float32Array(failureValues),
      boundary: new Float32Array(boundaryValues),
    };
  }, [boundarySegments, model, pointCount, stress]);

  useFrame(({ pointer, clock }) => {
    const pointerX = interactivePointer ? pointer.x : 0;
    const pointerY = interactivePointer ? pointer.y : 0;
    const scrollProgress = reducedMotion ? 0 : scrollProgressRef.current;

    if (group.current) {
      group.current.rotation.x = pointerY * 0.035 + scrollProgress * 0.035;
      group.current.rotation.y = pointerX * 0.045 - scrollProgress * 0.055;
      group.current.position.y = scrollProgress * 0.12;
      const scale = 1 + scrollProgress * 0.065;
      group.current.scale.setScalar(scale);
    }

    if (failureMaterial.current) {
      failureMaterial.current.opacity = 0.38 + scrollProgress * 0.22;
    }

    if (probe.current) {
      const x = THREE.MathUtils.clamp(pointerX * 2.25, -2.25, 2.25);
      const y = boundaryAt(x, model, stress);
      probe.current.position.set(x, y, 0.12);
      const pulse =
        reducedMotion || !interactivePointer
          ? 1
          : 1 + Math.sin(clock.getElapsedTime() * 3.5) * 0.12;
      probe.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={group} rotation={[0.03, 0, -0.03]}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nominal, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#9df9ff"
          size={0.038}
          sizeAttenuation
          transparent
          opacity={0.72}
          depthWrite={false}
        />
      </points>

      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[failure, 3]} />
        </bufferGeometry>
        <pointsMaterial
          ref={failureMaterial}
          color="#ff9b8f"
          size={0.037}
          sizeAttenuation
          transparent
          opacity={0.44}
          depthWrite={false}
        />
      </points>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[boundary, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#f2ffff" transparent opacity={0.72} />
      </lineSegments>

      <mesh ref={probe}>
        <sphereGeometry args={[0.055, 18, 18]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

function formatPercent(value: number) {
  return `${value.toFixed(1)}%`;
}

export function BehaviorField() {
  const shellRef = useRef<HTMLDivElement>(null);
  const phaseFillRef = useRef<HTMLElement>(null);
  const scrollProgressRef = useRef(0);
  const invalidateRef = useRef<() => void>(() => undefined);
  const [model, setModel] = useState<ModelVersion>("candidate");
  const [stress, setStress] = useState(0.36);
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const coarseQuery = window.matchMedia("(pointer: coarse)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateCapabilities = () => {
      setIsCoarsePointer(coarseQuery.matches);
      setReducedMotion(motionQuery.matches);
    };

    updateCapabilities();
    coarseQuery.addEventListener("change", updateCapabilities);
    motionQuery.addEventListener("change", updateCapabilities);

    return () => {
      coarseQuery.removeEventListener("change", updateCapabilities);
      motionQuery.removeEventListener("change", updateCapabilities);
    };
  }, []);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "180px 0px" },
    );

    observer.observe(shell);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;
    const useNativePhaseTimeline =
      isCoarsePointer &&
      typeof CSS !== "undefined" &&
      CSS.supports("animation-timeline: view()");

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const shell = shellRef.current;
        if (!shell) return;

        const viewport = Math.max(window.innerHeight, 1);
        const rect = shell.getBoundingClientRect();
        const shellTop = window.scrollY + rect.top;

        // Start as the atlas approaches the main reading area and finish while
        // it is still visibly on-screen. This keeps the transition consistent
        // across side-by-side desktop and stacked phone/tablet layouts.
        const startScroll = Math.max(0, shellTop - viewport * 0.72);
        const endScroll = Math.max(
          startScroll + 1,
          shellTop + rect.height - viewport * 0.52,
        );
        const nextProgress = THREE.MathUtils.clamp(
          (window.scrollY - startScroll) / (endScroll - startScroll),
          0,
          1,
        );

        scrollProgressRef.current = nextProgress;

        // Safari 26+ can drive the visible phase bar directly from the
        // compositor scroll timeline on touch devices. Older browsers and
        // desktop keep the JS transform fallback.
        if (!useNativePhaseTimeline && phaseFillRef.current) {
          phaseFillRef.current.style.transform = `scaleX(${nextProgress})`;
        }

        // Demand-rendered touch canvases need an explicit frame when scroll
        // changes the scene. Desktop continues using its normal render loop.
        if (isVisible) invalidateRef.current();
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isCoarsePointer, isVisible]);

  const baselineFailure = 8.4 + stress * 31;
  const regressionDelta = model === "candidate" ? 2.1 + stress * 5.4 : 0;
  const failureRate = baselineFailure + regressionDelta;
  const robustness = Math.max(0, 1 - failureRate / 100);
  const pointCount = isCoarsePointer ? 440 : 680;
  const boundarySegments = isCoarsePointer ? 64 : 92;
  const frameLoop = !isVisible
    ? "never"
    : reducedMotion || isCoarsePointer
      ? "demand"
      : "always";

  return (
    <div
      ref={shellRef}
      className="field-shell"
      role="region"
      aria-label="Interactive synthetic model behavior atlas"
    >
      <Canvas
        camera={{ position: [0, 0, 6.35], fov: 47 }}
        dpr={isCoarsePointer ? 1 : [1, 1.5]}
        frameloop={frameLoop}
        onCreated={(state) => {
          invalidateRef.current = state.invalidate;
        }}
        gl={{ antialias: !isCoarsePointer, powerPreference: "high-performance" }}
        style={{ pointerEvents: isCoarsePointer ? "none" : "auto", touchAction: "pan-y" }}
      >
        <fog attach="fog" args={["#07090b", 5.4, 9.2]} />
        <BehaviorAtlas
          model={model}
          stress={stress}
          scrollProgressRef={scrollProgressRef}
          interactivePointer={!isCoarsePointer}
          reducedMotion={reducedMotion}
          pointCount={pointCount}
          boundarySegments={boundarySegments}
        />
      </Canvas>

      <div className="field-hud field-hud-top">BEHAVIOR ATLAS / SYNTHETIC DEMO</div>
      <div className="field-phase" aria-hidden="true">
        <span>BEHAVIOR MAP</span>
        <i><b ref={phaseFillRef} /></i>
        <span>FORENSICS</span>
      </div>

      <div className="field-model-toggle" role="group" aria-label="Model version">
        <button
          type="button"
          className={model === "baseline" ? "active" : ""}
          aria-pressed={model === "baseline"}
          onClick={() => setModel("baseline")}
        >
          BASELINE
        </button>
        <button
          type="button"
          className={model === "candidate" ? "active" : ""}
          aria-pressed={model === "candidate"}
          onClick={() => setModel("candidate")}
        >
          CANDIDATE
        </button>
      </div>

      <div className="field-readout" aria-live="polite">
        <div>
          <span>ROBUSTNESS</span>
          <strong>{robustness.toFixed(3)}</strong>
        </div>
        <div>
          <span>FAILURE RATE</span>
          <strong>{formatPercent(failureRate)}</strong>
        </div>
        <div>
          <span>REGRESSION Δ</span>
          <strong className={regressionDelta > 0 ? "is-regression" : ""}>
            {regressionDelta > 0 ? "+" : ""}{regressionDelta.toFixed(1)} pp
          </strong>
        </div>
      </div>

      <div className="field-stress">
        <div className="field-stress-label">
          <span>SCENARIO STRESS</span>
          <strong>{Math.round(stress * 100)}</strong>
        </div>
        <input
          aria-label="Scenario stress"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={stress}
          onChange={(event) => setStress(Number(event.target.value))}
        />
      </div>

      <div className="field-legend" aria-hidden="true">
        <span><i className="legend-dot nominal" /> nominal</span>
        <span><i className="legend-line" /> boundary</span>
        <span><i className="legend-dot failure" /> failure</span>
      </div>
    </div>
  );
}
