import React from 'react';
import PropTypes from 'prop-types';
import {
  // Link,
  useHistory } from 'react-router-dom';
import {
  // profileIcon,
  returnIcon } from '../images';

import IconButton from './styles/IconButton';

const style = {
  // display: 'flex',
  display: 'grid ',
  gridTemplateColumns: '0.8fr 3fr 0.8fr',
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
  fontSize: '1.5rem',
  justifySelf: 'center',
};

// const aStyle = {
//   // backgroundColor: 'white',
//   display: 'flex',
//   justifySelf: 'center',
// };

const Header = ({ title }) => {
  const history = useHistory();

  return (
    <div style={ style }>
      {/* <Link to="/profile" style={aStyle}>
        <IconButton
          src={profileIcon}
          data-testid="profile-top-btn"
          type="button"
        />
      </Link> */}
      <div />
      <span style={ pStyle } data-testid="page-title">
        { title }
      </span>
      <IconButton
        src={ returnIcon }
        data-testid="return-top-btn"
        type="button"
        onClick={ () => history.goBack() }
      />
    </div>
  );
};

const { func } = PropTypes;

Header.propTypes = {
  title: func.isRequired,

};

export default Header;
