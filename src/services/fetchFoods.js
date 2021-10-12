const FOODS_ULR = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const FOOD_CATEGORIES_URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const FOODS_BY_CATEGORY = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
const FOOD_BY_ID = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const FOOD_BY_INGREDIENTS = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const FOOD_BY_NAME = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const FOOD_BY_FIRST_LETTER = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

export function fetchFoodRecipes() {
  console.log('fetching food recipes...');
  const response = fetch(FOODS_ULR).then((res) => res.json());
  return response;
}

export function fetchFoodCategories() {
  console.log('fetching food categories');
  const response = fetch(FOOD_CATEGORIES_URL).then((res) => res.json());
  return response;
}

export function fetchFoodRecipesByCategory(category) {
  console.log('fetching food by category');
  const response = fetch(`${FOODS_BY_CATEGORY}${category}`).then((res) => res.json());
  return response;
}

export function fetchFoodRecipeById(id) {
  console.log('fetching food by id');
  const response = fetch(`${FOOD_BY_ID}${id}`).then((res) => res.json());
  return response;
}

export function fetchFoodRecipeByIngredients(search) {
  console.log('fetching food by ingredients');
  const response = fetch(`${FOOD_BY_INGREDIENTS}${search}`).then((res) => res.json());
  return response;
}

export function fetchFoodRecipeByName(search) {
  console.log('fetching food by name');
  const response = fetch(`${FOOD_BY_NAME}${search}`).then((res) => res.json());
  return response;
}

export function fetchFoodRecipeByFirstLetter(search) {
  console.log('fetching food by first letter');
  const response = fetch(`${FOOD_BY_FIRST_LETTER}${search}`).then((res) => res.json());
  return response;
}
