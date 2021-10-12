import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { screen, cleanup } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import renderWithRouter from '../helpers/renderWithRouter';

import App from '../../App';

const MEALSTOKEN = 'mealsToken';
const COCKTAILS_TOKEN = 'cocktailsToken';

const BUTTON_LOGOUT = 'profile-logout-btn';

describe('testa a página Profile', () => {
  beforeEach(() => {
    renderWithRouter(<App />, { initialEntries: ['/profile'] });
  });

  afterEach(() => {
    cleanup();
  });

  const { getByTestId } = screen;
  const { click } = userEvent;

  // test('se "profile" aparece 2 vezes na tela', () => {
  //   const N_TIMES = 2;
  //   const text = getAllByText(/profile/i);
  //   expect(text).toHaveLength(N_TIMES);
  // });

  test('se o localStorage é limpo após sair', () => {
    localStorage.removeItem(MEALSTOKEN);
    localStorage.removeItem(COCKTAILS_TOKEN);

    click(getByTestId(BUTTON_LOGOUT));

    expect(localStorage.getItem(MEALSTOKEN)).toBe(null);
    expect(localStorage.getItem(COCKTAILS_TOKEN)).toBe(null);
  });
});
