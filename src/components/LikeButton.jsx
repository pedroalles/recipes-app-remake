import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { likeIcon, unlikeIcon } from '../images';

import IconButton from './styles/IconButton';
import { isFavorite, toggleFavorite } from '../services/localStorageManager';

const LikeButton = ({ recipe }) => {
  const [status, setStatus] = useState();

  useEffect(() => {
    setStatus(isFavorite(recipe.idMeal || recipe.idDrink));
  }, [recipe]);

  const handleClick = () => {
    toggleFavorite(recipe);
    setStatus((state) => !state);
  };

  return (
    <IconButton
      src={ status ? unlikeIcon : likeIcon }
      data-testid="favorite-btn"
      type="button"
      onClick={ handleClick }
    />
  );
};

const { shape } = PropTypes;

LikeButton.propTypes = {
  recipe: shape({}).isRequired,
};

export default LikeButton;
