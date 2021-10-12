import React from 'react';

import { screen, cleanup } from '@testing-library/react';

// import recipesReducer from '../redux/reducers/recipesReducer';
// import { storeFoodRecipes } from '../redux/actions';

import renderWithRouter from '../helpers/renderWithRouter';

import App from '../../App';

// import foodRecipesMock from './mocks/foodRecipesMock';
// import { foodCategoriesResponse } from './mocks/foodMocks';

// import fetchFoods from '../services/fetchFoods';

describe('testa a página Comidas', () => {
  beforeEach(() => {
    renderWithRouter(<App />, { initialEntries: ['/comidas'] });
  });

  afterEach(() => {
    cleanup();
  });

  const { findAllByTestId } = screen;

  // test('se o state do reducer contém response do fetch mockado', () => {
  //   const previousState = { foods: [], drinks: [], isFetching: false };
  //   const mockedRecipes = mealsResponse.meals;
  //   expect(recipesReducer(previousState, storeFoodRecipes(mockedRecipes))).toEqual({
  //     foods: mockedRecipes,
  //     drinks: [],
  //     isFetching: false,
  //   });
  // });

  test('se os 12 cards de receita são renderizados após fetch', async () => {
    // global.fetch = jest.fn(() => Promise.resolve({
    //   json: () => Promise.resolve(foodRecipesMock),
    // }));

    // renderWithRouter(<App />, { initialEntries: ['/comidas'] });

    const N_CARDS = 12;
    expect(await findAllByTestId(/recipe-card/i)).toHaveLength(N_CARDS);
  });

  test('se os 6 botões de categorias do filtro são renderizados após fetch', async () => {
    // global.fetch = jest.fn(() => Promise.resolve({
    //   json: () => Promise.resolve(foodCategoriesResponse),
    // }));

    // renderWithRouter(<App />, { initialEntries: ['/comidas'] });

    const N_BUTTONS = 6;
    expect(await findAllByTestId(/category-filter/i)).toHaveLength(N_BUTTONS);
  });
});
