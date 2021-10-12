import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import ReactLoading from 'react-loading';
import Header from '../components/SecondaryHeader';

import {
  getFoodRecipe,
  redirectRecipeFood,
} from '../redux/actions/foodActions';

import measureIngredientsList from '../helpers/specificFuntions';

import Main from './styles/MainDetails';
import Page from './styles/Page';

import IngredientsContainer from '../components/styles/IngredientsContainer';

const imgStyle = {
  width: '100vw',
  verticalAlign: 'middle',
};

const DetalhesReceitaComida = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const details = useSelector((state) => state.foodsReducer.details);

  useEffect(() => {
    dispatch(redirectRecipeFood(false, ''));
    if (!details[id]) {
      dispatch(getFoodRecipe(id));
    }
  }, [dispatch, details, id]);

  return (
    <Page>
      <Header title={ details[id] && details[id].strMeal } />
      <Main>
        { details[id] ? (
          <div>
            <img src={ details[id].strMealThumb } alt="" style={ imgStyle } />
            {/* <h1>{details[id].strMeal}</h1> */ }
            <IngredientsContainer>
              { measureIngredientsList(details[id]) }
            </IngredientsContainer>
            <p>{ details[id].strInstructions }</p>
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

export default DetalhesReceitaComida;
