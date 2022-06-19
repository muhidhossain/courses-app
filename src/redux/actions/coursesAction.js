import courseApi from '../../apis/courseApi';
import { ActionType } from './actionTypes';

export const getCourses = () => async (dispatch) => {
  const response = await courseApi.get('/products/category/electronics');
  dispatch({ type: ActionType.SET_COURSES, payload: response.data });
};

export const getCourse = (id) => async (dispatch) => {
  const response = await courseApi.get(`/products/${id}`);
  dispatch({ type: ActionType.SET_COURSE, payload: response.data });
};

export const addCourse = (course) => async (dispatch) => {
  dispatch({ type: ActionType.ADD_LOADING, payload: true });
  const response = await courseApi.post('/products', course);
  dispatch({ type: ActionType.UPDATE_ADD_SUCCESS, payload: response.data });
};

export const updateCourse = (course) => async (dispatch) => {
  dispatch({ type: ActionType.EDIT_LOADING, payload: true });
  const response = await courseApi.put(`/products/${course.id}`, course);
  dispatch({ type: ActionType.UPDATE_EDIT_SUCCESS, payload: response.data });
};

export const deleteCourse = (id) => async (dispatch) => {
  dispatch({ type: ActionType.DELETE_LOADING, payload: true });
  const response = await courseApi.delete(`/products/${id}`);
  dispatch({ type: ActionType.UPDATE_DELETE_SUCCESS, payload: response.data });
};

export const setCourses = (courses) => ({
  type: ActionType.SET_COURSES,
  payload: courses,
});

export const removeCourse = () => ({
  type: ActionType.REMOVE_COURSE,
});

export const updateAddSuccess = () => ({
  type: ActionType.UPDATE_ADD_SUCCESS,
  payload: null,
});

export const updateEditSuccess = () => ({
  type: ActionType.UPDATE_EDIT_SUCCESS,
  payload: null,
});

export const updateDeleteSuccess = () => ({
  type: ActionType.UPDATE_DELETE_SUCCESS,
  payload: null,
});
