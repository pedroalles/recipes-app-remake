import React from 'react';

import { screen, cleanup } from '@testing-library/react';

// import recipesReducer from '../redux/reducers/recipesReducer';
// import { storeFoodRecipes } from '../redux/actions';

import renderWithRouter from '../helpers/renderWithRouter';

import App from '../../App';

// import { drinksCategoriesResult } from "./mocks/drinkMocks";

describe('testa a página Bebidas', () => {
  beforeEach(() => {
    renderWithRouter(<App />, { initialEntries: ['/bebidas'] });
  });

  afterEach(() => {
    cleanup();
  });

  const { findAllByTestId } = screen;

  test('se os 6 botões de categorias do filtro são renderizados após fetch', async () => {
    // global.fetch = jest.fn(() => Promise.resolve({
    //   json: () => Promise.resolve(drinksCategoriesResult),
    // }));

    // renderWithRouter(<App />, { initialEntries: ['/bebidas'] });

    const N_BUTTONS = 6;
    expect(await findAllByTestId(/category-filter/i)).toHaveLength(N_BUTTONS);
  });

  test('se os 12 cards de receita são renderizados após fetch', async () => {
    const N_CARDS = 12;
    expect(await findAllByTestId(/recipe-card/i)).toHaveLength(N_CARDS);
  });
});
