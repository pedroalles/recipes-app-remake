import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Page from './styles/Page';

import Main from './styles/Main';

const Explorar = () => (
  <Page>
    <Header />

    <Main>
      <Link to="explorar/comidas">
        <button data-testid="explore-food" type="button">
          Explorar Comidas
        </button>
      </Link>

      <Link to="explorar/bebidas">
        <button type="button" data-testid="explore-drinks">
          Explorar Bebidas
        </button>
      </Link>
    </Main>

    <Footer />
  </Page>
);

export default Explorar;
