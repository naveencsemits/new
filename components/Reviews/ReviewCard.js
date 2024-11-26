// components/ReviewCard.js
import React from 'react';

const ReviewCard = ({ review, onMouseEnter, onMouseLeave }) => {
    return (
        <div 
            className="bg-white shadow-md rounded-lg p-4 m-2 w-64 h-40 flex flex-col justify-between"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <img src={review.image} alt={review.name} className="rounded-full w-16 h-16 mb-2 self-center" />
            <h3 className="font-bold text-lg text-center">{review.name}</h3>
            <p className="text-gray-600 text-sm text-center overflow-hidden whitespace-nowrap text-ellipsis" title={review.text}>
                {review.text}
            </p>
            <div className="flex justify-center mt-2">
                {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09L5.236 12 0 7.909l6.236-.909L10 0l3.764 7 .909 6.236L10 15z" />
                    </svg>
                ))}
            </div>
        </div>
    );
};

export default ReviewCard;