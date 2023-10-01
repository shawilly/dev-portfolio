// import React, {
//   Ref,
//   Suspense,
//   useEffect,
//   useMemo,
//   useRef,
//   useState,
// } from "react";
// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import {
//   Decal,
//   Float,
//   OrbitControls,
//   Preload,
//   useTexture,
// } from "@react-three/drei";
// import CanvasLoader from "../Loader";
// import { ITechnology } from "../../typings/common.types";
// import {
//   Physics,
//   PlaneProps,
//   useBox,
//   useConvexPolyhedron,
//   usePlane,
//   useSphere,
// } from "@react-three/cannon";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import * as THREE from "three";

// const niceColours = [
//   "#99b898",
//   "#fecea8",
//   "#ff847c",
//   "#e84a5f",
//   "#2a363b",
// ] as const;

// interface BallSectionProps {
//   technologies: ITechnology[];
// }

// interface BallProps extends Pick<ITechnology, "technologyImgUrl"> {
//   technologyImgUrl: string;
//   index: number;
//   arrayLength: number;
//   colors: Float32Array;
// }

// const Plane = (props: PlaneProps) => {
//   const [ref] = usePlane(() => ({ ...props }), useRef<THREE.Mesh>(null));
//   return (
//     <mesh ref={ref} receiveShadow>
//       <planeGeometry args={[5, 5]} />
//       <shadowMaterial color="#171717" />
//     </mesh>
//   );
// };

// const Ball = React.memo(
//   ({ technologyImgUrl, index, arrayLength, colors }: BallProps) => {
//     const [decal] = useTexture([technologyImgUrl]);
//     const [ref, { at }] = useSphere(
//       () => ({
//         args: [1],
//         mass: 1,
//         position: [
//           0.3 * Math.cos((index / arrayLength) * 2 * Math.PI),
//           0.3 * Math.sin((index / arrayLength) * 2 * Math.PI),
//           0,
//         ],
//       }),
//       useRef<THREE.InstancedMesh>(null)
//     );
//     useFrame(() =>
//       at(Math.floor(Math.random() * index)).position.set(
//         0,
//         Math.random() * 2,
//         0
//       )
//     );

//     return (
//       <Float speed={0.5} rotationIntensity={1} floatIntensity={2}>
//         <ambientLight intensity={0.25} />
//         <directionalLight position={[0, 0, 0.05]} />
//         <instancedMesh
//           castShadow
//           receiveShadow
//           scale={0.15}
//           // position={[
//           //   0.3 * Math.cos((index / arrayLength) * 2 * Math.PI),
//           //   0.3 * Math.sin((index / arrayLength) * 2 * Math.PI),
//           //   0,
//           // ]}
//           position={[0, 5, 0]}
//           dispose={null}
//           {...(ref as any)}
//         >
//           <icosahedronGeometry args={[1, 1]}>
//             <instancedBufferAttribute
//               attach="attributes-color"
//               args={[colors, 3]}
//             />
//           </icosahedronGeometry>
//           <meshLambertMaterial vertexColors />
//           {/* <meshStandardMaterial
//             attach="material"
//             transparent
//             opacity={1}
//             color="#fff8eb"
//             polygonOffset
//             polygonOffsetFactor={-5}
//             flatShading
//           /> */}
//           <Decal
//             position={[0, 0, 1]}
//             rotation={[2 * Math.PI, 0, 6.25]}
//             scale={1}
//             map={decal}
//           />
//           <meshPhongMaterial flatShading />
//         </instancedMesh>
//       </Float>
//     );
//   }
// );

// const BallGrid = React.memo(({ technologies }: BallSectionProps) => {
//   const [reverse, setReverse] = React.useState<boolean>(false);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setReverse((prevReverse) => !prevReverse);
//     }, 5000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   const [geometry, setGeometry] = useState<"sphere">("sphere");
//   const [number] = useState(technologies.length);
//   const [size] = useState(0.1);

//   const colors = useMemo(() => {
//     const array = new Float32Array(number * 3);
//     const color = new Color();
//     for (let i = 0; i < number; i++)
//       color
//         .set(niceColours[Math.floor(Math.random() * 5)])
//         .convertSRGBToLinear()
//         .toArray(array, i * 3);
//     return array;
//   }, [number]);

//   const renderBalls = useMemo(() => {
//     return technologies.map((tech, index, array) => (
//       <Ball
//         key={index}
//         index={index}
//         arrayLength={array.length}
//         technologyImgUrl={tech.technologyImgUrl as string}
//       />
//     ));
//   }, [technologies]);

//   return (
//     <Canvas
//       frameloop="always"
//       dpr={[1, 2]}
//       style={{ width: "100%", height: "100%" }}
//       shadows
//       gl={{
//         alpha: false,
//         preserveDrawingBuffer: true,
//         useLegacyLights: true,
//       }}
//       camera={{ fov: 50, position: [-1, 1, 2.5] }}
//       onPointerMissed={() => setGeometry("sphere")}
//       onCreated={({ scene }) =>
//         (scene.background = new THREE.Color("lightblue"))
//       }
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <hemisphereLight intensity={0.35} />
//         <spotLight
//           position={[5, 5, 5]}
//           angle={0.3}
//           penumbra={1}
//           intensity={2}
//           castShadow
//           shadow-mapSize-width={256}
//           shadow-mapSize-height={256}
//         />
//         <Physics broadphase="SAP">
//           <Plane rotation={[-Math.PI / 2, 0, 0]} />
//           <OrbitControls
//             enableZoom={false}
//             reverseOrbit={reverse}
//             reverseHorizontalOrbit={reverse}
//             reverseVerticalOrbit={reverse}
//           />
//           {renderBalls}
//         </Physics>
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// });

// export default BallGrid;
