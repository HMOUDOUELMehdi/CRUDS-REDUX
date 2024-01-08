const PasswordState = {
  isPasswordVisible: false,
};

export const passwordReducer = (state = PasswordState, action) => {
  switch (action.type) {
    case 'TOGGLE_PASSWORD_VISIBILITY':
      return {isPasswordVisible: !state.isPasswordVisible };
    default:
      return state;
  }
};

const InfoState = {
  userInfo: {},
}

export const saveInfoReducer = (state = InfoState, action) => {
  switch (action.type) {
    case 'SAVE_INFO':
      return {
        userInfo: {
          ...state.userInfo,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
