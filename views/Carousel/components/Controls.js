import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Progress from "./Progress";

function Controls({
  sliderData,
  data,
  transitionData,
  currentSlideData,
  handleData,
  handleTransitionData,
  handleCurrentSlideData,
  initData,
}) {
  const handlePrev = () => {
    if (!data || data.length === 0) {
      console.error("No slides available to navigate backward.");
      return;
    }

    const lastSlide = data[data.length - 1]; // Get the last slide
    const newData = [lastSlide, ...data.slice(0, data.length - 1)]; // Move the last slide to the beginning

    // Update state
    handleData(newData);
    handleCurrentSlideData({
      data: lastSlide,
      index: sliderData.findIndex((ele) => ele.img === lastSlide.img),
    });
    handleTransitionData(lastSlide);
  };

  const handleNext = () => {
    if (!data || data.length === 0) {
      console.error("No slides available to navigate forward.");
      return;
    }

    const firstSlide = data[0]; // Get the first slide
    const newData = [...data.slice(1), transitionData || initData]; // Move the first slide to the end

    // Update state
    handleData(newData);
    handleCurrentSlideData({
      data: firstSlide,
      index: sliderData.findIndex((ele) => ele.img === firstSlide.img),
    });
    handleTransitionData(firstSlide);
  };

  return (
    <div className="flex items-center gap-3 px-0 py-3 md:px-1 md:py-5">
      {/* Backward Button */}
      <SliderButton handleClick={handlePrev}>
        <IoIosArrowBack className="text-xl" />
      </SliderButton>

      {/* Forward Button */}
      <SliderButton handleClick={handleNext}>
        <IoIosArrowForward className="text-xl" />
      </SliderButton>

      {/* Progress Indicator */}
      <Progress curIndex={currentSlideData.index} length={sliderData.length} />
    </div>
  );
}

export default Controls;

const SliderButton = ({ children, handleClick }) => {
  return (
    <button
      className="flex h-14 w-14 items-center justify-center rounded-full border-[1px] border-[#fdfdfd5f] transition duration-300 ease-in-out hover:bg-white hover:text-black"
      onClick={(e) => {
        e.stopPropagation(); // Prevent interference with parent elements
        if (handleClick) handleClick(e);
      }}
    >
      {children}
    </button>
  );
};
