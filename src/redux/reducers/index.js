import { combineReducers } from 'redux';

import foodsReducer from './foodsReducer';
import drinksReducer from './drinksReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  userReducer,
  foodsReducer,
  drinksReducer,
});

export default rootReducer;
