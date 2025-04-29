import React from 'react';

const RestaurantCard = ({ image, discount, category, name }) => {
  return (
    <div className="relative w-[320px] rounded-xl overflow-hidden shadow-lg">
      {/* Background image */}
      <img
        src={image}
        alt={name}
        className="w-full h-[200px] object-cover"
      />

      {/* Discount badge */}
      <div className="absolute top-2 right-2 bg-[#0c0c1e] text-white text-sm px-3 py-1 rounded-md font-semibold">
        -{discount}%
      </div>

      {/* Overlay gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-t from-black/90 to-transparent p-3">
        <p className="text-yellow-400 text-sm font-medium">{category}</p>
        <h3 className="text-white text-lg font-bold">{name}</h3>
      </div>
    </div>
  );
};

export default RestaurantCard;
