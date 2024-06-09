import React from 'react';

class Main extends React.Component {
  render() {
    return (
      <section id="main">
        <div class="main-esq">
          <a href="pages/lanches.html" class="button">Lanches</a>
          <a href="pages/pizzas.html" class="button">Pizzas</a>
          <a href="pages/tacos.html" class="button">Tacos</a>
          <a href="pages/sobremesas.html" class="button">Sobremesas</a>
          <a href="pages/bebidas.html" class="button">Bebidas</a>
          <a href="pages/cardapio.html" class="button">Veja nosso cardápio</a>
        </div>
        <div class="main-dir">
          <a href="pages/cogumerda.html">
            <img
              src="assets/images/cogumerda.jpg"
              class="imagem-menu"
              alt="Imagem da receita 1"
            />
          </a>
          <a href="pages/moscashake.html">
            <img
              src="assets/images/moscashake.png"
              class="imagem-menu"
              alt="Imagem da receita 2"
            />
          </a>
          <a href="pages/meteorroida.html">
            <img
              src="assets/images/meteorroida.jpg"
              class="imagem-menu"
              alt="Imagem da receita 3"
            />
          </a>
          <a href="pages/pizza-conhecimento.html">
            <img
              src="assets/images/pizza-conhecimento.png"
              class="imagem-menu"
              alt="Imagem da receita 4"
            />
          </a>
          <a href="pages/tacoco.html">
            <img
              src="assets/images/tacoco.png"
              class="imagem-menu"
              alt="Imagem da receita 5"
            />
          </a>
          <a href="pages/veganojo.html">
            <img
              src="assets/images/veganojo.png"
              class="imagem-menu"
              alt="Imagem da receita 6"
            />
          </a>
        </div>
      </section>
    )
  }
}

export default Main;
