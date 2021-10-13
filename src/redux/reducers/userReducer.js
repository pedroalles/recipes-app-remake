import {
  UPDATE_FAVORITES,
} from '../actions/userActions';

const INITIAL_STATE = {
  favorites: [],
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case UPDATE_FAVORITES:
    return {
      ...state,
      favorites: payload,
    };

  default:
    return state;
  }
};

export default userReducer;
