import React, { useState } from 'react';

// import { Redirect } from "react-router";

import PropTypes from 'prop-types';

// import { useLocation } from "react-router";

// import { redirectRecipeFood } from "../redux/actions/foodActions";

// import { useDispatch, useSelector } from "react-redux";

function Search({ toggleFilter, handleFilter }) {
  const [textInput, setTextInput] = useState('');
  const [radioButton, setRadioButton] = useState('');

  // const location = useLocation();
  // const dispatch = useDispatch();

  // const redirect = useSelector((state) => state.foodsReducer.redirect);

  const handleChange = ({ target }) => (target.type === 'text'
    ? setTextInput(target.value)
    : setRadioButton(target.id));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textInput === '' || radioButton === '') return;
    handleFilter(`${radioButton}:${textInput}`);
    toggleFilter((state) => !state);
  };

  return (
    <div>
      {/* {redirect.status && (
        <>
          <Redirect to={`${location.pathname}/${redirect.id}`} />
          {dispatch(redirectRecipeFood(false, ""))}
        </>
      )} */}
      <form onSubmit={ (e) => handleSubmit(e) }>
        <input
          type="text"
          data-testid="search-input"
          id="textInput"
          placeholder="Buscar receita"
          value={ textInput }
          onChange={ handleChange }
        />
        <fieldset name="filter">
          <label htmlFor="ingredient">
            <input
              type="radio"
              data-testid="ingredient-search-radio"
              name="filter"
              id="ingredient"
              onChange={ handleChange }
              searchquery={ radioButton }
            />
            Ingredient
          </label>

          <label htmlFor="name">
            <input
              type="radio"
              data-testid="name-search-radio"
              name="filter"
              id="name"
              onChange={ handleChange }
              searchquery={ radioButton }
            />
            Name
          </label>

          <label htmlFor="firstLetter">
            <input
              type="radio"
              data-testid="first-letter-search-radio"
              name="filter"
              id="firstLetter"
              onChange={ handleChange }
              searchquery={ radioButton }
            />
            First Letter
          </label>
        </fieldset>

        <button type="submit" data-testid="exec-search-btn">
          Buscar
        </button>
      </form>
    </div>
  );
}

const { func } = PropTypes;

Search.propTypes = {
  setSearchBarStatus: func,
  setFoodRecipes: func,
}.isRequired;

export default Search;
