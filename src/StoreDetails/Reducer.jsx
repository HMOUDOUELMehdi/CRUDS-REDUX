const InfoState = {
  users: [],
  isPasswordVisible: false,
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
        registrationSuccess: true, // Set to true on success
      };
    case 'ADD_FAILURE':
      return {
        ...state,
        registrationSuccess: false, // Set to false on failure
      };
    default:
      return state;
  }
};

