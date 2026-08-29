"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function FailureSurface() {
  const group = useRef<THREE.Group>(null);
  const points = useMemo(() => {
    const values: number[] = [];
    for (let i = 0; i < 520; i += 1) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 0.7 + Math.random() * 2.25;
      const x = Math.cos(theta) * radius;
      const y = Math.sin(theta) * radius * 0.68;
      const boundary = Math.sin(theta * 3.0) * 0.22 + Math.cos(theta * 5.0) * 0.09;
      const z = boundary + (Math.random() - 0.5) * 0.42;
      values.push(x, y, z);
    }
    return new Float32Array(values);
  }, []);

  useFrame(({ pointer, clock }) => {
    if (!group.current) return;
    group.current.rotation.x = pointer.y * 0.12;
    group.current.rotation.y = pointer.x * 0.18 + clock.getElapsedTime() * 0.025;
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[points, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#9df9ff"
          size={0.035}
          sizeAttenuation
          transparent
          opacity={0.72}
          depthWrite={false}
        />
      </points>

      <mesh rotation={[Math.PI / 2.25, 0, 0.2]}>
        <torusGeometry args={[1.72, 0.008, 8, 160]} />
        <meshBasicMaterial color="#eafcff" transparent opacity={0.34} />
      </mesh>

      <mesh position={[0.72, 0.46, 0.2]}>
        <sphereGeometry args={[0.06, 20, 20]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

export function BehaviorField() {
  return (
    <div className="field-shell" aria-label="Interactive behavioral failure landscape">
      <Canvas camera={{ position: [0, 0, 6.2], fov: 48 }} dpr={[1, 1.5]}>
        <fog attach="fog" args={["#07090b", 5.2, 9]} />
        <FailureSurface />
      </Canvas>
      <div className="field-hud field-hud-top">BEHAVIOR SPACE / SYNTHETIC DEMO</div>
      <div className="field-hud field-hud-bottom">
        <span>nominal</span>
        <span>boundary</span>
        <span>failure</span>
      </div>
    </div>
  );
}
