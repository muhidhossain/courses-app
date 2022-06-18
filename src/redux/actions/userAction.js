import { gapi, loadAuth2 } from 'gapi-script';
import { ActionType } from './actionTypes';

const creator = ['muhidhossain7@gmail.com'];

export const getUser = () => async (dispatch) => {
  const auth = await loadAuth2(gapi, process.env.REACT_APP_GOOGLE_CLINT_ID);
  const user = auth?.currentUser?.get()?.getBasicProfile();
  dispatch({
    type: ActionType.SET_USER,
    payload: {
      email: user?.getEmail(),
      name: user?.getName(),
      id: user?.getId(),
      imageUrl: user?.getImageUrl(),
      creator: creator.includes(user?.getEmail()),
    },
  });
};

export const setUser = (user) => {
  return {
    type: ActionType.SET_USER,
    payload: user,
  };
};

export const removeUser = () => {
  return {
    type: ActionType.REMOVE_USER,
  };
};
