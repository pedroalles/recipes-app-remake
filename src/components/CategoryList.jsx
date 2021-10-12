import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const listStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  // padding: '5px',
  width: '100vw',
  margin: '5px 0 1px 0',
};

// const buttonStyle = {
//   width: "30vw",
//   margin: "4px",
//   borderRadius: "5px",
//   fontSize: "0.8rem"
// };

const FilterButton = styled.button`
  width: 30vw;
  margin: 4px;
  border-radius: 5px;
  color: ${(props) => {
    if (props.curr === props.name) return 'white';
  }};
  background-color: ${(props) => {
    if (props.curr === props.name) return 'black';
  }};
`;

const CategoryList = ({ categories, handleFilter, curr }) => (
  <div style={ listStyle }>
    { categories.map((category, index) => (
      <FilterButton
        curr={ curr }
        name={ category.strCategory }
        key={ index }
        type="button"
        data-testid={ `${category.strCategory}-category-filter` }
        onClick={ (e) => handleFilter(e.target.name) }
      >
        { category.strCategory }
      </FilterButton>
    )) }
  </div>
);

const { arrayOf, func, string } = PropTypes;

CategoryList.propTypes = {
  categories: arrayOf(PropTypes.shape({})).isRequired,
  handleFilter: func.isRequired,
  curr: string.isRequired,
};

export default CategoryList;
