import courseApi from '../../apis/courseApi';
import { ActionType } from './actionTypes';

export const addCourse = (course) => async (dispatch) => {
  dispatch({ type: ActionType.LOADING, payload: true });
  const response = await courseApi.post('/products', course);
  dispatch({ type: ActionType.UPDATE_SUCCESS, payload: response.data });
};

export const getCourses = () => async (dispatch) => {
  const response = await courseApi.get('/products/category/electronics');
  dispatch({
    type: ActionType.SET_COURSES,
    payload: response.data,
  });
};

export const setCourses = (courses) => ({
  type: ActionType.SET_COURSES,
  payload: courses,
});

export const updateSuccess = () => ({
  type: ActionType.UPDATE_SUCCESS,
  payload: null,
});
