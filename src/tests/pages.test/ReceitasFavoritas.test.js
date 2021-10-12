import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { screen } from '@testing-library/react';

import renderWithRouter from '../helpers/renderWithRouter';

import App from '../../App';

describe('testa a página Receitas Favoritas', () => {
  beforeEach(() => {
    renderWithRouter(<App />, { initialEntries: ['/receitas-favoritas'] });
  });

  const { getAllByText } = screen;
  test('se "receitas favoritas" aparece 2 vezes na tela', () => {
    const N_TIMES = 2;
    const text = getAllByText(/receitas favoritas/i);
    expect(text).toHaveLength(N_TIMES);
  });
});
