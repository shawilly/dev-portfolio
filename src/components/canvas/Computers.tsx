import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../Loader";
import MyErrorBoundary from "../../hoc/ErrorBoundary";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useMobileDetection } from "../../utils/MobileDetector";

interface ComputersProps {
  isMobile: boolean;
}

const Computers: React.FC<ComputersProps> = ({ isMobile }) => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  const computer: GLTF = useGLTF("./desktop_pc/scene.gltf");
  const scale = isMobile ? 0.5 : 0.75;
  const position = isMobile ? [0, -2.5, -1] : [0, -3.25, -1.5];

  return (
    <mesh>
      <hemisphereLight intensity={0.25} groundColor="white" />
      <pointLight intensity={1} />
      <ambientLight intensity={1} />
      <spotLight intensity={0.6} angle={0.2} penumbra={1} castShadow />
      <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas: React.FC<{}> = () => {
  const { isMobile } = useMobileDetection();

  return (
    // <MyErrorBoundary>
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
    // </MyErrorBoundary>
  );
};

export default ComputersCanvas;
