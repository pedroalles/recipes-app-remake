import React from 'react';

import { screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import renderWithRouter from '../helpers/renderWithRouter';

import App from '../../App';

describe('testa o componente Header', () => {
  const { getByTestId } = screen;
  const { click } = userEvent;

  test('se ao clicar em return o usuário é redirecionado de volta à comidas', () => {
    const { history } = renderWithRouter(<App />, {
      initialEntries: ['/comidas'],
    });

    const url = history.location.pathname;

    click(getByTestId('explore-bottom-btn'));
    click(getByTestId('return-top-btn'));

    expect(url).toBe('/comidas');
  });
});
