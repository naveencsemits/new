// components/WeightLossComponent.js

import Image from "next/image";
import CardZoomer from "../CardZoomer";
import { TypeAnimation } from "react-type-animation";
import { card_zoomer_content } from "../HeroBanner1/zoomer";
import { IoIosSearch } from "react-icons/io";
import { typography, features } from "./seed";
import { SearchIcon } from "./SearchIcon";

export default function HeroBanner() {
  return (
    <div className="mt-16 px-6  md:h-[calc(100vh-4rem)] md:p-8 lg:px-8 lg:py-12 rounded-lg flex flex-col md:flex-row items-center md:items-start justify-center  mx-auto">
      {" "}
      <div className="md:w-1/2  flex flex-col justify-center space-y-8 text-center h-full md:text-left">
        {" "}
        <div className="bg-white-500">
          <h1 className="text-xl md:text-4xl lg:text-4xl font-semibold text-black leading-[8rem] text-left">
            Your health isn’t just your priority.&nbsp;
            <br />
            <span
              className="lg:text-4xl"
              style={{
                backgroundImage:
                  "linear-gradient(222deg, rgb(158, 73, 82), rgb(220, 146, 110))",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              It’s ours too.
            </span>
          </h1>

          <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold text-black leading-[8rem] text-left">
            <TypeAnimation
              className="text-[#DAA06D] "
              sequence={typography}
              style={{
                backgroundImage:
                  "linear-gradient(222deg, rgb(158, 73, 82), rgb(220, 146, 110))",
                WebkitBackgroundClip: "text",
                color: "transparent",
                lineHeight: "5rem",
              }}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <ul className="space-y-2 ">
            {features.map((item, idx) => {
              return (
                <li
                  className="flex items-start justify-center md:justify-start"
                  key={idx}
                >
                  <span className="w-6 h-6 bg-[#FFD9B2] rounded-full mr-3 flex items-center justify-center text-white font-semibold">
                    ✓
                  </span>
                  {item}
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col sm:flex-row items-center sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <button className="flex flex-row  items-center space-x-4 bg-black text-white font-semibold py-3 px-5 rounded-full w-full sm:w-auto outline-none border-none">
              <SearchIcon />
              &nbsp; Find my treatment
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex flex-wrap justify-end md:justify-end gap-4 mt-8 md:mt-0 overflow-hidden">
       
      </div>
    </div>
  );
}
