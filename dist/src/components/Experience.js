"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_vertical_timeline_component_1 = require("react-vertical-timeline-component");
const framer_motion_1 = require("framer-motion");
require("react-vertical-timeline-component/style.min.css");
const styles_1 = require("../styles");
const constants_1 = require("../constants");
const hoc_1 = require("../hoc");
const motion_1 = require("../utils/motion");
const assets_1 = require("../assets");
const ExperienceCard = ({ experience }) => {
    return (react_1.default.createElement(react_vertical_timeline_component_1.VerticalTimelineElement, { contentStyle: {
            background: "#1d1836",
            color: "#fff",
        }, contentArrowStyle: {
            borderRight: "7px solid  #232631",
        }, date: experience.date, iconStyle: { background: experience.iconBg }, icon: react_1.default.createElement("div", { className: "flex justify-center h-full w-full items-center" },
            react_1.default.createElement("img", { src: experience.icon, alt: experience.company_name, className: "w-[60%] h-[60%] object-contain" })) },
        react_1.default.createElement("div", null,
            react_1.default.createElement("h3", { className: "text-white font-bold text-[24px]" }, experience.title),
            react_1.default.createElement("p", { className: "text-secondary text-[16px] font-semibold", style: { margin: 0 } }, experience.company_name),
            react_1.default.createElement("div", { className: "absolute inset-0 flex justify-end m-3 card-img_hover" },
                react_1.default.createElement("div", { onClick: () => window.open(experience.linkedin_link, "_blank"), className: "blue-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer" },
                    react_1.default.createElement("img", { src: assets_1.linkedin, alt: "github", className: "w-5 h-5 object-contain" })))),
        react_1.default.createElement("ul", { className: "mt-5 list-disc ml-5 space-y-2" }, experience.points.map((point, index) => (react_1.default.createElement("li", { key: `experience-point-${index}`, className: "text-white-100 text-[14px] padding-left-1 tracking-wider" }, point))))));
};
const ExperienceSection = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(framer_motion_1.motion.div, { variants: (0, motion_1.textVariant)(1) },
            react_1.default.createElement("p", { className: styles_1.styles.sectionSubText }, "What I have done so far"),
            react_1.default.createElement("h2", { className: styles_1.styles.sectionHeadText }, "Work Experience.")),
        react_1.default.createElement("div", { className: "mt-20 flex flex-col" },
            react_1.default.createElement(react_vertical_timeline_component_1.VerticalTimeline, null, constants_1.experiences.map((experience, index) => (react_1.default.createElement(ExperienceCard, { experience: experience, key: `experience-${index}` })))),
            " ")));
};
const Experience = () => {
    return react_1.default.createElement(hoc_1.SectionWrapper, { nameId: "work", component: ExperienceSection });
};
exports.default = Experience;
