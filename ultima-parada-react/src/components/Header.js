import React from 'react';
import logo from '../assets/images/logo/logo-cut.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <div class="nav-esq">
            <a href="index.html">
              <img
                src={ logo }
                class="logo-nav"
                alt="Logo Última Parada"
              />
            </a>
          </div>
          <div class="nav-dir">
            <a href="index.html">Início</a>
            <a href="pages/cardapio.html">Cardápio</a>
            <a href="#about">Quem Somos</a>
            <a href="#feedback">Depoimentos</a>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
