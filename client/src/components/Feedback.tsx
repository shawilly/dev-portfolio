import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { ITestimonial } from "../typings/common.types";
import { linkedin } from "../assets";
import { linkedinLinks } from "../constants/socialMedia";
import ClickableComponent from "../hoc/ClickableComponent";
import { useMediaQuery } from "../utils/MobileDetector";

interface FeedbackCardProp extends ITestimonial {
  index: number;
  key: string;
  image: string;
}

const FeedbackCard: React.FC<FeedbackCardProp> = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  const isMobile = useMediaQuery("(max-width: 530px)");

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>

      <div className="mt-1">
        <p className={isMobile?"text-white tracking-wider text-[14px]":"text-white tracking-wider text-[18px]"}>{testimonial}</p>
        <div className="flex items-center mt-5">
          <a href={linkedinLinks.profile} target="_blank" className="flex">
            <img src={linkedin as string} alt="linkedin" className="w-5 h-5" />
            <p className="ml-2 text-secondary text-[12px]">View on LinkedIn</p>
          </a>
        </div>
        <div className="mt-7 flex justify-between padding-top-10 items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} at {company}
            </p>
          </div>
          <ClickableComponent
            className="w-[65px] h-[65px] rounded-full"
            onClick={() => window.open(linkedinLinks.recommendations, "_blank")}
            component={() => (
              <img
                src={image}
                alt={`feedback-by-${name}`}
                className="w-[65px] h-[65px] rounded-full"
              />
            )}
          />
        </div>
      </div>
    </motion.div>
  );
};

const FeedbackSection: React.FC<{}> = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...{ ...testimonial, image: testimonial.image as string }}
          />
        ))}
      </div>
    </div>
  );
};

const Feedback: React.FC<{}> = () => {
  return <SectionWrapper nameId="feedback" component={FeedbackSection} />;
};

export default Feedback;
