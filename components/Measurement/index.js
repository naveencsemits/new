import React, { useState } from "react";

const Measurement = () => {
  const [currentWeight, setCurrentWeight] = useState(50); // Default weight starts at 50kg
  const [expectedWeightLoss, setExpectedWeightLoss] = useState(5); // Default weight loss at 10% of 50kg

  // Update expected weight loss when slider value changes
  const handleWeightChange = (value) => {
    setCurrentWeight(value);
    const weightLoss = value * 0.1; // 10% weight loss formula
    setExpectedWeightLoss(weightLoss.toFixed(2)); // Round to 2 decimals
  };

  return (
    <div className="flex flex-col items-center justify-center  px-4">
      <div className="flex flex-col items-center justify-center  w-full">
        <h1 className="text-2xl font-bold  mb-6 text-center">
          Look How much you can loose weight
        </h1>

        {/* Current Weight Display */}
        <div className="mb-4 text-center">
          <p className="text-lg text-gray-700">
            Select your current weight:
          </p>
          <p className="text-3xl font-bold text-blue-600">
            {currentWeight} kg
          </p>
        </div>

        {/* Slider for Weight Input */}
        <input
          type="range"
          min="30"
          max="150"
          step="1"
          value={currentWeight}
          onChange={(e) => handleWeightChange(e.target.value)}
          className="w-full slider accent-blue-600"
        />

        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>30 kg</span>
          <span>150 kg</span>
        </div>

        {/* Calculated Weight Loss Display */}
        <div className="mt-6 p-4   text-center">
          <p className="text-lg font-medium text-gray-800">
            Your Expected Weight Loss:
          </p>
          <p className="text-3xl font-bold text-green-600">
            {expectedWeightLoss} kg
          </p>
          <p className="text-sm text-gray-600 mt-1">
            (Based on 10% of your current weight)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Measurement;
