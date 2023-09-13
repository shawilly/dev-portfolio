"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ClickableComponent = ({ component: Component, className, onClick, }) => {
    return (react_1.default.createElement("div", { className: `relative max-w-xs overflow-hidden bg-cover bg-no-repeat ${className}`, "data-te-ripple-init": true, "data-te-ripple-color": "light", onClick: onClick },
        react_1.default.createElement(Component, null),
        react_1.default.createElement("a", { href: "#!" },
            react_1.default.createElement("div", { className: "absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" }))));
};
exports.default = ClickableComponent;
