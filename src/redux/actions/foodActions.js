import {
  fetchFoodRecipes,
  fetchFoodCategories,
  fetchFoodRecipesByCategory,
  fetchFoodRecipeById,
  fetchFoodRecipeByIngredients,
  fetchFoodRecipeByName,
  fetchFoodRecipeByFirstLetter,
} from '../../services/fetchFoods';

import { formatFilter, isSearch } from '../../helpers/utilFunctions';

export const STORE_FOOD_RECIPES = 'STORE_FOOD_RECIPES';
export const STORE_FOOD_CATEGORIES = 'STORE_FOOD_CATEGORIES';
export const STORE_FOOD_RECIPE = 'STORE_FOOD_RECIPE';
export const REDIRECT_RECIPE_FOOD = 'REDIRECT_RECIPE_FOOD';

const RECIPES_LENGTH = 12;
const CATEGORIES_LENGTH = 5;

export const storeFoodRecipes = (recipes, category) => ({
  type: STORE_FOOD_RECIPES,
  payload: { recipes, category },
});

export const storeFoodCategories = (categories) => ({
  type: STORE_FOOD_CATEGORIES,
  payload: categories,
});

export const storeFoodRecipe = (recipe, id) => ({
  type: STORE_FOOD_RECIPE,
  payload: { recipe, id },
});

export const redirectRecipeFood = (status, id) => ({
  type: REDIRECT_RECIPE_FOOD,
  payload: { status, id },
});

export const getFoodRecipes = (category, setCurrFilter) => async (dispatch) => {
  try {
    let recipesResult;

    const [cat, search] = formatFilter(category);

    switch (cat) {
    case 'All':
      recipesResult = await fetchFoodRecipes();
      break;

    case 'ingredient':
      recipesResult = await fetchFoodRecipeByIngredients(search);
      break;

    case 'name':
      recipesResult = await fetchFoodRecipeByName(search);
      break;

    case 'firstLetter':
      if (search.length > 1) {
        global.alert('Sua busca deve conter somente 1 (um) caracter');
        return setCurrFilter('All');
      }
      recipesResult = await fetchFoodRecipeByFirstLetter(search);

      break;

    default:
      recipesResult = await fetchFoodRecipesByCategory(cat);
      break;
    }

    if (!recipesResult.meals) {
      global.alert(
        'Sinto muito, não encontramos nenhuma receita para esses filtros.',
      );
      return setCurrFilter('All');
    }

    if (recipesResult.meals.length === 1 && isSearch(category)) {
      return dispatch(redirectRecipeFood(true, recipesResult.meals[0].idMeal));
    }

    const recipes = recipesResult.meals.slice(0, RECIPES_LENGTH);

    dispatch(storeFoodRecipes(recipes, category));
  } catch (error) { console.log(error); }
};

export const getFoodCategories = () => async (dispatch) => {
  try {
    const categoriesResult = await fetchFoodCategories();
    const resultKeys = Object.keys(categoriesResult)[0];
    const categories = categoriesResult[resultKeys].slice(0, CATEGORIES_LENGTH);

    categories.unshift({ strCategory: 'All' });

    dispatch(storeFoodCategories(categories));
  } catch (error) { console.log(error); }
};

export const getFoodRecipe = (id) => async (dispatch) => {
  try {
    const recipesResult = await fetchFoodRecipeById(id);
    const recipe = recipesResult.meals[0];

    dispatch(storeFoodRecipe(recipe, id));
  } catch (error) { console.log(error); }
};
