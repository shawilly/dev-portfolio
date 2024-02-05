import { motion } from 'framer-motion';
import React from 'react';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { SocialIcon } from 'react-social-icons';
import { socialMediaLinks } from '../constants/socialMedia';

const Hero: React.FC<{}> = () => {
    return (
        <section className={`relative w-full h-screen mx-auto `}>
            <div
                className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-secondary inverse-green-gradient" />
                    <div className="w-1 sm:h-80 h-40 green-gradient z-1" />
                </div>

                <div className="z-10">
                    <h1 className={`${styles.heroHeadText}`}>
                        Hi, I'm <span className="text-[#414767]">Shane</span>
                    </h1>
                    <p className={`text-[#414767] ${styles.heroSubText} mt-2`}>
                        Full Stack Software Developer <br className="sm:block hidden" />
                        <span className="text-secondary lg:text-[25px] sm:text-[21px] xs:text-[15px] text-[11px] lg:leading-[35px]">Medical BioTechnologist</span>
                    </p>
                    <div className="flex justify-left items-center gap-4 mt-4">
                        {socialMediaLinks.map((link: string, index: number) => (
                            <SocialIcon url={link} key={index} />
                        ))}
                    </div>
                </div>
            </div>

            <ComputersCanvas />

            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                repeatType: 'loop',
                                repeat: Infinity,
                                duration: 1.5,
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
