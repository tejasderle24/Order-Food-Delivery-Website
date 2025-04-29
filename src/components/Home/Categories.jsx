import React from 'react';
import CategoriesCard from './CategoriesCard';
import { assets } from '../../assets/assets'; // update with actual paths

const categoryData = [
  {
    id: 1,
    image: assets.cat1, // example: burgers.jpg
    title: 'Burgers',
    restaurantCount: 21,
  },
  {
    id: 2,
    image: assets.cat2,
    title: 'Salads',
    restaurantCount: 32,
  },
  {
    id: 3,
    image: assets.cat3,
    title: 'Pasta & Casuals',
    restaurantCount: 4,
  },
  {
    id: 4,
    image: assets.cat4, // example: burgers.jpg
    title: 'Pizza',
    restaurantCount: 21,
  },
  {
    id: 5,
    image: assets.cat5,
    title: 'Breakfast',
    restaurantCount: 4,
  },
  {
    id: 6,
    image: assets.cat6,
    title: 'Soups',
    restaurantCount: 4,
  },
];

const Categories = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-6 text-secondary">Order.uk Popular Categories 🤩</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {categoryData.map((category) => (
          <CategoriesCard
            key={category.id}
            image={category.image}
            title={category.title}
            restaurantCount={category.restaurantCount}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
