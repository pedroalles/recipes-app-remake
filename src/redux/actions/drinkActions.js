import {
  fetchDrinkRecipes,
  fetchDrinkCategories,
  fetchDrinkRecipesByCategory,
  fetchDrinkRecipeById,
  fetchDrinkRecipeByIngredients,
  fetchDrinkRecipeByName,
  fetchDrinkRecipeByFirstLetter,
} from '../../services/fetchDrinks';

import { formatFilter, isSearch } from '../../helpers/utilFunctions';

export const STORE_DRINK_RECIPES = 'STORE_DRINK_RECIPES';
export const STORE_DRINK_CATEGORIES = 'STORE_DRINK_CATEGORIES';
export const STORE_DRINK_RECIPE = 'STORE_DRINK_RECIPE';
export const REDIRECT_RECIPE_DRINK = 'REDIRECT_RECIPE_DRINK';

const RECIPES_LENGTH = 12;
const CATEGORIES_LENGTH = 5;

export const storeDrinkRecipes = (recipes, category) => ({
  type: STORE_DRINK_RECIPES,
  payload: { recipes, category },
});

export const storeDrinkCategories = (categories) => ({
  type: STORE_DRINK_CATEGORIES,
  payload: categories,
});

export const storeDrinkRecipe = (recipe, id) => ({
  type: STORE_DRINK_RECIPE,
  payload: { recipe, id },
});

export const redirectRecipeDrink = (status, id) => ({
  type: REDIRECT_RECIPE_DRINK,
  payload: { status, id },
});

export const getDrinkRecipes = (category, setCurrFilter) => async (
  dispatch,
) => {
  try {
    let recipesResult;

    const [cat, search] = formatFilter(category);

    switch (cat) {
    case 'All':
      recipesResult = await fetchDrinkRecipes();
      break;
    case 'ingredient':
      recipesResult = await fetchDrinkRecipeByIngredients(search);
      break;
    case 'name':
      recipesResult = await fetchDrinkRecipeByName(search);
      break;
    case 'firstLetter':
      if (search.length > 1) {
        global.alert('Sua busca deve conter somente 1 (um) caracter');
        return setCurrFilter('All');
      }
      recipesResult = await fetchDrinkRecipeByFirstLetter(search);
      break;
    default:
      recipesResult = await fetchDrinkRecipesByCategory(category);
      break;
    }

    if (!recipesResult.drinks) {
      global.alert(
        'Sinto muito, não encontramos nenhuma receita para esses filtros.',
      );
      return setCurrFilter('All');
    }

    if (recipesResult.drinks.length === 1 && isSearch(category)) {
      return dispatch(
        redirectRecipeDrink(true, recipesResult.drinks[0].idDrink),
      );
    }

    const recipes = recipesResult.drinks.slice(0, RECIPES_LENGTH);

    dispatch(storeDrinkRecipes(recipes, category));
  } catch (error) { console.log(error); }
};

export const getDrinkCategories = () => async (dispatch) => {
  try {
    const categoriesResult = await fetchDrinkCategories();
    const resultKeys = Object.keys(categoriesResult)[0];
    const categories = categoriesResult[resultKeys].slice(0, CATEGORIES_LENGTH);

    categories.unshift({ strCategory: 'All' });

    dispatch(storeDrinkCategories(categories));
  } catch (error) { console.log(error); }
};

export const getDrinkRecipe = (id) => async (dispatch) => {
  try {
    const recipesResult = await fetchDrinkRecipeById(id);
    const recipe = recipesResult.drinks[0];

    console.log(recipe);

    dispatch(storeDrinkRecipe(recipe, id));
  } catch (error) { console.log(error); }
};
