import React from 'react';
import { food } from '../data/food';
import { Link } from 'react-router-dom';

function showCategory() {
  const path = window.location.pathname.slice(1);
  const category = food.filter(item => item.category.toLowerCase() === path);

  if (category) {
    console.log(category);
    return category
  } else {
    const errorMessage = "Algo deu errado.";
    return errorMessage;
  }
}

class Category extends React.Component {
  render() {
    const categoryItem = showCategory();

    return (
      <section id="menu">
        <h1>{categoryItem[0].category}</h1>
        <section className="menu-food">
          {categoryItem.map((item) => (
            <div class="food-card">
              <Link to={`/food/${item.id}`}>
                <img
                  src={item.image}
                  className="imagem-menu"
                  alt={item.alt}
                />
              </Link>
              <h2>{item.name}</h2>
            </div>
          ))}
        </section>
      </section>
    );
  }
}

export default Category;
