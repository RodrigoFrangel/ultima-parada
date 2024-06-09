import React from 'react';
import instagram from '../assets/images/icons/instagram.png';
import twitter from '../assets/images/icons/twitter.png';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div class="footer-esq">
          <span>&#169; 2024 Última Parada. Todos os direitos reservados.</span>
        </div>
        <div class="footer-dir">
          <a href="_blank">
            <img src={ instagram } alt="Ícone do Instagram" />
          </a>
          <a href="_blank"><img src={ twitter } alt="Ícone do Twitter" /></a>
        </div>
      </footer>
    )
  }
}

export default Footer;

