import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import {
  TransitionDelay,
  TransitionDuration,
  TransitionType,
  VariantDirection,
  fadeIn,
  textVariant,
} from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { IService } from "../typings/common.types";

interface ServiceCardProps extends IService {
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => {
  const variant = fadeIn(
    "right" as VariantDirection,
    "spring" as TransitionType,
    (0.5 * index) as TransitionDelay,
    0.75 as TransitionDuration
  );
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={variant}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] p-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon as string}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className={`text-white text-[20px] font-bold text-centre`}>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const AboutSection: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("right", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a versatile professional proficient in both full stack development
        and medical biotechnology. With my expertise in building modern and
        scalable solutions, I strive to leverage my skills to bridge the gap
        between science and technology, contributing to the advancement of our
        industry.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const About: React.FC = () => {
  return <SectionWrapper nameId="about" component={AboutSection} />;
};

export default About;
