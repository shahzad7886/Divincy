// Card.jsx
import React from "react";

const Card = ({ name, description, imageUrl, isReligious }) => {
  return (
    <div className="p-2 md:w-1/4">
      <div
        className={`p-3 py-4 overflow-hidden rounded-xl bg-white h-full ${
          isReligious ? 'bg-theme-sky' : 'bg-white'
        }`}
      >
        <span
          className={`p-3 inline-block rounded-full ${
            isReligious ? 'bg-theme-sky' : 'bg-theme-orange'
          }`}
        >
          <img src={imageUrl} className="w-7" alt={name} />
        </span>
        <h4 className="text-base text-start font-semibold md:max-w-[300px]">
          {name}
        </h4>
        <p className="text-xs mt-3 mb-0">{description}</p>
      </div>
    </div>
  );
};

export default Card;
