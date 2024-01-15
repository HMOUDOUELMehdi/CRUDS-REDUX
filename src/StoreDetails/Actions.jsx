export const TOGGLE_PASSWORD_VISIBILITY = 'TOGGLE_PASSWORD_VISIBILITY';
export const CHECK_INFO = 'CHECK_INFO';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'; // Add a constant for failure
export const ADD_USER_DATA_SUCCESS = 'ADD_USER_DATA_SUCCESS';
export const ADD_USER_DATA_FAILURE = 'ADD_USER_DATA_FAILURE';

export const togglePasswordVisibility = () => ({
  type: TOGGLE_PASSWORD_VISIBILITY,
});



export const checkInfo = (user) => ({
  type: CHECK_INFO,
  payload: user,
});

export const loginSuccessAction = () => ({
  type: LOGIN_SUCCESS,
});

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/users');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_DATA_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const addUserData = (userInfo) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });

      if (!response.ok) {
        throw new Error('Failed to add user data');
      }

      dispatch({
        type: ADD_USER_DATA_SUCCESS,
        payload: userInfo,
      });
    } catch (error) {
      dispatch({
        type: ADD_USER_DATA_FAILURE,
        payload: error.message,
      });
    }
  };
};
