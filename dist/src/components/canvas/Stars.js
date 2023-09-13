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
const random = __importStar(require("maath/random/dist/maath-random.cjs"));
const Stars = () => {
    const ref = (0, react_1.useRef)(null);
    (0, fiber_1.useFrame)((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });
    const [sphere] = (0, react_1.useState)(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));
    // const [sphere] = useState(() => {
    //   const numStars = 5000; // Number of stars you want to generate
    //   const spherePoints = new Float32Array(numStars * 3); // Create a typed array for the points
    //   return Float32Array.from(
    //     random.inSphere(spherePoints, {
    //       radius: 1.2,
    //     })
    //   );
    // });
    return (react_1.default.createElement("group", { rotation: [0, 0, Math.PI / 4] },
        react_1.default.createElement(drei_1.Points, { ref: ref, positions: sphere, stride: 3, frustumCulled: true },
            react_1.default.createElement(drei_1.PointMaterial, { transparent: true, color: "#f272c8", size: 0.002, sizeAttenuation: true, depthWrite: false }))));
};
const StarsCanvas = () => {
    return (react_1.default.createElement("div", { className: "w-full h-auto absolute inset-0 z-[-1]" },
        react_1.default.createElement(fiber_1.Canvas, { camera: { position: [0, 0, 1] } },
            react_1.default.createElement(Stars, null),
            react_1.default.createElement(drei_1.Preload, { all: true }))));
};
exports.default = StarsCanvas;
