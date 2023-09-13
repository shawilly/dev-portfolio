"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const styles_1 = require("../styles");
const constants_1 = require("../constants");
const assets_1 = require("../assets");
const MobileDetector_1 = require("../utils/MobileDetector");
const Navbar = () => {
    const [active, setActive] = react_1.default.useState("");
    const [toggle, setToggle] = react_1.default.useState(false);
    const { isMobile } = (0, MobileDetector_1.useMobileDetection)();
    const addLinks = (hamburger = true) => {
        const ulClassName = `list-none ${!hamburger
            ? "hidden sm:flex flex-row gap-10"
            : "flex justify-end items-start flex-col gap-4"}`;
        const navLink = constants_1.navLinks.map((link) => {
            const liClassName = `${active === link.title ? "text-white" : "text-secondary"} ${!hamburger
                ? "hover:text-white text-[18px] font-medium cursor-pointer"
                : "font-poppins font-medium cursor-pointer, text-[16px]"}`;
            return (react_1.default.createElement("li", { key: link.id, className: liClassName, onClick: () => setActive(link.title) },
                react_1.default.createElement("a", { href: `#${link.id}` }, link.title)));
        });
        return react_1.default.createElement("ul", { className: ulClassName }, navLink);
    };
    return (react_1.default.createElement("nav", { className: `${styles_1.styles.paddingX} w-full items-center py-5 fixed top-0 z-20 bg-primary` },
        react_1.default.createElement("div", { className: "w-full flex justify-between items-centre max-w-7x1 mx-auto" },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: "flex items-center gap-2", onClick: () => {
                    setActive("");
                    window.scrollTo(0, 0);
                } },
                react_1.default.createElement("img", { src: assets_1.logo, alt: "logo", className: "w-9 h-9 object-contain" }),
                react_1.default.createElement("p", { className: "text-white text-[18px] font-bold cursor-pointer flex" },
                    "Shane Williams \u00A0",
                    react_1.default.createElement("span", { className: "sm:block hidden" }, "| Portfolio"))),
            addLinks(isMobile),
            react_1.default.createElement("div", { className: "sm:hidden flex flex-1 justify-end items-center" },
                react_1.default.createElement("img", { src: toggle ? assets_1.close : assets_1.menu, alt: "menu", className: "w-[28px] h-[28px] object-contain cursor-pointer", onClick: () => setToggle(!toggle) }),
                react_1.default.createElement("div", { className: `${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl` }, addLinks(true))))));
};
exports.default = Navbar;
