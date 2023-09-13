"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMobileDetection = void 0;
const react_1 = require("react");
const useMobileDetection = () => {
    const [isMobile, setIsMobile] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const mediaQuery = window.matchMedia("(max-width: 640px)");
        setIsMobile(mediaQuery.matches);
        const handleMediaQueryChange = (e) => {
            setIsMobile(e.matches);
        };
        mediaQuery.addEventListener("change", handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);
    return { isMobile, setIsMobile };
};
exports.useMobileDetection = useMobileDetection;
