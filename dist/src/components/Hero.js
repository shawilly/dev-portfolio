"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const framer_motion_1 = require("framer-motion");
const styles_1 = require("../styles");
const canvas_1 = require("./canvas");
const Hero = () => {
    return (react_1.default.createElement("section", { className: `relative w-full h-screen mx-auto` },
        react_1.default.createElement("div", { className: `absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles_1.styles.paddingX} flex flex-row items-start gap-5` },
            react_1.default.createElement("div", { className: "flex flex-col justify-center items-center mt-5" },
                react_1.default.createElement("div", { className: "w-5 h-5 rounded-full bg-[#915EFF]" }),
                react_1.default.createElement("div", { className: "w-1 sm:h-80 h-40 violet-gradient" })),
            react_1.default.createElement("div", null,
                react_1.default.createElement("h1", { className: `${styles_1.styles.heroHeadText} text-white` },
                    "Hi, I'm ",
                    react_1.default.createElement("span", { className: "text-[#915EFF]" }, "Shane")),
                react_1.default.createElement("p", { className: `${styles_1.styles.heroSubText} mt-2 text-white-100` },
                    "Full Stack Developer ",
                    react_1.default.createElement("br", { className: "sm:block hidden" }),
                    react_1.default.createElement("span", { className: "text-[#915EFF]" }, "Medical BioTechnologist")))),
        react_1.default.createElement(canvas_1.ComputersCanvas, null),
        react_1.default.createElement("div", { className: "absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center" },
            react_1.default.createElement("a", { href: "#about" },
                react_1.default.createElement("div", { className: "w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2" },
                    react_1.default.createElement(framer_motion_1.motion.div, { animate: {
                            y: [0, 24, 0],
                        }, transition: {
                            repeatType: "loop",
                            repeat: Infinity,
                            duration: 1.5,
                        }, className: "w-3 h-3 rounded-full bg-secondary mb-1" }))))));
};
exports.default = Hero;
