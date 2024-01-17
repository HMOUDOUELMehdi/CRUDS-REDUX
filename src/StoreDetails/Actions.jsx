import axios from "axios";

export const TOGGLE_PASSWORD_VISIBILITY = 'TOGGLE_PASSWORD_VISIBILITY';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

export const togglePasswordVisibility = () => ({
  type: TOGGLE_PASSWORD_VISIBILITY,
});

export const fetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  payload: data,
});

export const fetchFailure = (error) => ({
  type: FETCH_FAILURE,
  payload: error,
});

export const fetchData = () => {
  return function (dispatch) {
    axios.get('http://localhost:3000/users')
      .then((response) => {
        const data = response.data;
        dispatch(fetchSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchFailure(error.message));
      });
  };
};

export const addSuccess = (data) => ({
  type: ADD_SUCCESS,
  payload: data,
});

export const addFailure = (error) => ({
  type: ADD_FAILURE,
  payload: error,
});

export const addData = (user) => {
  return function (dispatch) {
    axios.post('http://localhost:3000/users', user)
      .then((response) => {
        const data = response.data;
        dispatch(addSuccess(data));
      })
      .catch((error) => {
        dispatch(addFailure(error.message));
      });
  };
};
