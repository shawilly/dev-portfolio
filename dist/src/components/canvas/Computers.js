"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const fiber_1 = require("@react-three/fiber");
const drei_1 = require("@react-three/drei");
const Loader_1 = __importDefault(require("../Loader"));
const MobileDetector_1 = require("../../utils/MobileDetector");
const Computers = ({ isMobile }) => {
    const mesh = (0, react_1.useRef)(null);
    (0, fiber_1.useFrame)(() => {
        if (mesh.current) {
            mesh.current.rotation.x += 0.01;
            mesh.current.rotation.y += 0.01;
        }
    });
    const computer = (0, drei_1.useGLTF)("./desktop_pc/scene.gltf");
    const scale = isMobile ? 0.5 : 0.75;
    const position = isMobile ? [0, -2.5, -1] : [0, -3.25, -1.5];
    return (react_1.default.createElement("mesh", null,
        react_1.default.createElement("hemisphereLight", { intensity: 0.25, groundColor: "white" }),
        react_1.default.createElement("pointLight", { intensity: 1 }),
        react_1.default.createElement("ambientLight", { intensity: 1 }),
        react_1.default.createElement("spotLight", { intensity: 0.6, angle: 0.2, penumbra: 1, castShadow: true }),
        react_1.default.createElement("primitive", { object: computer.scene, scale: scale, position: position, rotation: [-0.01, -0.2, -0.1] })));
};
const ComputersCanvas = () => {
    const { isMobile } = (0, MobileDetector_1.useMobileDetection)();
    return (
    // <MyErrorBoundary>
    react_1.default.createElement(fiber_1.Canvas, { frameloop: "demand", shadows: true, dpr: [1, 2], camera: { position: [20, 3, 5], fov: 25 }, gl: { preserveDrawingBuffer: true } },
        react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement(Loader_1.default, null) },
            react_1.default.createElement(drei_1.OrbitControls, { enableZoom: false, maxPolarAngle: Math.PI / 2, minPolarAngle: Math.PI / 2 }),
            react_1.default.createElement(Computers, { isMobile: isMobile }),
            react_1.default.createElement(drei_1.Preload, { all: true })))
    // </MyErrorBoundary>
    );
};
exports.default = ComputersCanvas;
