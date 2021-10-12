import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { screen } from '@testing-library/react';

import renderWithRouter from '../helpers/renderWithRouter';

import App from '../../App';

describe('testa a página Explorar', () => {
  beforeEach(() => {
    renderWithRouter(<App />, { initialEntries: ['/explorar'] });
  });

  const { getAllByText } = screen;

  test('se "explorar" aparece 3 vezes na tela', () => {
    const N_TIMES = 3;
    const text = getAllByText(/explorar/i);
    expect(text).toHaveLength(N_TIMES);
  });
});
