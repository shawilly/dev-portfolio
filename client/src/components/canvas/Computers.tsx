import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import ErrorBoundary from '../../hoc/ErrorBoundary';
import { useMediaQuery } from '../../utils/MobileDetector';
import Loader from '../Loader';

interface ComputersProps {
    isMobile: boolean;
}

const Computers: React.FC<ComputersProps> = ({ isMobile }) => {
    const computer: GLTF = useGLTF('./80s_terminal/scene.gltf');
    const scale = isMobile ? 1 : 1.2;
    const position = isMobile ? [0, -3.2, -1] : [0, -3.8, -1.5];

    return (
        <ErrorBoundary>
            <mesh position={[0, 0.8, 0]}>
                <hemisphereLight intensity={0.25} groundColor="white" />
                <pointLight intensity={1} />
                <ambientLight intensity={1} />
                <spotLight intensity={0.6} angle={0.2} penumbra={1} castShadow />
                <primitive object={computer.scene} scale={scale} position={position} rotation={[0, -0.8, 0]} />
            </mesh>
        </ErrorBoundary>
    );
};

const ComputersCanvas: React.FC<{}> = () => {
    const isMobile = useMediaQuery('(max-width: 880px)');

    return (
        <Canvas
            frameloop="demand"
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                <Computers isMobile={isMobile} />
                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default ComputersCanvas;
