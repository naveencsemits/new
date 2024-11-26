import React from "react";
import arr from "./seed";

export default function Strip() {
  return (
    <div className="fixed top-0 justify-between w-full text-[0.85rem] z-[100] bg-strip_bg text-gray-500 h-12 flex items-center px-8 space-x-2">
      <h2 className="font-semibold mr-4 whitespace-nowrap">Why Us?</h2>
      <span className="text-gray-500 text-2xl">|</span>{" "}
      {/* Increased font size */}
      <div className="flex flex-row overflow-hidden flex-grow">
        <div className="flex animate-marquee space-x-6">
          {arr.map((item, index) => (
            <p key={index} className="whitespace-nowrap">
              {item.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
