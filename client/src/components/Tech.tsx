import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { ToolPour } from "./canvas";
import { tools } from "../constants/technologies";
import { styles } from "../styles";
import { useMediaQuery } from "../utils/MobileDetector";

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
  const isMobile = useMediaQuery("(max-width: 880px)");
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <b></b>
      <h3 className={`${styles.sectionSubText} p-10 padding-bottom-0`}>
        Tools and Technologies I've used.
      </h3>
      <div className="w-full h-[50vh] max-h-[570px] flex flex-row flex-wrap justify-center gap-10 rounded-[50%]">
        {isLoading ? ( // Show loading state when isLoading is true
          <div className="w-28 h-28">
            {/* Add your loading state JSX here */}
            <div>Loading...</div>
          </div>
        ) : (
          <ToolPour technologies={technologies} tools={tools} />
        )}
      </div>
      {/* <div>
        <b></b>
        <h3 className={`${styles.sectionSubText} p-10 padding-bottom-0`}>
          Tools I've used.
        </h3>
        <div>
          <ToolRows toolLinks={tools} />
        </div>
      </div> */}
    </div>
  );
};

const Tech: React.FC<{}> = () => {
  return <SectionWrapper component={TechSection} />;
};

export default Tech;
