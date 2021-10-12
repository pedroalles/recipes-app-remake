import React from 'react';

import { Router } from 'react-router-dom';

import { createMemoryHistory } from 'history';

import { render } from '@testing-library/react';

import { Provider } from 'react-redux';

import store from '../../redux/store';

const renderWithRouter = (component, { initialEntries = ['/'] } = {}) => {
  const history = createMemoryHistory({ initialEntries });
  return {
    ...render(
      <Provider store={ store }>
        <Router history={ history }>{ component }</Router>
      </Provider>,
    ),
    history,
  };
};

export default renderWithRouter;
