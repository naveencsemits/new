import React from "react";

export default function Hamburger() {
  return (
    <button
      className="p-3 focus:outline-none bg-white  rounded-full text-gray-800 z-50  hover:bg-sidebar_hover shadow-md"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
      <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
      <span className="block w-6 h-0.5 bg-gray-800"></span>
    </button>
  );
}
