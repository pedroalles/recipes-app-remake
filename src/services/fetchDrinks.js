const DRINKS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const DRINK_CATEGORIES_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const DRINKS_BY_CATEGORY = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
const DRINK_BY_ID = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
const DRINK_BY_INGREDIENTS = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
const DRINK_BY_NAME = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const DRINK_BY_FIRST_LETTER = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

export function fetchDrinkRecipes() {
  console.log('fetching drink recipes...');
  const response = fetch(DRINKS_URL).then((res) => res.json());
  return response;
}

export function fetchDrinkCategories() {
  console.log('fetching drink categories');
  const response = fetch(DRINK_CATEGORIES_URL).then((res) => res.json());
  return response;
}

export function fetchDrinkRecipesByCategory(category) {
  console.log('fetching drink by category');
  const response = fetch(`${DRINKS_BY_CATEGORY}${category}`).then((res) => res.json());
  return response;
}

export function fetchDrinkRecipeById(id) {
  console.log('fetching drink by id');
  const response = fetch(`${DRINK_BY_ID}${id}`).then((res) => res.json());
  return response;
}

export function fetchDrinkRecipeByIngredients(search) {
  console.log('fetching drink by ingredients');
  const response = fetch(`${DRINK_BY_INGREDIENTS}${search}`).then((res) => res.json());
  return response;
}

export function fetchDrinkRecipeByName(search) {
  console.log('fetching drink by name');
  const response = fetch(`${DRINK_BY_NAME}${search}`).then((res) => res.json());
  return response;
}

export function fetchDrinkRecipeByFirstLetter(search) {
  console.log('fetching drink by first letter');
  const response = fetch(`${DRINK_BY_FIRST_LETTER}${search}`).then((res) => res.json());
  return response;
}
