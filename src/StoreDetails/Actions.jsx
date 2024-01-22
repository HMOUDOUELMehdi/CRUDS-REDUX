import axios from "axios";

export const TOGGLE_PASSWORD_VISIBILITY = 'TOGGLE_PASSWORD_VISIBILITY';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const ADD_TASK_FAILURE = 'ADD_TASK_FAILURE';
export const LOGIN = 'LOGIN';
export const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS';
export const GET_CURRENT_USER_FAILURE = 'GET_CURRENT_USER_FAILURE';

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

export const login = (loginSuccess) => ({
  type: LOGIN,
  payload: loginSuccess,
});

export const addTaskSuccess = (task) => ({
  type: ADD_TASK_SUCCESS,
  payload: task,
});

export const addTaskFailure = (error) => ({
  type: ADD_TASK_FAILURE,
  payload: error,
});

export const addTask = (task) => {
  return function (dispatch) {
    axios.post('http://localhost:3000/tasks', task)
      .then((response) => {
        const data = response.data;
        dispatch(addTaskSuccess(data));
      })
      .catch((error) => {
        dispatch(addTaskFailure(error));
      });
  };
};

export const getCurrentUserSuccess = (data) => ({
  type: GET_CURRENT_USER_SUCCESS,
  payload: data,
});

export const getCurrentUserFailure = (error) => ({
  type: GET_CURRENT_USER_FAILURE,
  payload: error,
});

export const getCurrentUser = (email) => {
  return function (dispatch) {
    axios.get('http://localhost:3000/users')
      .then((response) => {
        const data = response.data;
        const currentUser = data.find(user => user.email === email);

        if (currentUser) {
          // console.log(currentUser)
          dispatch(getCurrentUserSuccess(currentUser));
        } else {
          dispatch(getCurrentUserFailure('User not found'));
        }
      })
      .catch((error) => {
        dispatch(getCurrentUserFailure(error.message));
      });
  };
};
