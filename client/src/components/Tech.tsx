import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { ToolPour } from "./canvas";
import { tools } from "../constants/technologies";
import { styles } from "../styles";
import { useMediaQuery } from "../utils/MobileDetector";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

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
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <motion.div
      variants={fadeIn("", "spring", 1 * 0.5, 0.75)}
      className="flex flex-col items-center justify-center w-full h-full"
    >
      <h1 className={`${styles.sectionHeadText} text-grey`}>
        Things I've used.
      </h1>
      <p className={`${styles.sectionSubText} mt-2 text-white-100`}>
        Keep clicking.
      </p>
      <b></b>
      <div className="w-full h-[50vh] max-h-[570px] flex flex-row flex-wrap justify-center gap-10 rounded-[25%]">
        {isLoading ? ( // Show loading state when isLoading is true
          <div className="w-28 h-28">
            <div>Loading...</div>
          </div>
        ) : (
          <ToolPour technologies={technologies} tools={tools} />
        )}
      </div>
    </motion.div>
  );
};

const Tech: React.FC<{}> = () => {
  return <SectionWrapper component={TechSection} />;
};

export default Tech;
