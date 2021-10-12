import { combineReducers } from 'redux';

import foodsReducer from './foodsReducer';
import drinksReducer from './drinksReducer';

const rootReducer = combineReducers({
  foodsReducer,
  drinksReducer,
});

export default rootReducer;
