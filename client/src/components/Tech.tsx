import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { technologies } from "../constants";
import { tools } from "../constants/technologies";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { ToolPour } from "./canvas";

interface ToolRowsProps {
  toolLinks: string[];
}

interface MapToolsProps {
  toolLink: string;
  index: number;
}

const MapTool = ({ toolLink, index }: MapToolsProps) => (
  <div
    className="bg-[#FFF8EB] rounded-xl p-2 hover:opacity-80 transition duration-300 ease-in-out"
    style={{ width: "48px", height: "48px", marginBottom: "8px" }}
    key={index}
  >
    <img src={toolLink} className="object-contain w-full h-full" alt="Tool" />
  </div>
);

const ToolRows = ({ toolLinks }: ToolRowsProps) => {
  const splitIndex = Math.ceil(toolLinks.length / 2);
  const [firstRow, secondRow] = [
    toolLinks.slice(0, splitIndex),
    toolLinks.slice(splitIndex),
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {([firstRow, secondRow] as string[][]).map((row, rowIndex) => (
        <div className="flex flex-wrap" key={rowIndex}>
          {row.map((toolLink, index) => (
            <MapTool toolLink={toolLink} index={index} key={index} />
          ))}
        </div>
      ))}
    </div>
  );
};

const TechSection: React.FC<{}> = () => {
  return (
    <motion.div
      variants={fadeIn("", "spring", 1 * 0.5, 0.75)}
      className="flex flex-col items-center justify-center w-full h-full"
    >
      <motion.div variants={textVariant(1)} className="padding-bottom-[15px]">
        <p className={styles.sectionSubText}>Things I've used</p>
        <h2 className={styles.sectionHeadText}>Click around.</h2>
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
