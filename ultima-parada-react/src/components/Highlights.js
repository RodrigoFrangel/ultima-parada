import React from 'react';
import { Link } from 'react-router-dom';

class FoodCard extends React.Component {
  render() {
    const { foodId, foodImage, imageAlt } = this.props;

    return (
      <>
        <Link to={`/food/${foodId}`}>
          <img
            src={foodImage}
            className="imagem-menu"
            alt={imageAlt}
          />
        </Link>
      </>
    );
  }
}

export default FoodCard;
