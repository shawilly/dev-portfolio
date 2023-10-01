import React, { useCallback, useMemo, useRef, useState } from "react";
import type { PlaneProps, Triplet } from "@react-three/cannon";
import { Physics, useBox, usePlane, useSphere } from "@react-three/cannon";
import { Canvas, useFrame } from "@react-three/fiber";
import type { InstancedMesh, Mesh } from "three";
import { Color } from "three";
import { ITechnology, ITool } from "../../typings/common.types";
import { Decal, useTexture, OrbitControls, Float } from "@react-three/drei";

const niceColors = [
  "#cdb4db",
  "#ffc8dd",
  "#ffafcc",
  "#bde0fe",
  "#a2d2ff",
] as const;

function Plane(props: PlaneProps) {
  const [ref] = usePlane(() => ({ ...props }), useRef<Mesh>(null));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[1000, 1000]} />
      <shadowMaterial color="#171717" transparent opacity={0.4} />
    </mesh>
  );
}

type InstancedGeometryProps = {
  colors: Float32Array;
  number: number;
  size: number;
  decals: string[];
};

const Spheres = ({ decals, colors, number, size }: InstancedGeometryProps) => {
  const [decal] = useTexture([decals[0]]);
  const [ref, { at }] = useSphere(
    () => ({
      args: [size],
      mass: 1,
      rotation: [0.4, 0.2, 0.5],
      position: [Math.random() - 0.5, Math.random() * 2, Math.random() - 0.5],
    }),
    useRef<InstancedMesh>(null)
  );
  useFrame(() =>
    at(Math.floor(Math.random() * number)).position.set(0, Math.random() * 2, 0)
  );
  return (
    <mesh receiveShadow castShadow ref={ref}>
      <icosahedronGeometry args={[1, 1]}>
        <instancedBufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </icosahedronGeometry>
      <meshLambertMaterial vertexColors />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        scale={1}
        map={decal}
      />
    </mesh>
  );
};

const Boxes = ({ decals, colors, number, size }: InstancedGeometryProps) => {
  const [decal] = useTexture([decals[0]]);
  const args: Triplet = [size, size, size];
  const [ref, { at }] = useBox(
    () => ({
      args,
      mass: 1,
      rotation: [0.4, 0.2, 0.5],
      position: [Math.random() - 0.5, Math.random() * 2, Math.random() - 0.5],
    }),
    useRef<InstancedMesh>(null)
  );
  useFrame(() =>
    at(Math.floor(Math.random() * number)).position.set(0, Math.random() * 2, 0)
  );
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh receiveShadow castShadow ref={ref}>
        <boxGeometry args={args}>
          <instancedBufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </boxGeometry>
        <meshLambertMaterial vertexColors />
        <Decal
          // position={[0, 0, 1]}
          // rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

interface ToolPourProps {
  technologies: ITechnology[];
  tools: ITool[];
}

enum SHAPES {
  BOX = "box",
  SPHERE = "sphere",
}

const ToolPour = ({ technologies, tools }: ToolPourProps) => {
  const technologyImages: string[] = technologies.map(
    (t) => t.technologyImgUrl as string
  );
  const toolImages: string[] = tools.map((t) => t.toolImgUrl as string);
  const [geometry, setGeometry] = useState<SHAPES>(SHAPES.SPHERE);
  const [number, setNumber] = useState<number>(tools.length);
  const [decals, setDecals] = useState<string[]>(toolImages);
  const [size, setSize] = useState<number>(0.5);

  const setProps = useCallback((shape: SHAPES) => {
    setGeometry(shape);
    setNumber(technologies.length);
    if (shape === SHAPES.SPHERE) {
      setDecals(toolImages);
      setSize(0.3);
    } else {
      setDecals(technologyImages);
      setSize(0.4);
    }
  }, []);

  const colors = useMemo(() => {
    const array = new Float32Array(number * 3);
    const color = new Color();
    for (let i = 0; i < number; i++)
      color
        .set(niceColors[Math.floor(Math.random() * 5)])
        .convertSRGBToLinear()
        .toArray(array, i * 3);
    return array;
  }, [number]);

  const instancedGeometry = {
    box: Boxes,
    sphere: Spheres,
  };

  const InstancedGeometry = instancedGeometry[geometry];

  return (
    <Canvas
      shadows
      gl={{
        alpha: false,
        preserveDrawingBuffer: true,
      }}
      camera={{ position: [-1, 5, 5], fov: 45 }}
      onPointerMissed={() =>
        setProps(geometry === SHAPES.BOX ? SHAPES.SPHERE : SHAPES.BOX)
      }
      onCreated={({ scene }) => (scene.background = new Color("lightblue"))}
      frameloop="always"
    >
      <hemisphereLight intensity={0.35} />
      //{" "}
      <spotLight
        position={[5, 5, 5]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
      />
      <Physics broadphase="SAP">
        <Plane rotation={[-Math.PI / 2, 0, 0]} />
        <OrbitControls enableZoom={false} />
        <InstancedGeometry {...{ decals, colors, number, size }} />
      </Physics>
    </Canvas>
  );
};

export default ToolPour;
