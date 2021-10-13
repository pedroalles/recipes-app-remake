import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import ReactLoading from 'react-loading';
import Header from '../components/SecondaryHeader';
import LikeButton from '../components/LikeButton';

import {
  getDrinkRecipe,
  redirectRecipeDrink,
} from '../redux/actions/drinkActions';

import measureIngredientsList from '../helpers/specificFuntions';

import Main from './styles/MainDetails';
import Page from './styles/Page';

import IngredientsContainer from '../components/styles/IngredientsContainer';

const imgStyle = {
  width: '100vw',
  verticalAlign: 'middle',
};

const DetalhesReceitaBebida = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const details = useSelector((state) => state.drinksReducer.details);

  useEffect(() => {
    dispatch(redirectRecipeDrink(false, ''));
    if (!details[id]) {
      dispatch(getDrinkRecipe(id));
    }
  }, [dispatch, details, id]);

  return (
    <Page>
      <Header title={ details[id] && details[id].strDrink } />
      <Main>
        { details[id] ? (
          <div>
            <img src={ details[id].strDrinkThumb } alt="" style={ imgStyle } />
            {/* <h1>{details[id].strDrink}</h1> */ }
            <LikeButton recipe={ details[id] } />
            <IngredientsContainer>
              { measureIngredientsList(details[id]) }
            </IngredientsContainer>
          </div>
        ) : (
          <ReactLoading
            className="loadingRecipes"
            type="spinningBubbles"
            color="#161616"
            height={ 50 }
            width={ 50 }
          />
        ) }
      </Main>
    </Page>
  );
};

export default DetalhesReceitaBebida;
