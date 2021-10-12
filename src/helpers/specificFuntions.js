import React from 'react';

// export const ingredientList = (data) => {
//   const listIngredients = Object.keys(data)
//     .filter((key) => key.includes('strIngredient'))
//     .map((key) => data[key])
//     .filter(
//       (ingredient) => ingredient
//         && ingredient !== null
//         && ingredient !== ''
//         && ingredient !== ' ',
//     );

//   return (
//     <ul>
//       { listIngredients.map((el) => (
//         <li key={ el }>{ el }</li>
//       )) }
//     </ul>
//   );
// };

// export const measureList = (data) => {
//   const measuresList = Object.keys(data)
//     .filter((key) => key.includes('strMeasure'))
//     .map((measure) => data[measure])
//     .filter(
//       (measure) => measure && measure !== null && measure !== '' && measure !== ' ',
//     );

//   return (
//     <ul>
//       { measuresList.map((el) => (
//         <li key={ el }>{ el }</li>
//       )) }
//     </ul>
//   );
// };

const measureIngredientsList = (data) => {
  const listIngredients = Object.keys(data)
    .filter((key) => key.includes('strIngredient'))
    .map((key) => data[key])
    .filter(
      (ingredient) => ingredient
        && ingredient !== null
        && ingredient !== ''
        && ingredient !== ' ',
    );

  const measuresList = Object.keys(data)
    .filter((key) => key.includes('strMeasure'))
    .map((measure) => data[measure])
    .filter(
      (measure) => measure && measure !== null && measure !== '' && measure !== ' ',
    );

  return (
    <ul>
      <li>
        <span>Measures</span>
        <span>Ingredients</span>
      </li>
      { measuresList.map((el, index) => (
        <li key={ index }>
          <span>{ el }</span>
          <span>{ listIngredients[index] }</span>
        </li>
      )) }
    </ul>
  );
};

export default measureIngredientsList;
