import React from 'react';
import profileImage from './img/foto_perfil.jpg'; // Ajuste o caminho conforme necessário

import  '../Tela_inicio/Tela_inicio.css'; // Importação do arquivo CSS local

    function TelaInicio() {
      return (
        <div className="inicio-container">
      <div className="profile-section">
      <img src={profileImage} alt="Foto de Perfil" className="profile-picture" />
        <h2>Olá, Fernanda!</h2>
      </div>
      <div className="menu-section">
        <div className="menu-column">
          <ul>
            <li><a href="#">Página Inicial</a></li>
            <li><a href="#">Meu Perfil</a></li>
          </ul>
        </div>
        <div className="menu-column">
          <ul>
            <li><a href="#">Configurações</a></li>
            <li><a href="#">Ajuda</a></li>
          </ul>
        </div>
      </div>
      <div className="logout-section">
        <a href="#" className="logout-link">Sair</a>
      </div>
    </div>
      );
    }

export default TelaInicio;
