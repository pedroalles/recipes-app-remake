import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Page from './styles/Page';

import Main from './styles/Main';
import { localStorageByKey, logout } from '../services/localStorageManager';

const Perfil = () => {
  const [email, setEmail] = useState('');

  const history = useHistory();

  useEffect(() => {
    setEmail(localStorageByKey('user'));
  }, []);

  const handleExit = () => {
    logout();
    history.push('/');
  };

  return (
    <Page>
      <Header />

      <Main>
        Profile
        <p data-testid="profile-email">{ email }</p>
        <Link to="/receitas-feitas">
          <button type="button" data-testid="profile-done-btn">
            Receitas Feitas
          </button>
        </Link>
        <Link to="receitas-favoritas">
          <button type="button" data-testid="profile-favorite-btn">
            Receitas Favoritas
          </button>
        </Link>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ handleExit }
        >
          Sair
        </button>
      </Main>

      <Footer />
    </Page>
  );
};

export default Perfil;
