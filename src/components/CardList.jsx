import React from 'react';

import { useLocation } from 'react-router';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import RecipeCard from './RecipeCard';

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  width: '100vw',
};

const aStyle = {
  textDecoration: 'none',
};

const CardList = ({ recipes }) => {
  const location = useLocation();
  return (
    <div style={ style }>
      { recipes.map((recipe, index) => (
        <Link
          key={ index }
          to={ `${location.pathname}/${recipe.idMeal || recipe.idDrink}` }
          style={ aStyle }
        >
          <RecipeCard
            index={ index }
            title={ recipe.strMeal || recipe.strDrink }
            image={ recipe.strMealThumb || recipe.strDrinkThumb }
          />
        </Link>
      )) }
    </div>
  );
};

CardList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default CardList;
