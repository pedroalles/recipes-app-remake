export const UPDATE_FAVORITES = 'UPDATE_FAVORITES';

export const updateFavorites = (favorites) => ({
  type: UPDATE_FAVORITES,
  payload: favorites,
});
