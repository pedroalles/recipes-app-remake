import {
  STORE_DRINK_RECIPES,
  STORE_DRINK_CATEGORIES,
  STORE_DRINK_RECIPE,
  REDIRECT_RECIPE_DRINK,
} from '../actions/drinkActions';

const INITIAL_STATE = {
  categories: [],
  categorizedRecipes: {},
  details: {},
  redirect: { status: false, id: '' },
};

const drinksReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case STORE_DRINK_RECIPES:
    return {
      ...state,
      categorizedRecipes: {
        ...state.categorizedRecipes,
        [payload.category]: payload.recipes,
      },
    };

  case STORE_DRINK_CATEGORIES:
    return {
      ...state,
      categories: payload,
    };

  case STORE_DRINK_RECIPE:
    return {
      ...state,
      details: { ...state.details, [payload.id]: payload.recipe },
    };

  case REDIRECT_RECIPE_DRINK:
    return {
      ...state,
      redirect: { status: payload.status, id: payload.id },
    };

  default:
    return state;
  }
};

export default drinksReducer;
