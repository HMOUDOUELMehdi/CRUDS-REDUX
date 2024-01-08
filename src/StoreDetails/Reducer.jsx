// Reducer.jsx
const initialState = {
  isPasswordVisible: false,
  userInfo: {},
};

export const passwordReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_PASSWORD_VISIBILITY':
      return { ...state, isPasswordVisible: !state.isPasswordVisible };
    default:
      return state;
  }
};

export const saveInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_INFO':
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
