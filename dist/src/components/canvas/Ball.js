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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const fiber_1 = require("@react-three/fiber");
const drei_1 = require("@react-three/drei");
const Ball = ({ technologyImgUrl }) => {
    const { technologyImgUrl: techDecal } = (0, drei_1.useTexture)({ technologyImgUrl });
    const mesh = (0, react_1.useRef)(null);
    (0, fiber_1.useFrame)(() => {
        if (mesh.current) {
            mesh.current.rotation.x += 0.01;
            mesh.current.rotation.y += 0.01;
        }
    });
    return (react_1.default.createElement(drei_1.Float, { speed: 1.75, rotationIntensity: 1, floatIntensity: 2 },
        react_1.default.createElement("ambientLight", { intensity: 0.5 }),
        react_1.default.createElement("directionalLight", { position: [0, 0, 0.05], intensity: 1 }),
        react_1.default.createElement("mesh", { castShadow: true, receiveShadow: true, scale: 2.75 },
            react_1.default.createElement("icosahedronGeometry", { args: [1, 1] }),
            react_1.default.createElement("meshStandardMaterial", { color: "#FFF8EB", polygonOffset: true, polygonOffsetFactor: 5, flatShading: true }),
            react_1.default.createElement(drei_1.Decal, { map: techDecal, position: [0, 0, 1], rotation: [2 * Math.PI, 0, 6.25] }))));
};
const BallSection = ({ technologyImgUrl }) => {
    return (react_1.default.createElement(fiber_1.Canvas, { frameloop: "demand", dpr: [1, 2], gl: { preserveDrawingBuffer: true } },
        react_1.default.createElement(drei_1.OrbitControls, { enableZoom: false }),
        react_1.default.createElement(Ball, { technologyImgUrl: technologyImgUrl }),
        react_1.default.createElement(drei_1.Preload, { all: true })));
};
exports.default = BallSection;
