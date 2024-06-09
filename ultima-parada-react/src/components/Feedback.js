import React from 'react';

class Feedback extends React.Component {
  render() {
    return (
      <section id="feedback">
        <h1 class="feedback-title">Depoimentos</h1>
        <div class="feedback-row">
          <div class="customer-feedback">
            <q>
              Meu amigo comeu e foi parar no hospital. Quando ele acordou do
              coma, disse que foi a melhor experiência da vida dele.
            </q>
            <p class="quote-owner">— João Distemidus</p>
          </div>
          <div class="customer-feedback">
            <q>
              Quase morri duas vezes e uma vez apaguei e acordei na Argentina.
              Melhor sensação que já senti, sem comparação.
            </q>
            <p class="quote-owner">— Robertinho Motoqueiro</p>
          </div>
          <div class="customer-feedback">
            <q>
              Vocês acham que conseguem imaginar como é comer na Última Parada,
              mas vocês não fazem ideia!
            </q>
            <p class="quote-owner">— Luana C# de Banana</p>
          </div>
        </div>
      </section>
    )
  }
}

export default Feedback;
