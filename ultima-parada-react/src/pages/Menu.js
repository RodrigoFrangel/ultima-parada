import React from 'react';
import AllItems from '../components/AllItems';

class Menu extends React.Component {
  render() {
    return (
      <section id="menu">
        <h1>Cardápio</h1>
        <section className="menu-food">
          <AllItems />
        </section>
      </section>
    );
  }
}

export default Menu;
