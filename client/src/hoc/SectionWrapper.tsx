import * as React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { styles } from '../styles';
import { services } from '../constants';

type WrapperProps = {
    component: React.ComponentType<any>;
    nameId?: string;
};

/**
 * Wrapper for the sections
 * @param nameId - id of the section
 * @param component - component to be wrapped
 * @param rest - props for the component
 * @returns - wrapped component
 */
const SectionWrapper: React.FC<WrapperProps> = ({ nameId, component: Component }) => {
    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <span className="hash-span" id={nameId}>
                &nbsp;
            </span>

            <Component />
        </motion.section>
    );
};

export default SectionWrapper;
