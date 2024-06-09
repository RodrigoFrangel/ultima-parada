import React from 'react';
import foodTruck from '../assets/images/misc/food-truck.png'

class About extends React.Component {
  render() {
    return (
      <section id="about">
        <div className="about-esq">
          <img
            src={ foodTruck }
            className="about-image"
            alt="Imagem ilustrativa mostrando o food truck"
          />
        </div>
        <div className="about-dir">
          <h1>Quem Somos</h1>
          <br />
          <p>
            Bem-vindo ao mundo enigmático e irresistível do nosso food truck!
            Somos cinco indivíduos unidos pela paixão por explorar os limites do
            paladar e desafiar as convenções culinárias. Nossas receitas
            bizarras e não-convencionais que preparamos com ingredientes que
            farão você questionar, mas ao mesmo tempo desejar mais.
          </p>
          <br />
          <p>
            Nosso truck não segue rotas previsíveis. Movemo-nos de forma
            aleatória e secreta, tornando cada encontro uma experiência única e
            inesquecível. O local onde estaremos no dia é um segredo revelado
            apenas nas redes sociais por nossos seguidores dedicados.
          </p>
          <br />
          <p>
            No nosso cardápio exclusivo, você encontrará apenas cinco pratos,
            cada um mais intrigante e saboroso que o outro. Cada mordida é uma
            descoberta, uma viagem ao desconhecido que desafia e deleita seus
            sentidos.
          </p>
          <br />
          <p>
            Acompanhe-nos nas redes sociais, desvende o enigma do nosso
            paradeiro, e venha descobrir por que nossas criações culinárias
            bizarras e deliciosas são um sucesso. Nós somos o enigma culinário
            que você não sabia que precisava desvendar.
          </p>
        </div>
      </section>
    )
  }
}

export default About;
