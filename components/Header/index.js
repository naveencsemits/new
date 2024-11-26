import { useState } from "react";
import Sidebar from "../Sidebar";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-12 left-0 right-0 bg-white shadow-md z-[101]">
      <div className="mx-auto px-8 sm:px-2 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <div className="flex-shrink-0 text-lg font-bold">
              Health Commerce
            </div>
          </Link>
          <div className="flex items-center space-between space-x-5">
            <div>
              <button className="text-sm shadow-md hover:shadow-none text-gray-700 hover:text-black py-2 px-3 rounded-[1.5rem] hover:bg-sidebar_hover transition-colors duration-300">
                Login
              </button>
            </div>

            <div className="ml-auto">
              <button
                className="group text-sm text-gray-700 p-3 rounded-full hover:bg-sidebar_hover transition-colors duration-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span
                  className={`block w-5 h-0.5 bg-gray-500 group-hover:bg-gray-800 mb-0.5 transition-transform duration-300 ${
                    isOpen ? "transform rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-gray-500 group-hover:bg-gray-800 mb-0.5 transition-opacity duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-gray-500 group-hover:bg-gray-800 transition-transform duration-300 ${
                    isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </button>
              <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
