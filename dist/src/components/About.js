"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_tilt_1 = require("react-tilt");
const framer_motion_1 = require("framer-motion");
const styles_1 = require("../styles");
const constants_1 = require("../constants");
const motion_1 = require("../utils/motion");
const hoc_1 = require("../hoc");
const ServiceCard = ({ index, title, icon }) => {
    const variant = (0, motion_1.fadeIn)("right", "spring", (0.5 * index), 0.75);
    return (react_1.default.createElement(react_tilt_1.Tilt, { className: "xs:w-[250px] w-full" },
        react_1.default.createElement(framer_motion_1.motion.div, { variants: variant, className: "w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card" },
            react_1.default.createElement("div", { className: "bg-tertiary rounded-[20px] p-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col" },
                react_1.default.createElement("img", { src: icon, alt: title, className: "w-16 h-16 object-contain" }),
                react_1.default.createElement("h3", { className: `text-white text-[20px] font-bold text-centre` }, title)))));
};
const AboutSection = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(framer_motion_1.motion.div, { variants: (0, motion_1.textVariant)(1) },
            react_1.default.createElement("p", { className: styles_1.styles.sectionSubText }, "Introduction"),
            react_1.default.createElement("h2", { className: styles_1.styles.sectionHeadText }, "Overview.")),
        react_1.default.createElement(framer_motion_1.motion.p, { variants: (0, motion_1.fadeIn)("right", "", 0.1, 1), className: "mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]" }, "I am a versatile professional proficient in both full stack development and medical biotechnology. With my expertise in building modern and scalable solutions, I strive to leverage my skills to bridge the gap between science and technology, contributing to the advancement of our industry."),
        react_1.default.createElement("div", { className: "mt-20 flex flex-wrap gap-10" }, constants_1.services.map((service, index) => (react_1.default.createElement(ServiceCard, { key: index, index: index, ...service }))))));
};
const About = () => {
    return react_1.default.createElement(hoc_1.SectionWrapper, { nameId: "about", component: AboutSection });
};
exports.default = About;
