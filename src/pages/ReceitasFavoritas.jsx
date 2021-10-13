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
                <h1 data-testid={ `${el.idMeal ? 0 : 1}-horizontal-name` }>{el.strMeal || el.strDrink}</h1>
                <LikeButton
                  data-testid={ `${el.idMeal ? 0 : 1}-horizontal-favorite-btn` }
                  recipe={ el }
                />
              </div>
            ))}
          </div>
        )}
      </Main>
    </Page>
  );
};

export default ReceitasFavoritas;
