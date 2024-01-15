const PasswordState = {
  isPasswordVisible: false,
};

export const passwordReducer = (state = PasswordState, action) => {
  switch (action.type) {
    case 'TOGGLE_PASSWORD_VISIBILITY':
      return { ...state, isPasswordVisible: !state.isPasswordVisible };
    default:
      return state;
  }
};

const InfoState = {
  users: [],
  loginSuccess: false,
};

export const saveInfoReducer = (state = InfoState, action) => {
  switch (action.type) {
    case 'SAVE_INFO':
      return {
        ...state,
        users: [...state.users, action.payload], // Assuming payload is a user object
      };
    default:
      return state;
  }
};

export const fetchDataReducer = (state = InfoState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        users: action.payload, // Assuming payload is an array of users
      };
    default:
      return state;
  }
};

export const checkInfoReducer = (state = InfoState, action) => {
  switch (action.type) {
    case 'CHECK_INFO':
      const { email, password, users } = action.payload;

      // Check if the user with the given email and password exists in the array
      const userExists = users.some(
        (userData) =>
          userData.email === email && userData.password === password
      );

      if (userExists) {
        // Handle the case when the user exists
        return {
          ...state,
          loginSuccess: true,
        };
      } else {
        // Handle the case when the user does not exist
        // You might want to dispatch an action or handle it differently
        return {
          ...state,
          loginSuccess: false,
        };
      }

    default:
      return state;
  }
};
