import { ActionType } from '../actions/actionTypes';

const initialState = {
  courses: [],
  loading: false,
  success: null,
};

export const coursesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_COURSES:
      return { ...state, courses: payload };

    case ActionType.UPDATE_SUCCESS:
      return { ...state, success: payload, loading: false };

    case ActionType.LOADING:
      return { ...state, loading: payload };

    default:
      return state;
  }
};
