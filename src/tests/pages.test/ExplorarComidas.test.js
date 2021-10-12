import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { screen } from '@testing-library/react';

import renderWithRouter from '../helpers/renderWithRouter';

import App from '../../App';

describe('testa a página Explorar Comidas', () => {
  beforeEach(() => {
    renderWithRouter(<App />, { initialEntries: ['/explorar/comidas'] });
  });

  const { getAllByText } = screen;

  test('se "explorar comidas" aparece 2 vezes na tela', () => {
    const N_TIMES = 2;
    const text = getAllByText(/explorar comidas/i);
    expect(text).toHaveLength(N_TIMES);
  });
});
