// components/Marquee.js
import React, { useState } from 'react';
import ReviewCard from './ReviewCard';

const Marquee = ({ reviews }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div className="overflow-hidden whitespace-nowrap">
            <div className={`inline-flex ${isHovered ? 'animate-none' : 'animate-marquee'}`}>
                {reviews.map((review, index) => (
                    <ReviewCard 
                        key={index} 
                        review={review} 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Marquee;