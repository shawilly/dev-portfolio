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
const react_1 = __importStar(require("react"));
const styles_1 = require("../styles");
const ErrorModal = ({ error, onClose }) => {
    const [showModal, setShowModal] = react_1.default.useState(false);
    (0, react_1.useEffect)(() => {
        if (error) {
            setShowModal(true);
        }
    }, [error]);
    if (!showModal || !error) {
        return null;
    }
    return (react_1.default.createElement("div", { className: `${styles_1.styles.padding} w-[800px] h-[800px] fixed inset-0 flex items-center justify-center z-50` },
        react_1.default.createElement("div", { className: "bg-white opacity-91 p-6 rounded-xl shadow-md" },
            react_1.default.createElement("h2", { className: "text-xl text-[#ff0000] font-semibold mb-4" }, "Error"),
            react_1.default.createElement("p", { className: "mb-4 text-black bold items-centre" },
                "An error has occurred:",
                " ",
                react_1.default.createElement("span", { className: "text-[#ff0000] italic" }, `${error.message}`),
                " "),
            react_1.default.createElement("p", { className: "mb-4 text-black bold items-centre" },
                "Please try refreshing the page. If the error persists, please contact support at",
                " ",
                react_1.default.createElement("a", { className: "text-[#0000FF] underline", href: "mailto:support@shawilly.dev" }, "support@shawilly.dev"),
                "."),
            react_1.default.createElement("button", { className: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded", onClick: onClose }, "Close"))));
};
exports.default = ErrorModal;
