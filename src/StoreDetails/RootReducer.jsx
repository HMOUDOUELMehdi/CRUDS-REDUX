// RootReducer.jsx
import { combineReducers } from 'redux';
import { passwordReducer, saveInfoReducer } from './Reducer';

const rootReducer = combineReducers({
  password: passwordReducer,
  saveInfo: saveInfoReducer,
  // Add other reducers if needed
});

export default rootReducer;
