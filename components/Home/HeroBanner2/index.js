// components/WeightLossComponent.js

import Image from "next/image";
import CardZoomer from "../CardZoomer";
import { TypeAnimation } from "react-type-animation";
import { card_zoomer_content } from "../HeroBanner1/zoomer";
import { IoIosSearch } from "react-icons/io";
import { typography, features } from "./seed";
import { SearchIcon } from "./SearchIcon";

export default function HeroBanner2() {
  return (
    <div className="mt-8 md:mt-24 lg:mt-16 mx-auto bg-white px-6 rounded-lg flex flex-col items-center justify-center h-[calc(100vh-4rem)] md:flex-row md:items-start md:justify-center md:p-8 lg:px-8 lg:py-12">
      <div className="md:w-1/2 md:h-full flex flex-col justify-start md:justify-center space-y-8 md:text-left">
        <div className="bg-white text-justify space-y-2">
          <h1 className="text-2xl font-semibold text-black md:text-3xl lg:text-4xl !md:leading-[3rem]">
            Your health isn’t just your priority.&nbsp;
          </h1>
          <h1
            className="text-2xl font-semibold md:text-3xl lg:text-4xl !md:leading-[3rem]"
            style={{
              backgroundImage:
                "linear-gradient(222deg, rgb(158, 73, 82), rgb(220, 146, 110))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            It’s ours too.
          </h1>
          <h1 className="text-2xl font-semibold text-black md:text-3xl lg:text-4xl !md:leading-[3rem]">
            <TypeAnimation
              className="text-[#DAA06D]"
              sequence={typography}
              style={{
                backgroundImage:
                  "linear-gradient(222deg, rgb(158, 73, 82), rgb(220, 146, 110))",
                WebkitBackgroundClip: "text",
                color: "transparent",
                lineHeight: "4rem",
              }}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <ul className="space-y-2 text-left my-4">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-start md:justify-start">
                <span className="w-6 h-6 mr-3 flex items-center justify-center bg-[#FFD9B2] text-white font-semibold rounded-full flex-shrink-0">
                  ✓
                </span>
                <span className="flex-grow">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 md:justify-start">
            <button className="sm:w-auto flex items-center space-x-4 bg-black text-white font-semibold py-3 px-5 rounded-full outline-none border-none">
              <SearchIcon />
              &nbsp; Find my treatment
            </button>
          </div>
        </div>
      </div>

      <div className="hidden mt-8 md:mt-0 md:w-1/2 md:flex flex-wrap justify-end gap-4 overflow-hidden">
        <img
          src="/assets/doctor.jpg"
          style={{ maxHeight: "calc(100vh - 7rem)" }}
        />
      </div>
    </div>
  );
}
