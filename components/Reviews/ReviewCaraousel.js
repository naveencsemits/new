import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const ReviewCarousel = ({ reviews }) => {
  return (
    <div className="relative overflow-hidden hove:scroll-hidden py-8">
      <div className="flex w-full gap-4 animate-scroll hover:animate-paused">
        {/* Duplicate the reviews array to create infinite scrolling */}
        {[...reviews, ...reviews].map((review, index) => (
          <div
            key={index}
            className="max-w-[300px] flex-shrink-0 bg-white shadow-md p-4 rounded-lg sm:min-w-[400px] md:min-w-[500px] hover:animate-paused h-[200px] sm:h-[250px] flex flex-col justify-between"
          >
            <p className="text-sm sm:text-base line-clamp-3 overflow-hidden">
              {review.text}
            </p>
            <div>
              <div className="flex mt-4">
                {/* Render star ratings */}
                {[...Array(5)].map((_, starIndex) => (
                  <span key={starIndex}>
                    {starIndex < review.rating ? (
                      <FaStar className="text-yellow-500" />
                    ) : (
                      <FaRegStar className="text-gray-400" />
                    )}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-right text-sm sm:text-base">
                - {review.author}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
