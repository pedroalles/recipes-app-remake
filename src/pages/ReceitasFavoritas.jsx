import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../components/Header';
import LikeButton from '../components/LikeButton';

import Main from './styles/MainOnlyHeader';
import Page from './styles/Page';

const cardStyle = {
  display: 'flex',
};

const ReceitasFavoritas = () => {
  const favorites = useSelector((state) => state.userReducer.favorites);
  return (
    <Page>
      <Header />
      <Main>
        Receitas Favoritas
        {favorites && (
          <div>
            {favorites.map((el) => (
              <div key={ el.idMeal || el.idDrink } style={ cardStyle }>
                <h1>{el.strMeal || el.strDrink}</h1>
                <LikeButton recipe={ el } />
              </div>
            ))}
          </div>
        )}
      </Main>
    </Page>
  );
};

export default ReceitasFavoritas;
