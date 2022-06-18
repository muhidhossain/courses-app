import { combineReducers } from 'redux';
import { coursesReducer } from './coursesReducer';
import { userReducer } from './userReducer';

const reducers = combineReducers({
  user: userReducer,
  courses: coursesReducer,
});

export default reducers;
