"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navLinks = exports.testimonials = exports.technologies = exports.services = exports.projects = exports.experiences = exports.contact = void 0;
const experience_1 = require("./experience");
Object.defineProperty(exports, "experiences", { enumerable: true, get: function () { return experience_1.experiences; } });
const projects_1 = require("./projects");
Object.defineProperty(exports, "projects", { enumerable: true, get: function () { return projects_1.projects; } });
const services_1 = require("./services");
Object.defineProperty(exports, "services", { enumerable: true, get: function () { return services_1.services; } });
const technologies_1 = require("./technologies");
Object.defineProperty(exports, "technologies", { enumerable: true, get: function () { return technologies_1.technologies; } });
const testimonials_1 = require("./testimonials");
Object.defineProperty(exports, "testimonials", { enumerable: true, get: function () { return testimonials_1.testimonials; } });
const navLinks_1 = require("./navLinks");
Object.defineProperty(exports, "navLinks", { enumerable: true, get: function () { return navLinks_1.navLinks; } });
const contact = {
    to_name: "Shane",
    to_email: "shane@shawilly.dev",
};
exports.contact = contact;
