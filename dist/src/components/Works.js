"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const hoc_1 = require("../hoc");
const react_tilt_1 = require("react-tilt");
const framer_motion_1 = require("framer-motion");
const styles_1 = require("../styles");
const assets_1 = require("../assets");
const constants_1 = require("../constants");
const motion_1 = require("../utils/motion");
const ProjectCard = ({ index, image, name, description, tags, source_code_link, }) => {
    return (react_1.default.createElement(framer_motion_1.motion.div, { variants: (0, motion_1.fadeIn)("up", "spring", index * 0.5, 0.75) },
        react_1.default.createElement(react_tilt_1.Tilt, { options: {
                max: 45,
                scale: 1,
                speed: 450,
            }, className: "bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full" },
            react_1.default.createElement("div", { className: "relative w-full h-[230px]" },
                react_1.default.createElement("img", { src: image, alt: name, className: "w-full h-full object-cover rounded-2xl" }),
                react_1.default.createElement("div", { className: "absolute inset-0 flex justify-end m-3 card-img_hover" },
                    react_1.default.createElement("div", { onClick: () => window.open(source_code_link, "_blank"), className: "black-gradient w-10 h-10 rounded-full flex justify-centre items-center cursor-pointer" },
                        react_1.default.createElement("img", { src: assets_1.github, alt: "github", className: "w-5 h-5 object-contain" })))),
            react_1.default.createElement("div", { className: "mt-5" },
                react_1.default.createElement("h3", { className: "text-white font-bold text-[24px]" }, name),
                react_1.default.createElement("p", { className: "mt-2 text-secondary text-[14px]" }, description)),
            react_1.default.createElement("div", { className: "mt-4 flex flex-wrap gap-2" }, tags.map((tag, index) => (react_1.default.createElement("p", { key: `project-tag-${index}`, className: `text-[14px] ${tag.color}` },
                "#",
                tag.name)))))));
};
const WorksSection = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(framer_motion_1.motion.div, { variants: (0, motion_1.textVariant)(1) },
            react_1.default.createElement("p", { className: styles_1.styles.sectionSubText }, "My work."),
            react_1.default.createElement("h2", { className: styles_1.styles.sectionHeadText }, "Projects.")),
        react_1.default.createElement("div", { className: "w-full flex" },
            react_1.default.createElement(framer_motion_1.motion.p, { variants: (0, motion_1.fadeIn)("", "", 0.1, 1), className: "mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]" }, "This is an intro for this section")),
        react_1.default.createElement("div", { className: "mt-20 flex flex-wrap gap-7" }, constants_1.projects.map((project, index) => (react_1.default.createElement(ProjectCard, { key: `project-${index}`, ...project, index: index }))))));
};
const Works = () => {
    return react_1.default.createElement(hoc_1.SectionWrapper, { component: WorksSection });
};
exports.default = Works;
