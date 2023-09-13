"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const components_1 = require("./components");
const App = () => {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement("div", { className: "relative z-0 bg-primary" },
            react_1.default.createElement("div", { className: "bg-hero-pattern bg-cover bg-no-repeat bg-center" },
                react_1.default.createElement(components_1.Navbar, null),
                react_1.default.createElement(components_1.Hero, null)),
            react_1.default.createElement("div", { className: "bg-primary" },
                react_1.default.createElement(components_1.About, null),
                react_1.default.createElement(components_1.Experience, null),
                react_1.default.createElement(components_1.Tech, null),
                react_1.default.createElement(components_1.Feedback, null),
                react_1.default.createElement("div", { className: "relative z-0" },
                    react_1.default.createElement(components_1.Contact, null),
                    react_1.default.createElement(components_1.StarsCanvas, null))))));
};
exports.default = App;
