// components/FAQ.js
"use client";
import React, { useState, useEffect } from "react";
import faqs from "./seed";
import Heading from "../Heading";

let clear;
const FAQ = ({ data }) => {
  const questionsAnswers = data ? data : faqs;
  const [activeIndex, setActiveIndex] = useState(null);
  const [displayedText, setDisplayedText] = useState(""); // Text that is currently displayed
  const [typing, setTyping] = useState(false); // To control if typing is in progress

  // Typing effect that streams each character of the answer

  useEffect(() => {
    if (activeIndex !== null) {
      setTyping(true);
      setDisplayedText(""); // Reset text
      const answerText = questionsAnswers[activeIndex].answer;
      let charIndex = -1; // Start from the first character

      const typeChar = () => {
        charIndex++;
        if (charIndex < answerText.length) {
          console.log(charIndex);
          setDisplayedText((prev) => prev + answerText[charIndex]);

          clear = setTimeout(typeChar, 10); // Adjust typing speed here
        } else {
          setTyping(false); // Typing is complete
        }
      };

      typeChar(); // Start typing effect

      return () => {
        setDisplayedText(""); // Clean up on unmount or index change
      };
    }
  }, [activeIndex]);

  const toggleAccordion = (index) => {
    clearTimeout(clear);
    setActiveIndex((prev) => (prev === index ? null : index));
    // setDisplayedText("")
  };

  return (
    <div className="p-4">
      <Heading heading={"Frequently Asked"} subheading={"questions"} />
      <div className="space-y-3">
        {questionsAnswers.map((item, index) => (
          <div
            key={index}
            className={`border-b border-gray-200 ${
              activeIndex === index && false ? "bg-white-500" : "bg-white"
            } rounded-md`}
          >
            <div
              className="flex justify-between items-center px-4 py-2 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-lg font-medium text-gray-700">
                {item.question}
              </h3>
              <span className="text-xl text-blue-500">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            <div
              className={`overflow-hidden max-w-[100%] transition-max-height duration-300 ease-in-out ${
                activeIndex === index ? " px-4 py-2" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 whitespace-pre-wrap">
                {activeIndex === index ? displayedText : null}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
