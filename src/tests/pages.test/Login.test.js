import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { screen, cleanup } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import renderWithRouter from '../helpers/renderWithRouter';

import App from '../../App';

const BUTTON_LOGIN = 'login-submit-btn';
const INPUT_EMAIL = 'email-input';
const INPUT_PASSWORD = 'password-input';
// const INVALID_EMAIL = "email.com.";
// const INVALID_PASSWORD = "123456";
const VALID_EMAIL = 'email@test.com';
const VALID_PASSWORD = '1234567';
const MEALSTOKEN = 'mealsToken';
const COCKTAILS_TOKEN = 'cocktailsToken';

describe('testa a página Login', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  const { getByTestId } = screen;
  const { type, click } = userEvent;

  // test("se os inputs e o botão são renderizados na tela", () => {
  //   expect(getByTestId(INPUT_EMAIL)).toBeInTheDocument();
  //   expect(getByTestId(INPUT_PASSWORD)).toBeInTheDocument();
  //   expect(getByTestId(BUTTON_LOGIN)).toBeInTheDocument();
  // });

  // test("se o botão permanece desabilitado ao digitar email inválido", () => {
  //   expect(getByTestId(BUTTON_LOGIN)).toBeDisabled();
  //   type(getByTestId(INPUT_EMAIL), INVALID_EMAIL);
  //   type(getByTestId(INPUT_PASSWORD), VALID_PASSWORD);
  //   expect(getByTestId(BUTTON_LOGIN)).toBeDisabled();
  // });

  // test("se o botão permanece desabilitado ao digitar senha inválida", () => {
  //   expect(getByTestId(BUTTON_LOGIN)).toBeDisabled();
  //   type(getByTestId(INPUT_EMAIL), VALID_EMAIL);
  //   type(getByTestId(INPUT_PASSWORD), INVALID_PASSWORD);
  //   expect(getByTestId(BUTTON_LOGIN)).toBeDisabled();
  // });

  // test("se é possível digitar o email", () => {
  //   type(getByTestId(INPUT_EMAIL), VALID_EMAIL);
  //   expect(getByTestId(INPUT_EMAIL)).toHaveValue(VALID_EMAIL);
  // });

  // test("se é possível digitar a senha", () => {
  //   type(getByTestId(INPUT_PASSWORD), VALID_PASSWORD);
  //   expect(getByTestId(INPUT_PASSWORD)).toHaveValue(VALID_PASSWORD);
  // });

  // test("se o botão é habilitado com email e senha válidos", () => {
  //   expect(getByTestId(BUTTON_LOGIN)).toBeDisabled();
  //   type(getByTestId(INPUT_EMAIL), VALID_EMAIL);
  //   type(getByTestId(INPUT_PASSWORD), VALID_PASSWORD);
  //   expect(getByTestId(BUTTON_LOGIN)).not.toBeDisabled();
  // });

  test('se mealsToken e cocktailsToken estão salvas no localStorage após submit', () => {
    localStorage.removeItem(MEALSTOKEN);
    localStorage.removeItem(COCKTAILS_TOKEN);

    expect(getByTestId(BUTTON_LOGIN)).toBeDisabled();
    expect(localStorage.getItem(MEALSTOKEN)).toBe(null);
    expect(localStorage.getItem(COCKTAILS_TOKEN)).toBe(null);

    type(getByTestId(INPUT_EMAIL), VALID_EMAIL);
    type(getByTestId(INPUT_PASSWORD), VALID_PASSWORD);
    click(getByTestId(BUTTON_LOGIN));

    expect(localStorage.getItem(MEALSTOKEN)).toBe('1');
    expect(localStorage.getItem(COCKTAILS_TOKEN)).toBe('1');
  });
});
