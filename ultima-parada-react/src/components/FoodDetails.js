import React from 'react';
import foodData from '../data/foodData.json';

function showDetails() {
  const currentPath = window.location.pathname.slice(6); // Remove "food/" do path
  const foodItem = foodData.foodInfo.find(item => item.id === currentPath);

  if (foodItem) {
    console.log(foodItem.image)
    return foodItem;
  } else {
    console.log("Ixi, deu errado :(");
    return {
      image: "",
      name: "Não encontrado",
      description: "Descrição não disponível.",
      ingredients: "Ingredientes não disponíveis.",
      price: "Preço não disponível."
    };
  }
}

class FoodDetails extends React.Component {
  render() {
    const details = showDetails();
    const imageSrc = details.image ? require(`../assets/images/food/${details.image}`) : '';

    return (
      <>
        <div className='food-esq'>
          {details.image &&
            <img
              src={imageSrc}
              className='food-image'
              alt="Imagem da comida"
            />
          }
        </div>
        <div className='food-dir'>
          <h1>{details.name}</h1>
          <h4>{details.description}</h4>
          <p>{details.ingredients}</p>
          <h1>R${details.price}</h1>
        </div>
      </>
    );
  }
}

export default FoodDetails;
