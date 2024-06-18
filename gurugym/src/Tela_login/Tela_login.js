import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Tela_login.css';

function Tela_login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar lógica para autenticar o usuário
    console.log('Usuário:', username);
    console.log('Senha:', password);
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Usuário"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
            />
          </div>
          <Link to="/inicio" className="login-link" onClick={handleLogin}>Entrar</Link>
        </form>
        <Link to="/cadastro" className="signup-link">Não tem uma conta? Cadastre-se!</Link>
      </div>
    </div>
  );
}

export default Tela_login;
