import { motion } from "framer-motion";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { linkedin } from "../assets";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { IExperience } from "../typings/common.types";
import { useMediaQuery } from "../utils/MobileDetector";
import { textVariant } from "../utils/motion";

interface ExperienceCardProps {
  experience: IExperience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const isMobile = useMediaQuery("(max-width: 530px)");

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  #232631",
      }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center h-full w-full items-center">
          <img
            src={experience.icon as string}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white font-bold text-[24px]">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className={
              isMobile
                ? `text-white-100 text-[11px]`
                : `text-white-100 text-[14px] padding-left-1 tracking-wider`
            }
          >
            {point}
          </li>
        ))}
      </ul>
      {isMobile ? (
        <div className="flex items-center mt-5">
          <a
            href={experience.linkedin_link}
            target="_blank"
            className="flex opacity-75 hover:opacity-100"
          >
            <img
              src={linkedin as string}
              alt="linkedin"
              className="w-10 justify-center items-center"
            />
          </a>
        </div>
      ) : (
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(experience.linkedin_link, "_blank")}
            className="blue-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={linkedin as string}
              alt="linkedin"
              className="w-5 h-5 object-contain"
            />
          </div>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

const ExperienceSection: React.FC<{}> = () => {
  return (
    <>
      <motion.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              experience={experience}
              key={`experience-${index}`}
            />
          ))}
        </VerticalTimeline>{" "}
      </div>
    </>
  );
};

const Experience: React.FC<{}> = () => {
  return <SectionWrapper nameId="work" component={ExperienceSection} />;
};

export default Experience;
