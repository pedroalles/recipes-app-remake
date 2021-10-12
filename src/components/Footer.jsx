import React from 'react';
import { Link } from 'react-router-dom';

import { mealIcon, drinkIcon, exploreIcon } from '../images';

import IconButton from './styles/IconButton';

const style = {
  display: 'flex',
  justifyContent: 'space-around',
  width: '100vw',
  height: '55px',
  position: 'fixed',
  left: '0',
  bottom: '0',
  backgroundColor: '#ff8400',
  padding: '10px',
};

const Footer = () => (
  <div data-testid="footer" style={ style }>
    <Link to="comidas">
      <IconButton src={ mealIcon } data-testid="food-bottom-btn" type="button" />
    </Link>

    <Link to="/explorar">
      <IconButton
        src={ exploreIcon }
        data-testid="explore-bottom-btn"
        type="button"
      />
    </Link>

    <Link to="/bebidas">
      <IconButton
        src={ drinkIcon }
        data-testid="drinks-bottom-btn"
        type="button"
      />
    </Link>
  </div>
);

export default Footer;
