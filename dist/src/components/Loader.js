"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const drei_1 = require("@react-three/drei");
const react_1 = __importDefault(require("react"));
const react_spinners_1 = require("react-spinners");
const CanvasLoader = () => {
    const { progress } = (0, drei_1.useProgress)();
    return (react_1.default.createElement(drei_1.Html, { as: "div", center: true, style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        } },
        react_1.default.createElement(react_spinners_1.HashLoader, { color: "#aaa6c3", size: 150, "aria-label": "Loading Spinner" }),
        react_1.default.createElement("p", { style: {
                fontSize: 14,
                color: "#F1F1F1",
                fontWeight: 800,
                marginTop: 40,
            } },
            progress.toFixed(2),
            "%")));
};
exports.default = CanvasLoader;
