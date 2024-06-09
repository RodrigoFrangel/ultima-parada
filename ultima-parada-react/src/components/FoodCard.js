import React from "react";

class FoodCard extends React.Component {
  render() {
    const { foodImage, imageAlt, foodName } = this.props;

    return (
      <>
        <div class="food-card">
          {/* <a href="cesio137.html"> */}
          <img
            src={foodImage}
            className="imagem-menu"
            alt={imageAlt}
          />
          {/* </a> */}
          <h2>
            {foodName}
          </h2>
        </div>
      </>
    );
  }
}

export default FoodCard;
