import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { technologies } from '../constants';
import { tools } from '../constants/technologies';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { ToolPour } from './canvas';

const TechSection: React.FC<{}> = () => {
    return (
        <motion.div variants={fadeIn('', 'spring', 1 * 0.5, 0.75)} className="flex flex-col w-full h-full">
            <motion.div variants={textVariant(1)} className="padding-bottom-[15px] justify-left items-left">
                <p className={styles.sectionSubText}>Things I've used</p>
                <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
                <motion.p
                    variants={fadeIn('right', '', 0.1, 1)}
                    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Go ahead and click to discover the tools and technologies I've used in my software development
                    journey.
                </motion.p>
            </motion.div>
            <div className="w-full h-[50vh] max-h-[570px] flex flex-row flex-wrap justify-center gap-10 rounded-[25%]">
                <ToolPour technologies={technologies} tools={tools} />
            </div>
        </motion.div>
    );
};

const Tech: React.FC<{}> = () => {
    return <SectionWrapper component={TechSection} />;
};

export default Tech;
