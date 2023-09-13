"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarsCanvas = exports.ComputersCanvas = exports.BallCanvas = exports.EarthCanvas = void 0;
const Earth_1 = __importDefault(require("./Earth"));
exports.EarthCanvas = Earth_1.default;
const Ball_1 = __importDefault(require("./Ball"));
exports.BallCanvas = Ball_1.default;
const Computers_1 = __importDefault(require("./Computers"));
exports.ComputersCanvas = Computers_1.default;
const Stars_1 = __importDefault(require("./Stars"));
exports.StarsCanvas = Stars_1.default;
