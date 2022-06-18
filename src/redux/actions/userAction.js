import { gapi, loadAuth2 } from 'gapi-script';
import { ActionType } from './actionTypes';

export const getUser = () => async (dispatch) => {
  const auth = await loadAuth2(gapi, process.env.REACT_APP_GOOGLE_CLINT_ID);
  const user = auth.currentUser.get().getBasicProfile();
  dispatch({
    type: ActionType.SET_USER,
    payload: {
      email: user.getEmail(),
      name: user.getName(),
      id: user.getId(),
      imageUrl: user.getImageUrl(),
    },
  });
};

export const setUser = (user) => {
  return {
    type: ActionType.SET_USER,
    payload: user,
  };
};
