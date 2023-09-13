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
const React = __importStar(require("react"));
const framer_motion_1 = require("framer-motion");
const motion_1 = require("../utils/motion");
const styles_1 = require("../styles");
/**
 * Wrapper for the sections
 * @param nameId - id of the section
 * @param component - component to be wrapped
 * @param rest - props for the component
 * @returns - wrapped component
 */
const SectionWrapper = ({ nameId, component: Component, }) => {
    return (React.createElement(framer_motion_1.motion.section, { variants: (0, motion_1.staggerContainer)(), initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.25 }, className: `${styles_1.styles.padding} max-w-7xl mx-auto relative z-0` },
        React.createElement("span", { className: "hash-span", id: nameId }, "\u00A0"),
        React.createElement(Component, null)));
};
exports.default = SectionWrapper;
