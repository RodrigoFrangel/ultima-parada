/* eslint-disable array-callback-return */
import React from 'react';
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
              // id={category.id}
              foodCategory={category.url}
              buttonTitle={category.name}
            />
          ))}
          <a
            href="menu"
            className="button"
          >
            Veja nosso cardápio
          </a>
        </div>
        <div className="main-dir">
          {highlights.map((highlight) => (
            <Highlights
              // id={highlight.id}
              foodUrl={highlight.id}
              foodImage={highlight.image}
              imageAlt={highlight.alt}
            />
          ))}
        </div>
      </section>
    )
  }
}

export default Main;
