import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { screen } from '@testing-library/react';

import renderWithRouter from '../helpers/renderWithRouter';

import App from '../../App';

describe('testa a página NotFound', () => {
  beforeEach(() => {
    renderWithRouter(<App />, { initialEntries: ['/notfoundpage'] });
  });

  describe('', () => {
    test('', () => {
      const { getByText } = screen;
      const text = getByText(/not found/i);
      expect(text).toBeInTheDocument();
    });
  });
});
