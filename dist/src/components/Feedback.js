"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const framer_motion_1 = require("framer-motion");
const styles_1 = require("../styles");
const hoc_1 = require("../hoc");
const motion_1 = require("../utils/motion");
const constants_1 = require("../constants");
const socialMedia_1 = require("../constants/socialMedia");
const ClickableComponent_1 = __importDefault(require("../hoc/ClickableComponent"));
const FeedbackCard = ({ index, testimonial, name, designation, company, image, }) => (react_1.default.createElement(framer_motion_1.motion.div, { variants: (0, motion_1.fadeIn)("", "spring", index * 0.5, 0.75), className: "bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full" },
    react_1.default.createElement(framer_motion_1.motion.p, { variants: (0, motion_1.textVariant)(), className: "text-white font-black text-[48px]" }, "\""),
    react_1.default.createElement("div", { className: "mt-1" }),
    react_1.default.createElement(framer_motion_1.motion.p, { variants: (0, motion_1.fadeIn)("", "spring", index * 0.75, 0.75), className: "text-white text-[18px] tracking-wider" }, testimonial),
    react_1.default.createElement("div", { className: "mt-7 flex justify-between items-center gap-1" },
        react_1.default.createElement("div", { className: "flex flex-1 flex-col" },
            react_1.default.createElement("p", { className: "text-white font-medium text-[16px]" },
                react_1.default.createElement("span", { className: "blue-text-gradient" }, "@"),
                name),
            react_1.default.createElement("p", { className: "mt-1 text-secondary text-[12px]" },
                designation,
                " of ",
                company),
            react_1.default.createElement(ClickableComponent_1.default, { className: "w-10 h-10 rounded-full", onClick: () => window.open(socialMedia_1.linkedinLinks.recommendations, "_blank"), component: () => (react_1.default.createElement("img", { src: image, alt: `feedback-by-${name}`, className: "w-10 h-10 rounded-full" })) })))));
const FeedbackSection = () => {
    return (react_1.default.createElement("div", { className: `mt-12 bg-black-100 rounded-[20px]` },
        react_1.default.createElement("div", { className: `bg-tertiary rounded-2xl ${styles_1.styles.padding} min-h-[300px]` },
            react_1.default.createElement(framer_motion_1.motion.div, { variants: (0, motion_1.textVariant)() },
                react_1.default.createElement("p", { className: styles_1.styles.sectionSubText }, "What others say"),
                react_1.default.createElement("h2", { className: styles_1.styles.sectionHeadText }, "Testimonials."))),
        react_1.default.createElement("div", { className: `-mt-20 pb-14 ${styles_1.styles.paddingX} flex flex-wrap gap-7` }, constants_1.testimonials.map((testimonial, index) => (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(FeedbackCard, { key: testimonial.name, index: index, ...{ ...testimonial, image: testimonial.image } })))))));
};
const Feedback = () => {
    return react_1.default.createElement(hoc_1.SectionWrapper, { nameId: "feedback", component: FeedbackSection });
};
exports.default = Feedback;
