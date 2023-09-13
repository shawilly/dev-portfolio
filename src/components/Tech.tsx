import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { ITechnology } from "../typings/common.types";
import { BallCanvas } from "./canvas";
import { tools } from "../constants/technologies";
import { styles } from "../styles";

const TechSection: React.FC<{}> = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology: ITechnology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas technologyImgUrl={technology.technologyImgUrl} />
          </div>
        ))}
      </div>
      <div>
        <b></b>
        <h3 className={`${styles.sectionSubText} p-10 padding-bottom-0`}>
          Tools I've used.
        </h3>
        <div className="flex justify-center space-x-4 padding-top-[15px]">
          {tools.map((toolLink: string, index: number) => (
            <div className="bg-[#FFF8EB] rounded-xl">
              <img
                src={toolLink} // Use the tool link from your array
                className="object-contain rounded-xl p-2 hover:opacity-80 transition duration-300 ease-in-out justify-center flex flex-col"
                width="40"
                height="40"
                alt="Tool"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Tech: React.FC<{}> = () => {
  return <SectionWrapper component={TechSection} />;
};

export default Tech;
