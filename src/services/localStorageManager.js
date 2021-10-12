export const login = (data) => {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
  localStorage.setItem('user', JSON.stringify(data));
};

export const logout = () => {
  localStorage.removeItem('mealsToken');
  localStorage.removeItem('cocktailsToken');
  localStorage.removeItem('user');
};

export const localStorageByKey = (key) => JSON.parse(localStorage.getItem(key));
