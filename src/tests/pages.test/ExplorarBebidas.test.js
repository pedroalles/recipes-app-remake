import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { screen } from '@testing-library/react';

import renderWithRouter from '../helpers/renderWithRouter';

import App from '../../App';

describe('testa a página Explorar Bebidas', () => {
  beforeEach(() => {
    renderWithRouter(<App />, { initialEntries: ['/explorar/bebidas'] });
  });

  const { getAllByText } = screen;
  test('se "explorar bebidas" aparece 2 vezes na tela', () => {
    const N_TIMES = 2;
    const text = getAllByText(/explorar bebidas/i);
    expect(text).toHaveLength(N_TIMES);
  });
});
