const InfoState = {
  users: [],
  isPasswordVisible: false,
  registrationSuccess:true,
  loginSuccess: null
};

export const passwordReducer = (state = InfoState, action) => {
  switch (action.type) {
    case 'TOGGLE_PASSWORD_VISIBILITY':
      return { ...state, isPasswordVisible: !state.isPasswordVisible };
    default:
      return state;
  }
};

export const fetchDataReducer = (state = InfoState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export const addDataReducer = (state = InfoState, action) => {
  switch (action.type) {
    case 'ADD_SUCCESS':
      return {
        ...state,
        users: [...state.users, action.payload],
        registrationSuccess: true, 
      };
    case 'ADD_FAILURE':
      return {
        ...state,
        registrationSuccess: false, 
      };
    default:
      return state;
  }
};

export const loginReducer = (state = InfoState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loginSuccess: action.payload,
      };
    default:
      return state;
  }
};