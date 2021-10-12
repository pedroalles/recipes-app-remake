import {
  STORE_FOOD_RECIPES,
  STORE_FOOD_CATEGORIES,
  STORE_FOOD_RECIPE,
  REDIRECT_RECIPE_FOOD,
} from '../actions/foodActions';

const INITIAL_STATE = {
  categories: [],
  categorizedRecipes: {},
  details: {},
  redirect: { status: false, id: '' },
};

const foodsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case STORE_FOOD_RECIPES:
    return {
      ...state,
      categorizedRecipes: {
        ...state.categorizedRecipes,
        [payload.category]: payload.recipes },
    };

  case STORE_FOOD_CATEGORIES:
    return {
      ...state,
      categories: payload,
    };

  case STORE_FOOD_RECIPE:
    return {
      ...state,
      details: { ...state.details, [payload.id]: payload.recipe },
    };

  case REDIRECT_RECIPE_FOOD:
    return {
      ...state,
      redirect: { status: payload.status, id: payload.id },
    };

  default:
    return state;
  }
};

export default foodsReducer;
