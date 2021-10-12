import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';
import { searchIcon, profileIcon, returnIcon } from '../images';

import IconButton from './styles/IconButton';

const style = {
  // display: 'flex',
  display: 'grid ',
  gridTemplateColumns: '1fr 2.5fr 1fr',
  // justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '55px',
  position: 'fixed',
  left: '0',
  top: '0',
  backgroundColor: '#ff8400',
};

const pStyle = {
  // backgroundColor: 'white',
  fontWeight: '700',
  fontSize: '1.4rem',
  justifySelf: 'center',
};

const aStyle = {
  // backgroundColor: 'white',
  display: 'flex',
  justifySelf: 'center',
};

const Header = ({ toggleFilter }) => {
  const history = useHistory();
  const location = useLocation();

  // function removeSlash(string) {
  //   return string.replace(/^\/+/g, '');
  // }

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function formatTitle(string, simbol) {
    const x = string.split(simbol);
    const z = x.filter((el) => el !== '');
    const j = z.map((el) => capitalize(el));
    const y = j.join(' ');
    return y;
  }

  const pageName = formatTitle(formatTitle(location.pathname, '/'), '-');

  return (
    <div style={ style }>
      <Link to="/profile" style={ aStyle }>
        <IconButton
          src={ profileIcon }
          data-testid="profile-top-btn"
          type="button"
        />
      </Link>

      <span style={ pStyle } data-testid="page-title">
        { pageName }
      </span>

      { pageName === 'Comidas' || pageName === 'Bebidas' ? (
        <IconButton
          src={ searchIcon }
          data-testid="search-top-btn"
          type="button"
          onClick={ toggleFilter ? () => toggleFilter((state) => !state) : null }
        />
      ) : (
        <IconButton
          src={ returnIcon }
          data-testid="return-top-btn"
          type="button"
          onClick={ () => history.goBack() }
        />
      ) }
    </div>
  );
};

const { func } = PropTypes;

Header.propTypes = {
  toggleFilter: func.isRequired,

};

export default Header;
