import React from 'react';

class Feedback extends React.Component {
  render() {
    return (
      <section id="feedback">
        <h1 className="feedback-title">Depoimentos</h1>
        <div className="feedback-row">
          <div className="customer-feedback">
            <q>
              Meu amigo comeu e foi parar no hospital. Quando ele acordou do
              coma, disse que foi a melhor experiência da vida dele.
            </q>
            <p className="quote-owner">— João Distemidus</p>
          </div>
          <div className="customer-feedback">
            <q>
              Quase morri duas vezes e uma vez apaguei e acordei na Argentina.
              Melhor sensação que já senti, sem comparação.
            </q>
            <p className="quote-owner">— Robertinho Motoqueiro</p>
          </div>
          <div className="customer-feedback">
            <q>
              Vocês acham que conseguem imaginar como é comer na Última Parada,
              mas vocês não fazem ideia!
            </q>
            <p className="quote-owner">— Luana C# de Banana</p>
          </div>
        </div>
      </section>
    )
  }
}

export default Feedback;
