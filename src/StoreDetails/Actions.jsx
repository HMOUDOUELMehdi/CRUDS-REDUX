export const TOGGLE_PASSWORD_VISIBILITY = 'TOGGLE_PASSWORD_VISIBILITY';
export const SAVE_INFO = 'SAVE_INFO';
export const CHECK_INFO = 'CHECK_INFO';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const togglePasswordVisibility = () => ({
  type: TOGGLE_PASSWORD_VISIBILITY,
});

export const saveInfo = (userInfo) => ({
  type: SAVE_INFO,
  payload: userInfo,
});


export const checkInfo = (user) => ({
  type: CHECK_INFO,
  payload: user,
});

// actions.js (assuming you have an actions file)
export const loginSuccessAction = () => ({
  type: 'LOGIN_SUCCESS',
});