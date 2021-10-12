import React from 'react';
import PropTypes from 'prop-types';

const cardStyle = {
  backgroundColor: '#ff8c00',
  width: '46vw',
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid black',
  margin: '5px',
  borderRadius: '5px',
};

const imgStyle = {
  width: '100%',
  borderRadius: '5px 5px 0 0',
};

const titleStyle = {
  width: '100%',
  padding: '2px 5px',
  color: 'white',
  backgroundColor: '#ff8c00',
  fontWeight: '700',
  borderRadius: '0 0 5px 5px',
  fontSize: '1.2rem',
  verticalAlign: 'middle',
};

const RecipeCard = ({ index, title, image }) => (
  <div data-testid={ `${index}-recipe-card` } style={ cardStyle }>
    <img
      data-testid={ `${index}-card-img` }
      src={ image }
      alt={ title }
      style={ imgStyle }
    />

    <span data-testid={ `${index}-card-name` } style={ titleStyle }>
      { title }
    </span>
  </div>
);

const { number, string } = PropTypes;

RecipeCard.propTypes = {
  index: number.isRequired,
  title: string.isRequired,
  image: string.isRequired,
};

export default RecipeCard;
