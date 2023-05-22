/** @format */

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ setValorNota }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const definirRating = (ratingValue) => {
    setRating(ratingValue);
    setValorNota(ratingValue);
  };

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => definirRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "e4e5e9"}
              size={40}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
