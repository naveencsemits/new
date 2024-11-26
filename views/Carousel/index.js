import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";

import BackgroundImage from "./components/BackgroundImage";
import SlideInfo from "./components/SlideInfo";
import Slides from "./components/Slides";
import Controls from "./components/Controls";
import Header from "./components/Header";

// Initialize Righteous font
const righteous = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

// Slider data
const sliderData = [
  {
    img: "/image1.jpg",
    location: "Switzerland Alps",
    description:
      "The journey to Machu Picchu typically starts in the mountain city of Cusco, which was the capital city of the Inca Empire",
    title: "SAINT ANTÖNEN",
  },
  {
    img: "/image2.jpg",
    title: "The Grand Canyon",
    description:
      "The earth's geological history opens before your eyes in a mile-deep chasm",
    location: "Arizona",
  },
  {
    img: "/image2.jpg", // Added `/` to the path
    title: "Masai Mara",
    description:
      "Wild animals in their natural environment, luxury safari lodges",
    location: "Kenya",
  },
  {
    img: "/image2.jpg",
    title: "Angkor Wat",
    description:
      "A stunning ancient jungle city with hundreds of intricately constructed temples",
    location: "Cambodia",
  },
  {
    img: "/image2.jpg",
    title: "Bali",
    description:
      "Tropical beaches, volcano hikes, ancient temples, and friendly people",
    location: "Indonesia",
  },
];

const initData = sliderData[0];

// Corrected Carousel component
const Carousel = () => {
  const [data, setData] = useState(sliderData.slice(1));
  const [transitionData, setTransitionData] = useState(sliderData[0]);
  const [currentSlideData, setCurrentSlideData] = useState({
    data: initData,
    index: 0,
  });

  console.log("data",data)

  return (
    
    <main
      className={`${righteous.className} h-[100vh] relative min-h-screen select-none overflow-hidden text-white antialiased`}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="absolute z-20 h-full w-full">
          {/* <Header /> */}
          <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
};

export default Carousel;



