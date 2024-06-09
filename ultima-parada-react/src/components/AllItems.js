import React from 'react';
import { food } from '../data/food';
import FoodCard from './FoodCard';

class AllItems extends React.Component {
  render() {
    return (
      <>
        {food.map((item) => (
          <FoodCard
            foodId={item.id}
            foodImage={item.image}
            foodName={item.name}
            imageAlt={item.alt}
          />
        ))}
      </>
    )
  }
}

export default AllItems;


