import { ActionType } from '../actions/actionTypes';

const initialState = {
  user: null,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_USER:
      return { user: payload };

    case ActionType.REMOVE_USER:
      return { user: null };

    default:
      return state;
  }
};
