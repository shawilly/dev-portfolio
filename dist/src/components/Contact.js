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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const styles_1 = require("../styles");
const canvas_1 = require("./canvas");
const hoc_1 = require("../hoc");
const motion_1 = require("../utils/motion");
const framer_motion_1 = require("framer-motion");
const browser_1 = __importDefault(require("@emailjs/browser"));
const constants_1 = require("../constants");
const socialMedia_1 = require("../constants/socialMedia");
const react_social_icons_1 = require("react-social-icons");
var FORM_ELEMENTS;
(function (FORM_ELEMENTS) {
    FORM_ELEMENTS["INPUT"] = "input";
    FORM_ELEMENTS["TEXTAREA"] = "textarea";
})(FORM_ELEMENTS || (FORM_ELEMENTS = {}));
const nullForm = {
    name: "",
    email: "",
    message: "",
};
const ContactSection = () => {
    const formRef = (0, react_1.useRef)(null);
    const [form, setForm] = (0, react_1.useState)(nullForm);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const formSetter = (e) => {
        const { target: { name, value }, } = e;
        setForm((form) => ({ ...form, [name]: value }));
    };
    const handleInputChange = (e) => formSetter(e);
    const handleTextAreaChange = (e) => formSetter(e);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await browser_1.default.send("service_qq39z0k", "template_sra5pym", {
                ...constants_1.contact,
                from_name: form.name,
                from_email: form.email,
                message: form.message,
            }, "2IvTkCMuCOiYXPDH5");
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible");
            setForm(nullForm);
        }
        catch (error) {
            setLoading(false);
            console.error(error);
            alert(`Something went wrong. Please try again or reach out to me directly at ${constants_1.contact.to_email}`);
        }
    };
    const createFormFields = (fields) => fields.map((field) => {
        const { name, value } = field;
        const isTextArea = name === "message";
        const type = isTextArea ? FORM_ELEMENTS.TEXTAREA : FORM_ELEMENTS.INPUT;
        const specificProps = isTextArea
            ? { rows: 7, onChange: handleTextAreaChange }
            : { type, onChange: handleInputChange };
        const components = {
            key: `form-${type}-${name}`,
            name,
            value,
            placeholder: `What's your ${name}?`,
            className: "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium",
            ...specificProps,
        };
        const formElement = react_1.default.createElement(type, {
            ...components,
            onChange: handleInputChange,
        });
        return (react_1.default.createElement("label", { key: `form-label-${name}`, className: "flex flex-col" },
            react_1.default.createElement("span", { className: "text-white font-medium mb-4" }, `Your ${name}`),
            formElement));
    });
    return (react_1.default.createElement("div", { className: "xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden" },
        react_1.default.createElement(framer_motion_1.motion.div, { variants: (0, motion_1.slideIn)("left", "tween", 0.2, 1), className: "flex-[0.75] bg-black-100 p-8 rounded-2xl" },
            react_1.default.createElement("p", { className: styles_1.styles.sectionSubText }, "Get in touch"),
            react_1.default.createElement("h3", { className: styles_1.styles.sectionHeadText }, "Contact."),
            react_1.default.createElement("form", { ref: formRef, onSubmit: handleSubmit, className: "mt-12 flex flex-col gap-8" },
                createFormFields([
                    { name: "name", value: form.name },
                    { name: "email", value: form.email },
                    { name: "message", value: form.message },
                ]),
                react_1.default.createElement("button", { type: "submit", className: "bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl" }, loading ? "Sending..." : "Send")),
            react_1.default.createElement("h2", { className: "text-center text-secondary" }, "I'm here too."),
            react_1.default.createElement("p", { className: "text-center overlay-grey" }, socialMedia_1.socialMediaLinks.map((link) => (react_1.default.createElement(react_social_icons_1.SocialIcon, { url: link }))))),
        react_1.default.createElement(framer_motion_1.motion.div, { variants: (0, motion_1.slideIn)("right", "tween", 0.2, 1), className: "xl:flex-1 xl:h-auto md:h-[550px] h-[350px]" },
            react_1.default.createElement(canvas_1.EarthCanvas, null))));
};
const Contact = () => {
    return react_1.default.createElement(hoc_1.SectionWrapper, { component: ContactSection, nameId: "contact" });
};
exports.default = Contact;
