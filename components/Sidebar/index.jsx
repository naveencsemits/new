import { useState } from "react";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import menuData from "./seed";

export default function Sidebar({ isOpen, setIsOpen }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Toggle subcategory visibility
  const toggleSubcategory = (index, hasSubcategories) => {
    if (hasSubcategories) {
      setExpandedIndex(expandedIndex === index ? null : index);
    }
  };

  return (
    <div className="relative">
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 text-gray-800 h-[100vh] w-full min-w-[380px] sm:w-[60%] md:w-[20%] bg-white shadow-lg z-50 border-l border-gray-200 transform transition-transform lg:rounded-l-[2rem] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 rounded-full right-4 p-2 hover:bg-sidebar_hover"
          onClick={() => setIsOpen(false)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="px-2 pt-4 pb-2 shadow-md">
          <h2 className="text-2xl px-4 font-bold mb-6 text-gray-800">Menu</h2>
        </div>

        <div className="px-2 py-2 h-[calc(100vh-7.5rem)] text-[1.15rem] overflow-y-auto">
          <ul className="space-y-2 font-bold">
            {menuData.map((item, index) => (
              <li key={index}>
                {/* Main category */}
                <div
                  className="flex justify-between items-center w-full px-4 py-3 hover:bg-sidebar_hover rounded-[1rem] cursor-pointer transition-colors duration-300 ease-in-out"
                  onClick={() => {
                    if (item.subcategories) {
                      toggleSubcategory(index, item.subcategories.length > 0);
                    } else {
                      window.location.href = item.link; // Navigate to parent link if no subcategories
                    }
                  }}
                >
                  <span>{item.title}</span>
                  {item.subcategories && (
                    <p className="font-bold">
                      {expandedIndex === index ? <FiChevronDown /> : <FiChevronRight />}
                    </p>
                  )}
                </div>

                {/* Subcategories */}
                {item.subcategories && expandedIndex === index && (
                  <ul className="pl-8 space-y-2">
                    {item.subcategories.map((subItem, subIndex) => (
                      <li key={subIndex} className="py-2 hover:text-gray-700">
                        <a href={subItem.link}>{subItem.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
