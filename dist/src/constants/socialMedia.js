"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socialMediaLinks = exports.linkedinLinks = void 0;
const InstagramURL = "https://www.instagram.com/fatmanlifting/";
const gitHubURL = "https://github.com/shawilly/shawilly";
const liProfile = "https://www.linkedin.com/in/shanebarrywilliams";
const socialMediaLinks = [InstagramURL, gitHubURL, liProfile];
exports.socialMediaLinks = socialMediaLinks;
const linkedinLinks = {
    profile: liProfile,
    experience: `${liProfile}/details/experience`,
    recommendations: `${liProfile}/details/recommendations`,
    education: `${liProfile}/details/education`,
    skills: `${liProfile}/details/skills`,
    certifications: `${liProfile}/details/certifications`,
};
exports.linkedinLinks = linkedinLinks;
