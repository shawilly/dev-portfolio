"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const hoc_1 = require("../hoc");
const constants_1 = require("../constants");
const canvas_1 = require("./canvas");
const technologies_1 = require("../constants/technologies");
const styles_1 = require("../styles");
const TechSection = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "flex flex-row flex-wrap justify-center gap-10" }, constants_1.technologies.map((technology) => (react_1.default.createElement("div", { className: "w-28 h-28", key: technology.name },
            react_1.default.createElement(canvas_1.BallCanvas, { technologyImgUrl: technology.technologyImgUrl }))))),
        react_1.default.createElement("div", null,
            react_1.default.createElement("b", null),
            react_1.default.createElement("h3", { className: `${styles_1.styles.sectionSubText} p-10 padding-bottom-0` }, "Tools I've used."),
            react_1.default.createElement("div", { className: "flex justify-center space-x-4 padding-top-[15px]" }, technologies_1.tools.map((toolLink, index) => (react_1.default.createElement("div", { className: "bg-[#FFF8EB] rounded-xl" },
                react_1.default.createElement("img", { src: toolLink, className: "object-contain rounded-xl p-2 hover:opacity-80 transition duration-300 ease-in-out justify-center flex flex-col", width: "40", height: "40", alt: "Tool" }))))))));
};
const Tech = () => {
    return react_1.default.createElement(hoc_1.SectionWrapper, { component: TechSection });
};
exports.default = Tech;
