import { useEffect, useRef } from 'react';

const reviews = [
  {
    name: "John Doe",
    review: "This service is outstanding! Highly recommend to anyone.",
  },
  {
    name: "Jane Smith",
    review: "Fantastic experience! Will definitely use again.",
  },
  {
    name: "Mike Johnson",
    review: "Top-notch customer service and quality.",
  },
  {
    name: "Alice Brown",
    review: "Exceeded my expectations. Superb service!",
  },
];

export default function ContinuousScroll() {
  const scrollContainer = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollContainer.current) {
        // Scrolls 1 pixel every 20ms for smooth effect
        scrollContainer.current.scrollLeft += 1;
        if (scrollContainer.current.scrollLeft >= scrollContainer.current.scrollWidth / 2) {
          scrollContainer.current.scrollLeft = 0;
        }
      }
    };
    const interval = setInterval(scroll, 20); // Adjust scroll speed here

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto overflow-hidden relative bg-gray-50 p-6 rounded-lg shadow-lg">
      <div
        ref={scrollContainer}
        className="flex space-x-8 overflow-x-auto scroll-smooth no-scrollbar"
        style={{ scrollBehavior: 'smooth', whiteSpace: 'nowrap' }}
      >
        {/* Duplicate reviews to create an infinite loop effect */}
        {[...reviews, ...reviews].map((review, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-md flex-shrink-0 w-72 hover:bg-gray-100 transition-colors duration-300 inline-block"
          >
            <p className="text-gray-800 text-lg mb-4 leading-relaxed">
              "{review.review}"
            </p>
            <p className="text-gray-600 font-bold">— {review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
