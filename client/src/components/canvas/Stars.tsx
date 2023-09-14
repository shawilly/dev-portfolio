import React, { useState, useRef, Suspense } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { Preload, Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.cjs";
import { SectionWrapper } from "../../hoc";

const Stars: React.FC = () => {
  const ref = useRef<THREE.Points>(null!);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  const [sphere] = useState(
    () =>
      random.inSphere(new Float32Array(5000), { radius: 1.2 }) as Float32Array,
  );

  // const [sphere] = useState(() => {
  //   const numStars = 5000; // Number of stars you want to generate
  //   const spherePoints = new Float32Array(numStars * 3); // Create a typed array for the points
  //   return Float32Array.from(
  //     random.inSphere(spherePoints, {
  //       radius: 1.2,
  //     })
  //   );
  // });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas: React.FC = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
