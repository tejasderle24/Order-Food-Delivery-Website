import React from 'react';

const CategoriesCard = ({ image, title }) => {
  return (
    <div className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="bg-yellow-100 flex justify-center">
        <img src={image} alt={title} className=" object-covar" />
      </div>
      <div className="bg-gray-50 p-2 border-t border-gray-200 flex flex-col items-center">
        <h3 className="text-base  font-semibold text-black">{title}</h3>
      </div>
    </div>
  );
};

export default CategoriesCard;
