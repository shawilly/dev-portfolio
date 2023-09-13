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
const Earth = () => {
    const earth = (0, drei_1.useGLTF)("./planet/scene.gltf");
    return (react_1.default.createElement("primitive", { object: earth.scene, scale: 2, "position-y": 0, "rotation-y": 0 }));
};
const EarthCanvas = () => {
    return (react_1.default.createElement(fiber_1.Canvas, { shadows: true, frameloop: "demand", dpr: [1, 2], gl: { preserveDrawingBuffer: true }, camera: {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
        } },
        react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement(Loader_1.default, null) },
            react_1.default.createElement(drei_1.OrbitControls, { autoRotate: true, enableZoom: false, maxPolarAngle: Math.PI / 2, minPolarAngle: Math.PI / 2 }),
            react_1.default.createElement(Earth, null),
            react_1.default.createElement(drei_1.Preload, { all: true }))));
};
exports.default = EarthCanvas;
