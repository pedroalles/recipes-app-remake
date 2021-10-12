import React from 'react';

import { Switch, Route } from 'react-router-dom';

import {
  Login,
  Comidas,
  Bebidas,
  DetalhesReceitaComida,
  DetalhesReceitaBebida,
  Explorar,
  ExplorarComidas,
  ExplorarBebidas,
  Perfil,
  ReceitasFeitas,
  ReceitasFavoritas,
  NotFound,
} from './index';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/bebidas" component={ Bebidas } />
      <Route exact path="/comidas" component={ Comidas } />
      <Route exact path="/comidas/:id" component={ DetalhesReceitaComida } />
      <Route exact path="/bebidas/:id" component={ DetalhesReceitaBebida } />
      <Route exact path="/explorar" component={ Explorar } />
      <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
      <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
      <Route exact path="/receitas-feitas" component={ ReceitasFeitas } />
      <Route exact path="/receitas-favoritas" component={ ReceitasFavoritas } />
      <Route exact path="/profile" component={ Perfil } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default Routes;
