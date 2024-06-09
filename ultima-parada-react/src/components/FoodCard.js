import React from 'react';
import { Link } from 'react-router-dom';

class FoodCard extends React.Component {
  render() {
    const { foodId, foodImage, imageAlt, foodName } = this.props;

    return (
      <>
        <div class="food-card">
        <Link to={`/food/${foodId}`}>
            <img
              src={foodImage}
              className="imagem-menu"
              alt={imageAlt}
            />
          </Link>
          <h2>
            {foodName}
          </h2>
        </div>
      </>
    );
  }
}

export default FoodCard;
