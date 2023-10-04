import type { PlaneProps } from "@react-three/cannon";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import { Decal, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import type { InstancedMesh, Mesh } from "three";
import { ITechnology, ITool } from "../../typings/common.types";
import catImage from "../../assets/cat.png";

function Plane(props: PlaneProps) {
  const [ref] = usePlane(
    () => ({ rotation: [-Math.PI / 2, 0, 0], ...props }),
    useRef<Mesh>(null),
  );
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[1000, 1000]} />
      <shadowMaterial color="#171717" transparent opacity={0.3} />
    </mesh>
  );
}

type InstancedGeometryProps = {
  image: string;
  position: [number, number, number];
};

const Box = ({ image, position }: InstancedGeometryProps) => {
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  const [cat] = useTexture([catImage as string]);
  const [decal] = useTexture([image]);
  const [ref] = useBox(
    () => ({
      mass: 1,
      position: position,
      rotation: [0.4, 0.2, 0.5],
    }),
    useRef<InstancedMesh>(null),
  );
  return (
    <mesh
      receiveShadow
      castShadow
      ref={ref}
      scale={1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[1, 1]} />
      <meshStandardMaterial
        polygonOffset
        polygonOffsetFactor={-0.01}
        color={hovered ? "#549fcf" : "#cff6ff"}
      />
      <Decal
        map={clicked ? cat : decal}
        rotation={[0, 0, 0]}
        position={[0, 0, 1]}
        scale={[0.6, 0.6, 1.2]}
      />
    </mesh>
  );
};

interface ToolPourProps {
  technologies: ITechnology[];
  tools: ITool[];
}

enum TECH {
  TECH = "tech",
  TOOLS = "tools",
}

const ToolPour = ({ technologies, tools }: ToolPourProps) => {
  const links = {
    tech: technologies.map((t) => t.technologyImgUrl as string),
    tools: tools.map((t) => t.toolImgUrl as string),
  };

  const [tech, setTech] = useState<TECH>(TECH.TECH);
  const [techImages, setTechImages] = useState<string[]>([
    links.tech[0],
    links.tech[1],
    links.tech[2],
    links.tech[3],
    links.tech[4],
  ]);
  const [toolImages, setToolImages] = useState<string[]>([
    links.tools[0],
    links.tools[1],
    links.tools[2],
    links.tools[3],
    links.tools[4],
  ]);
  const [images, setImages] = useState<string[]>(techImages);

  const setProps = (tech: TECH) => {
    if (tech === TECH.TECH) {
      setTechImages(getNextThreeImages(techImages, links.tech));
      setImages(techImages);
      setTech(TECH.TECH);
    } else {
      setToolImages(getNextThreeImages(toolImages, links.tools));
      setImages(toolImages);
      setTech(TECH.TOOLS);
    }
  };

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ alpha: false }}
      camera={{ position: [-1, 5, 5], fov: 45 }}
      onPointerMissed={() =>
        setProps(tech === TECH.TECH ? TECH.TOOLS : TECH.TECH)
      }
    >
      <color attach="background" args={["lightblue"]} />
      <ambientLight />
      <directionalLight
        position={[10, 10, 10]}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <Physics>
        <Plane position={[0, -2.5, 0]} />
        <Box key={images[0]} image={images[0]} position={[0.1, 5, 0]} />
        <Box key={images[1]} image={images[1]} position={[0, 10, -1]} />
        <Box key={images[2]} image={images[2]} position={[0, 20, -2]} />
        <Box key={images[3]} image={images[3]} position={[0.5, 7, -3]} />
        <Box key={images[4]} image={images[4]} position={[2, 27, -2]} />
      </Physics>
    </Canvas>
  );
};

export default ToolPour;

function getNextThreeImages(current: string[], array: string[]): string[] {
  if (array.length < 3) {
    throw new Error("The array must have at least 3 elements.");
  }

  const start = array.findIndex((el) => el === current[current.length - 1]) + 1;

  const length = array.length;

  const indexes = [];

  for (let i = 0; i < 5; i++) {
    indexes.push((start + i) % length);
  }

  return indexes.map((index) => array[index]);
}
