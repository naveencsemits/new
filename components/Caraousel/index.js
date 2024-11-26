// import { useState, useEffect } from "react";

// const Carousel = ({ images, autoScrollInterval = 3000 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Function to go to the next slide
//   const goToNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   // Function to go to the previous slide
//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   // Auto-scroll logic
  // useEffect(() => {
  //   const interval = setInterval(goToNext, autoScrollInterval);

  //   // Cleanup interval on component unmount
  //   return () => clearInterval(interval);
  // }, [currentIndex, autoScrollInterval]);

//   return (
//     <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
//       {/* Carousel Items */}
//       <div
//         className="flex transition-transform duration-700"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Slide ${index}`}
//             className="w-full border-2 flex-shrink-0"
//           />
//         ))}
//       </div>

//       {/* Previous Button */}
//       {/* <button
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
//         onClick={goToPrevious}
//       >
//         &#10094;
//       </button> */}

//       {/* Next Button */}
//       {/* <button
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
//         onClick={goToNext}
//       >
//         &#10095;
//       </button> */}

//       {/* Dots Navigation */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full ${
//               index === currentIndex ? "bg-blue-500" : "bg-gray-300"
//             }`}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;

// components/Carousel.js


import { useState, useEffect,Children, cloneElement } from 'react';

const Carousel = ({ children, className = '', autoScrollInterval = 3000,showButton=false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Children.count(children);
  useEffect(() => {
    const interval = setInterval(goToNext, autoScrollInterval);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex, autoScrollInterval]);
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`relative overflow-hidden w-full ${className}`}>
      {/* Slides Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Children.map(children, (child, index) =>
          cloneElement(child, { isActive: currentIndex === index })
        )}
      </div>

      {/* Navigation Buttons */}
      <button
        className={`${showButton?'':'invisible'} absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full`}
        onClick={goToPrevious}
      >
        &#10094;
      </button>
      <button
        className={`${showButton?'':'invisible'} absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full`}
        onClick={goToNext}
      >
        &#10095;
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
