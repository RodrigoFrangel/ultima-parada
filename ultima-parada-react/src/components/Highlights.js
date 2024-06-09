import React from 'react';

class FoodCard extends React.Component {
  render() {
    const { foodUrl, foodImage, imageAlt } = this.props;

    return (
      <>
        <a href={`/${foodUrl}`}>
          <img
            src={foodImage}
            className="imagem-menu"
            alt={imageAlt}
          />
        </a>
      </>
    );
  }
}

export default FoodCard;
