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
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <motion.p
      variants={textVariant()}
      className="text-white font-black text-[48px]"
    >
      "
    </motion.p>
    <div className="mt-1"></div>
    <motion.p
      variants={fadeIn("", "spring", index * 0.75, 0.75)}
      className="text-white text-[18px] tracking-wider"
    >
      {testimonial}
    </motion.p>
    <div className="mt-7 flex justify-between items-center gap-1">
      <div className="flex flex-1 flex-col">
        <p className="text-white font-medium text-[16px]">
          <span className="blue-text-gradient">@</span>
          {name}
        </p>
        <p className="mt-1 text-secondary text-[12px]">
          {designation} of {company}
        </p>
        <ClickableComponent
          className="w-10 h-10 rounded-full"
          onClick={() => window.open(linkedinLinks.recommendations, "_blank")}
          component={() => (
            <img
              src={image}
              alt={`feedback-by-${name}`}
              className="w-10 h-10 rounded-full"
            />
          )}
        />
      </div>
    </div>
  </motion.div>
);

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
          <>
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...{ ...testimonial, image: testimonial.image as string }}
            />
          </>
        ))}
      </div>
    </div>
  );
};

const Feedback: React.FC<{}> = () => {
  return <SectionWrapper nameId="feedback" component={FeedbackSection} />;
};

export default Feedback;
