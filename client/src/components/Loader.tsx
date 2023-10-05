import { Html, useProgress } from "@react-three/drei";
import React from "react";

const CanvasLoader: React.FC = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gray-900 z-50"
    >
      <p className="text-center text-white text-2xl font-bold tracking-wider uppercase mt-4">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
