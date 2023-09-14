import { Html, useProgress } from "@react-three/drei";
import React from "react";
import { HashLoader } from "react-spinners";

const CanvasLoader: React.FC = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <HashLoader color="#aaa6c3" size={150} aria-label="Loading Spinner" />
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;


