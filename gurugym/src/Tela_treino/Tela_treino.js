import React from 'react';
import './Tela_treino.css'; // Importe seu arquivo CSS local

// Importe as imagens necessárias
import agachamentoSumoImg from './img/Agachamento_Sumo.jpg';
import flexaoBracoImg from './img/Flexao_Braco.jpg';
import abdominalCaniveteImg from './img/Abdominal_Canivete.jpg';

function Tela_treino() {
  return (
    <div className="inicio-container">
      <header>
        <div className="center">
          {/* Conteúdo do header */}
        </div>
        <div className="orange-container">
          <h1>Sobre Treino</h1>
          <h2>Treino para o corpo inteiro</h2>
          <h3>
            É um tipo de exercício que se concentra em movimentos compostos, os quais envolvem múltiplos grupos musculares
            simultaneamente. Dessa forma, é possível realizar um treino eficaz para todas as partes do corpo em um curto período
            de tempo.
          </h3>
        </div>
      </header>

      <main>
        <section className="content-section">
          <div className="exercise">
            <h4>Exercício 1: Agachamento Sumo</h4>
            <img src={agachamentoSumoImg} alt="Agachamento Sumo" className="exercise-img" />
            <p>
              Fortalece todos os músculos dos membros inferiores, incluindo quadríceps, posteriores de coxa, glúteos e
              panturrilhas.
            </p>
          </div>

          <div className="exercise">
            <h4>Exercício 2: Flexão de Braço</h4>
            <img src={flexaoBracoImg} alt="Flexão de Braço" className="exercise-img" />
            <p>Fortalece os músculos do peitoral, tríceps, braquial e deltoides.</p>
          </div>

          <div className="exercise">
            <h4>Exercício 3: Abdominal Canivete</h4>
            <img src={abdominalCaniveteImg} alt="Abdominal Canivete" className="exercise-img" />
            <p>Fortalece os músculos reto abdominal, oblíquos e o iliopsoas.</p>
          </div>
        </section>
      </main>

      <footer>{/* Conteúdo do rodapé */}</footer>
    </div>
  );
}

export default Tela_treino;
