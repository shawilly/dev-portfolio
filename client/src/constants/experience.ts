import { biorender, innovapost, dominion, microscope, me } from '../assets';
import { IExperience } from '../typings/common.types';
import { linkedinLinks } from './socialMedia';

export const experiences: IExperience[] = [
    {
        title: 'Technical Analyst',
        company_name: 'Innovapost',
        icon: innovapost,
        iconBg: '#383E56',
        date: 'May 2013 - Jun 2015',
        linkedin_link: linkedinLinks.profile,
        points: [
            'Deployed JavaScript and MySQL scripts for team automation tasks and data handling.',
            'Served as the primary French-speaking agent during night shifts for a large client base.',
            'Conducted various studies, including outage mapping, issue trend identification, and reporting to management.',
        ],
    },
    {
        title: 'Education and Cheffing',
        company_name: 'Various Fine Dining Establishments.',
        icon: microscope,
        iconBg: '#E6DEDD',
        date: 'July 2015 - Dec 2020',
        linkedin_link: linkedinLinks.education,
        points: ['Pursued further education in Medical BioTechnology, and Experience in Culinary Arts.'],
    },
    {
        title: 'Quality Control Technician',
        company_name: 'Dominion City Brewing Co.',
        icon: dominion,
        iconBg: '#E6DEDD',
        date: 'Sep 2017 - May 2018',
        linkedin_link: linkedinLinks.profile,
        points: [
            'Improved yeast culture reporting through aseptic techniques and microbiology knowledge.',
            'Enhanced food preservation, processing, and packaging methods through extensive product testing under various conditions.',
            'Ensured product compliance with Ontario Law and Regulations and Standard Operating Procedures.',
        ],
    },
    {
        title: 'Customer Support Operations',
        company_name: 'BioRender',
        icon: biorender,
        iconBg: '#383E56',
        date: 'Jan 2021 - Jun 2022',
        linkedin_link: linkedinLinks.profile,
        points: [
            'Pivotal CX support role, achieved >95% satisfaction.',
            'Led development on app development, resulting in >75% automation, 33% faster response time and 15% higher customer engagement.',
            'Contributed to $50k+ annual savings through automation, saving 100+ working hours weekly.',
            'Opened team to take on >$1,000,000 per year in quote requests, reducing manual involvement by >50%, and opening feature to 3x more customers.',
        ],
    },
    {
        title: 'Software Developer',
        company_name: 'Freelance',
        icon: me,
        iconBg: '#E6DEDD',
        date: 'Jan 2021 - Present',
        linkedin_link: linkedinLinks.profile,
        points: [
            "Experienced Full-Stack Developer, 3+ years' experience.",
            'Deployed 5+ web solutions, >99.5% uptime.',
            'Proficient in JavaScript, React, TypeScript, Node.js, Express, Angular, REST APIs, HTML5, CSS3.',
            'Integrated Slack, Notion, Google APIs, improving team collaboration by >25%.',
            'Consistently met deadlines, delivered high-quality code within budget.',
            'Active in hackathons and coding competitions, consistent online courses completion, staying updated on industry trends.',
        ],
    },
    {
        title: 'Full stack Developer',
        company_name: 'BioRender',
        icon: biorender,
        iconBg: '#E6DEDD',
        date: 'Jun 2022 - Present',
        linkedin_link: linkedinLinks.profile,
        points: [
            'Crucial role in enterprise team led to releasing of 2 major features, expanding customer base and boosting company growth.',
            '40+ internal tools and features handled throughout development life cycle (AWS, MERN, Fastify, GCP, Git, JIRA, Docker, Redis)',
            'Collaborating with cross-functional teams including designers, product managers, go-to-market teams, and other developers to create high-quality products.',
            'Automating key ticket drivers by developing business specific micro-services leveraging GCP and RESTful APIs (both custom built and from third-party tooling)',
            'Participating in code reviews and providing constructive feedback to other developers.',
            'Administration of key tooling: Zendesk, Intercom, ReTool, Slack-Bots, Notion-Bots.',
        ],
    },
].reverse();
