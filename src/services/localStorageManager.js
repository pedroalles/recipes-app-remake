const MEALS_TOKEN_KEY = 'mealsToken';
const COCKTAILS_TOKEN_KEY = 'cocktailsToken';
const USER_KEY = 'user';
const FAVORITE_KEY = 'favoriteRecipes';

export const login = (data) => {
  localStorage.setItem(MEALS_TOKEN_KEY, 1);
  localStorage.setItem(COCKTAILS_TOKEN_KEY, 1);
  localStorage.setItem(FAVORITE_KEY, '[]');
  localStorage.setItem(USER_KEY, JSON.stringify({ email: data }));
};

export const logout = () => {
  localStorage.removeItem(MEALS_TOKEN_KEY);
  localStorage.removeItem(COCKTAILS_TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(FAVORITE_KEY);
};

export const localStorageByKey = (key) => JSON.parse(localStorage.getItem(key));

export const isFavorite = (id) => {
  const favorites = localStorageByKey(FAVORITE_KEY);
  const res = favorites.some((el) => (el.idMeal === id) || (el.idDrink === id));
  return res;
};

export const toggleFavorite = (data) => {
  const id = data.idMeal || data.idDrink;
  const favorites = localStorageByKey(FAVORITE_KEY);
  let updatedData;
  if (isFavorite(id)) {
    updatedData = favorites.filter((el) => (el.idMeal !== id) && (el.idDrink !== id));
  } else {
    updatedData = [...favorites, data];
  }
  localStorage.setItem('favoriteRecipes', JSON.stringify(updatedData));
};
