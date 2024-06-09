import React from 'react';
import logo from '../assets/images/logo/logo-cut.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <div className="nav-esq">
            <a href="/">
              <img
                src={ logo }
                className="logo-nav"
                alt="Logo Última Parada"
              />
            </a>
          </div>
          <div className="nav-dir">
            <a href="/">Início</a>
            <a href="/menu">Cardápio</a>
            <a href="/#about">Quem Somos</a>
            <a href="/#feedback">Depoimentos</a>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
