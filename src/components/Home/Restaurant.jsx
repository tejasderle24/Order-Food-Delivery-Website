import React from 'react';
import RestaurantCard from './RestaurantCard';
import { assets } from '../../assets/assets';

const restaurantData = [
  {
    id: 1,
    image: assets.deals1,
    discount: 40,
    category: 'Restaurant',
    name: 'Chef Burgers London',
  },
  {
    id: 2,
    image: assets.deals2,
    discount: 20,
    category: 'Restaurant',
    name: 'Grand Ai Cafe London',
  },
  {
    id: 3,
    image: assets.deals1,
    discount: 17,
    category: 'Restaurant',
    name: 'Butterbrot Cafe London',
  },
];

const Restaurant = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <h2 className="text-xl md:text-2xl font-semibold text-secondary">
          🎊 Up to -40% Order.uk Exclusive Deals
        </h2>
        <ul className="flex flex-wrap gap-3 text-sm md:text-base font-medium text-gray-600">
          <li className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer">Vegan</li>
          <li className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer">Sushi</li>
          <li className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer">Pizza & Fast food</li>
          <li className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer">Other</li>
        </ul>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurantData.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            image={restaurant.image}
            discount={restaurant.discount}
            category={restaurant.category}
            name={restaurant.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
