import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function Star({ starValue = 5, onRate }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1">
      {[...Array(starValue)].map((_, index) => {
        const value = index + 1;
        const isFilled = value <= (hover || rating);

        return (
          <span
            key={value}
            onClick={() => {
              setRating(value);
              onRate && onRate(value);
            }}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
            className="transition-transform transform hover:scale-110"
          >
            <FaStar
              className={`cursor-pointer text-2xl transition-colors duration-200 
                ${isFilled ? "text-yellow-400" : "text-gray-300"}`}
            />
          </span>
        );
      })}
    </div>
  );
}

export default Star;
