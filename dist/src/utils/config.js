"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.ConfigKey = void 0;
const env_var_1 = __importDefault(require("env-var"));
// Keep this object alphabetically sorted.
var ConfigKey;
(function (ConfigKey) {
    ConfigKey["EMAILJS_SERVICE_ID"] = "EMAILJS_SERVICE_ID";
    ConfigKey["EMAILJS_TEMPLATE_ID"] = "EMAILJS_TEMPLATE_ID";
    ConfigKey["EMAILJS_PUBLIC_KEY"] = "EMAILJS_PUBLIC_KEY";
})(ConfigKey = exports.ConfigKey || (exports.ConfigKey = {}));
exports.config = {
    // required env vars
    emailJsServiceId: () => env_var_1.default.get(ConfigKey.EMAILJS_SERVICE_ID).required().asString(),
    emailJsTemplateId: () => env_var_1.default.get(ConfigKey.EMAILJS_TEMPLATE_ID).required().asString(),
    emailJsPublicKey: () => env_var_1.default.get(ConfigKey.EMAILJS_PUBLIC_KEY).required().asString(),
};
