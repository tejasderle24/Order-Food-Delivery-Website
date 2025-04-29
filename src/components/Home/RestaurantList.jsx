import React from 'react';

import { assets } from '../../assets/assets'; // update with actual paths
import RestaurantListCard from './RestaurantListCard'; // update with actual path

const categoryData = [
  {
    id: 1,
    image: assets.res1, // example: burgers.jpg
    title: 'McDonalds ',
  },
  {
    id: 2,
    image: assets.res2,
    title: 'Papa Johns',
  },
  {
    id: 3,
    image: assets.res3,
    title: 'KFC West London',
  },
  {
    id: 4,
    image: assets.res4, // example: burgers.jpg
    title: 'Texas Chicken',
  },
  {
    id: 5,
    image: assets.res5,
    title: 'Burger King',
  },
  {
    id: 6,
    image: assets.res6,
    title: 'Shaurma 1',
  },
];

const RestaurantList = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-xl font-bold mb-6 text-secondary">Popular Restaurants</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {categoryData.map((category) => (
          <RestaurantListCard
            key={category.id}
            image={category.image}
            title={category.title}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
