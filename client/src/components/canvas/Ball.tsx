import React, { useRef } from "react";
import { Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import Loader from "../Loader";
import { ITechnology } from "../../typings/common.types";
import { TextureLoader } from "three";

interface BallSectionProps extends Pick<ITechnology, "technologyImgUrl"> {}

interface BallProps {
  technologyImgUrl: string;
}

const Ball: React.FC<BallProps> = ({ technologyImgUrl }) => {
  const { technologyImgUrl: techDecal } = useTexture({ technologyImgUrl });
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} intensity={1} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#FFF8EB"
          polygonOffset
          polygonOffsetFactor={5}
          flatShading
        />
        <Decal
          map={techDecal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
        />
      </mesh>
    </Float>
  );
};

const BallSection: React.FC<BallSectionProps> = ({ technologyImgUrl }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls enableZoom={false} />
      <Ball technologyImgUrl={technologyImgUrl as string} />
      <Preload all />
    </Canvas>
  );
};

export default BallSection;
