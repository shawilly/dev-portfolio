import type { PlaneProps, Triplet } from '@react-three/cannon';
import { Physics, useBox, usePlane } from '@react-three/cannon';
import { Decal, OrbitControls, RenderTexture, Text, useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import type { InstancedMesh, Mesh, Texture } from 'three';
import { ITechnology, ITool } from '../../typings/common.types';
import { useMediaQuery } from '../../utils/MobileDetector';
import { getNextElements } from '../../utils/nextImages';
import Loader from '../Loader';

function Plane(props: PlaneProps) {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }), useRef<Mesh>(null));
    return (
        <mesh ref={ref} receiveShadow>
            <planeGeometry args={[1000, 1000]} />
            <shadowMaterial color="#bcc8c8" transparent opacity={1} />
        </mesh>
    );
}

type InstancedGeometryProps = {
    name: string;
    image: string;
    position: [number, number, number];
};

const Box = ({ name, image, position }: InstancedGeometryProps) => {
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
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
                roughness={0}
                metalness={1.8}
                polygonOffset
                polygonOffsetFactor={-0.01}
                color={hovered ? '#ebe8ed' : '#f1f7f8'}
            />
            <Decal key={name} map={decal} rotation={[0, 0, 0]} position={[0, 0, 1]} scale={[0.6, 0.6, 1.2]} />
        </mesh>
    );
};

interface ToolPourProps {
    technologies: ITechnology[];
    tools: ITool[];
}

enum TECH {
    TECH = 'tech',
    TOOLS = 'tools',
}

const positions: Triplet[] = [
    [0.1, 5, 0],
    [0, 10, -1],
    [1, 12, -0.5],
    [0.5, 7, -3],
    [2, 0, -2],
];

const ToolPour = ({ technologies, tools }: ToolPourProps) => {
    const isMobile = useMediaQuery('(max-width: 880px)');

    const [tech, setTech] = useState<TECH>(TECH.TECH);
    const [currentTech, setCurrentTech] = useState<ITechnology[]>(technologies.slice(0, 5));
    const [currentTools, setCurrentTools] = useState<ITool[]>(tools.slice(0, 5));
    const [techConstants, setTechConstants] = useState<ITechnology[] | ITool[]>(currentTech);

    const setProps = (tech: TECH) => {
        if (tech === TECH.TECH) {
            setCurrentTech(getNextElements(currentTech, technologies));
            setTechConstants(currentTech);
            setTech(TECH.TECH);
        } else {
            setCurrentTools(getNextElements(currentTools, tools));
            setTechConstants(currentTools);
            setTech(TECH.TOOLS);
        }
    };

    return (
        <Canvas
            shadows
            dpr={[1, 2]}
            gl={{ alpha: false }}
            camera={{
                position: isMobile ? [-2.5, 3.6, 5] : [-2, 5, 5],
                fov: isMobile ? 30 : 32,
            }}
            onPointerMissed={() => setProps(tech === TECH.TECH ? TECH.TOOLS : TECH.TECH)}
            className="w-full h-full top-10 rounded-[20px]"
        >
            <Suspense fallback={<Loader />}>
                <color attach="background" args={['#edede9']} />
                <ambientLight />
                <directionalLight position={[10, 10, 10]} castShadow shadow-mapSize={[2048, 2048]} />
                <OrbitControls enableRotate enableZoom={false} />
                <Physics>
                    <Plane position={[0, -2.5, 0]} />
                    {techConstants.map((tech, index) => (
                        <Box
                            key={tech.name}
                            name={tech.name}
                            image={tech.image as string}
                            position={positions[index]}
                        />
                    ))}
                </Physics>
            </Suspense>
        </Canvas>
    );
};

export default ToolPour;
