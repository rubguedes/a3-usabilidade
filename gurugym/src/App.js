import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import TelaCadastro from './Tela_cadastro/Tela_cadastro';
import TelaLogin from './Tela_login/Tela_login';
import TelaInicio from './Tela_inicio/Tela_inicio';
import TelaTreinos from './Tela_treino/Tela_treino';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/inicio">Início</Link>
            </li>
            <li>
              <Link to="/treinos">Treinos</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/cadastro">Cadastro</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/cadastro" component={TelaCadastro} />
          <Route path="/login" component={TelaLogin} />
          <Route exact path="/inicio" component={TelaInicio} />
          <Route path="/treinos" component={TelaTreinos} />
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
