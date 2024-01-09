// RootReducer.jsx
import { combineReducers } from 'redux';
import { passwordReducer, saveInfoReducer,CheckInfoReducer } from './Reducer';

const rootReducer = combineReducers({
  password: passwordReducer,
  saveInfo: saveInfoReducer,
  checkUser:CheckInfoReducer,
  // Add other reducers if needed
});

export default rootReducer;
