"use client";
import React from "react";

const StepProcess = () => {
  const steps = [
    {
      title: "Medical Forms",
      description:
        "Complete a simple online medical form telling your clinician about your health and prior weight loss attempts.",
      buttonText: "Get Started Now",
    },
    {
      title: "Telehealth Visit",
      description:
        "Speak to your new clinician who can help you lose weight with a GLP-1 medication, if appropriate.",
      buttonText: "No Hidden Fees",
    },
    {
      title: "Receive Medicine",
      description:
        "Receive your regularly scheduled medication in the mail straight from the pharmacy.",
      buttonText: "Only $297 per Month",
    },
  ];

  return (
    <div className="w-[80%] mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        ABC makes it easy to get started with our $297 per month, no insurance
        required, GLP-1 weight management program!
      </h2>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white border rounded-lg shadow-sm"
          >
            <div className="flex items-center">
              <div className="relative w-16 h-16 sm:w-12 sm:h-12 mr-4">
                {/* Animated circle */}
                <div className="absolute inset-0 rounded-full border-4 border-600 animate-pulseCircle"></div>
                <div className="absolute inset-0 rounded-full border-4 border-gray-300 flex items-center justify-center text-lg font-bold text-600">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
            <button className="mt-4 sm:mt-0 px-4 py-2 bg-grey-600 text-white font-semibold rounded-lg shadow-md hover:bg-700 transition">
              {step.buttonText}
            </button>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full px-4 py-3 bg-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-700 transition">
        Start Treatment Online
      </button>
    </div>
  );
};

export default StepProcess;
