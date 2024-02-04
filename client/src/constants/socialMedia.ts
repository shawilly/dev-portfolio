const InstagramURL = 'https://www.instagram.com/fatmanlifting/';
const gitHubURL = 'https://github.com/shawilly/shawilly';
const liProfile = 'https://www.linkedin.com/in/shanebarrywilliams';
const socialMediaLinks: string[] = [InstagramURL, gitHubURL, liProfile];

const linkedinLinks = {
    profile: liProfile,
    experience: `${liProfile}/details/experience`,
    recommendations: `${liProfile}/details/recommendations`,
    education: `${liProfile}/details/education`,
    skills: `${liProfile}/details/skills`,
    certifications: `${liProfile}/details/certifications`,
} as const;

export { linkedinLinks, socialMediaLinks };
