import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do React Router
import './Tela_cadastro.css';

function TelaCadastro() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    genero: '',
    email: '',
    senha: '',
    idade: '',
    objetivo: '',
    altura: '',
    peso: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2);
    } else {
      console.log('Form submitted:', formData);
      // You can add form submission logic here
    }
  };

  const handlePrevStep = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  return (
    <div className="TelaCadastro">
      <div className="form-container">
        {step === 1 ? (
          <>
            <h2 className="cadastro-title">Cadastro</h2>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
            />
            <input
              type="text"
              name="cpf"
              placeholder="CPF"
              value={formData.cpf}
              onChange={handleChange}
            />
            <input
              type="text"
              name="genero"
              placeholder="Gênero"
              value={formData.genero}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={formData.senha}
              onChange={handleChange}
            />
            <button onClick={handleNextStep}>Próximo</button>
          </>
        ) : (
          <>
            <h2 className="cadastro-title">Objetivo</h2>
            <input
              type="number"
              name="idade"
              placeholder="Idade"
              value={formData.idade}
              onChange={handleChange}
            />
            <select
              name="objetivo"
              value={formData.objetivo}
              onChange={handleChange}
            >
              <option value="">Selecione seu objetivo</option>
              <option value="perca de peso">Perda de peso</option>
              <option value="hipertrofia">Hipertrofia</option>
              <option value="ganhar massa">Ganhar massa</option>
              <option value="condicionamento fisico">Condicionamento físico</option>
            </select>
            <input
              type="number"
              name="altura"
              placeholder="Altura (cm)"
              value={formData.altura}
              onChange={handleChange}
            />
            <input
              type="number"
              name="peso"
              placeholder="Peso (kg)"
              value={formData.peso}
              onChange={handleChange}
            />
            <button onClick={handleNextStep}>Cadastrar</button>
          </>
        )}
        <div className="pagination-container">
          {step === 2 && (
            <button className="back-button" onClick={handlePrevStep}>
              &#8592;
            </button>
          )}
          <div className="pagination">
            <span>Página {step} de 2</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaCadastro;