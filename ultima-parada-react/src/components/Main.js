import React from 'react';
import { Link } from 'react-router-dom';
import categories from '../data/categories'
import { highlights } from '../data/food'
import Button from './Button';
import Highlights from './Highlights';

class Main extends React.Component {
  render() {
    return (
      <section id="main">
        <div className="main-esq">
          {categories.map((category) => (
            <Button
              foodCategory={category.url}
              buttonTitle={category.name}
            />
          ))}
          <Link
            to="/menu"
            className="button"
          >
            Veja nosso cardápio
          </Link>
        </div>
        <div className="main-dir">
          {highlights.map((highlight) => (
            <Highlights
              foodId={highlight.id}
              foodImage={highlight.image}
              imageAlt={highlight.alt}
            />
          ))}
        </div>
      </section >
    )
  }
}

export default Main;
