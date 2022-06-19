import { ActionType } from '../actions/actionTypes';

const initialState = {
  courses: [],
  course: null,
  addLoading: false,
  addSuccess: null,
  editLoading: false,
  editSuccess: null,
  deleteLoading: false,
  deleteSuccess: null,
};

export const coursesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_COURSES:
      return { ...state, courses: payload };

    case ActionType.SET_COURSE:
      return { ...state, course: payload };

    case ActionType.REMOVE_COURSE:
      return { ...state, course: null };

    case ActionType.UPDATE_ADD_SUCCESS:
      return { ...state, addSuccess: payload, addLoading: false };

    case ActionType.ADD_LOADING:
      return { ...state, addLoading: payload };

    case ActionType.UPDATE_EDIT_SUCCESS:
      return { ...state, editSuccess: payload, editLoading: false };

    case ActionType.EDIT_LOADING:
      return { ...state, editLoading: payload };

    case ActionType.UPDATE_DELETE_SUCCESS:
      return { ...state, deleteSuccess: payload, deleteLoading: false };

    case ActionType.DELETE_LOADING:
      return { ...state, deleteLoading: payload };

    default:
      return state;
  }
};
