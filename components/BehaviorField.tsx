"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type ModelVersion = "baseline" | "candidate";

type AtlasProps = {
  model: ModelVersion;
  stress: number;
  scrollProgress: number;
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

function BehaviorAtlas({ model, stress, scrollProgress }: AtlasProps) {
  const group = useRef<THREE.Group>(null);
  const probe = useRef<THREE.Mesh>(null);
  const failureMaterial = useRef<THREE.PointsMaterial>(null);

  const { nominal, failure, boundary } = useMemo(() => {
    const random = mulberry32(481516);
    const nominalValues: number[] = [];
    const failureValues: number[] = [];

    for (let i = 0; i < 680; i += 1) {
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
    const segments = 92;
    for (let i = 0; i < segments - 1; i += 1) {
      const x1 = -2.6 + (i / (segments - 1)) * 5.2;
      const x2 = -2.6 + ((i + 1) / (segments - 1)) * 5.2;
      boundaryValues.push(x1, boundaryAt(x1, model, stress), 0.03);
      boundaryValues.push(x2, boundaryAt(x2, model, stress), 0.03);
    }

    return {
      nominal: new Float32Array(nominalValues),
      failure: new Float32Array(failureValues),
      boundary: new Float32Array(boundaryValues),
    };
  }, [model, stress]);

  useFrame(({ pointer, clock }) => {
    if (group.current) {
      group.current.rotation.x = pointer.y * 0.035 + scrollProgress * 0.035;
      group.current.rotation.y = pointer.x * 0.045 - scrollProgress * 0.055;
      group.current.position.y = scrollProgress * 0.12;
      const scale = 1 + scrollProgress * 0.065;
      group.current.scale.setScalar(scale);
    }

    if (failureMaterial.current) {
      failureMaterial.current.opacity = 0.38 + scrollProgress * 0.22;
    }

    if (probe.current) {
      const x = THREE.MathUtils.clamp(pointer.x * 2.25, -2.25, 2.25);
      const y = boundaryAt(x, model, stress);
      probe.current.position.set(x, y, 0.12);
      const pulse = 1 + Math.sin(clock.getElapsedTime() * 3.5) * 0.12;
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
  const [model, setModel] = useState<ModelVersion>("candidate");
  const [stress, setStress] = useState(0.36);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const viewport = Math.max(window.innerHeight, 1);
        setScrollProgress(THREE.MathUtils.clamp(window.scrollY / (viewport * 0.78), 0, 1));
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
  }, []);

  const baselineFailure = 8.4 + stress * 31;
  const regressionDelta = model === "candidate" ? 2.1 + stress * 5.4 : 0;
  const failureRate = baselineFailure + regressionDelta;
  const robustness = Math.max(0, 1 - failureRate / 100);

  return (
    <div className="field-shell" aria-label="Interactive synthetic model behavior atlas">
      <Canvas camera={{ position: [0, 0, 6.35], fov: 47 }} dpr={[1, 1.5]}>
        <fog attach="fog" args={["#07090b", 5.4, 9.2]} />
        <BehaviorAtlas model={model} stress={stress} scrollProgress={scrollProgress} />
      </Canvas>

      <div className="field-hud field-hud-top">BEHAVIOR ATLAS / SYNTHETIC DEMO</div>
      <div className="field-phase" aria-hidden="true">
        <span>BEHAVIOR MAP</span>
        <i><b style={{ width: `${Math.round(scrollProgress * 100)}%` }} /></i>
        <span>FORENSICS</span>
      </div>

      <div className="field-model-toggle" role="group" aria-label="Model version">
        <button
          type="button"
          className={model === "baseline" ? "active" : ""}
          onClick={() => setModel("baseline")}
        >
          BASELINE
        </button>
        <button
          type="button"
          className={model === "candidate" ? "active" : ""}
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
