import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { login } from '../services/localStorageManager';

const Login = () => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [disabledButton, setDisabledButton] = useState(true);

  const checkLogin = (email, password) => {
    const MIN_LENGTH_PASSWORD = 6;
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email) && password.length > MIN_LENGTH_PASSWORD;
  };

  const handleChange = ({ target: { id, value } }) => {
    setUserData({ ...userData, [id]: value });
  };

  useEffect(() => {
    setDisabledButton(checkLogin(userData.email, userData.password));
  }, [userData]);

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ email: userData.email });
    history.push('/comidas');
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="email">
          E-mail
          <input
            data-testid="email-input"
            type="email"
            id="email"
            placeholder="E-mail"
            value={ userData.email }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            data-testid="password-input"
            type="password"
            id="password"
            placeholder="Senha"
            value={ userData.password }
            onChange={ handleChange }
          />
        </label>
        <button
          data-testid="login-submit-btn"
          id="login-submit-btn"
          type="submit"
          disabled={ !disabledButton }
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
