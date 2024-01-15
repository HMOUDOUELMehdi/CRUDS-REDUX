// RootReducer.jsx
import { combineReducers } from 'redux';
import { passwordReducer, saveInfoReducer,checkInfoReducer ,fetchDataReducer} from './Reducer';

const rootReducer = combineReducers({
  password: passwordReducer,
  saveInfo: saveInfoReducer,
  CheckInfo: checkInfoReducer,
  fetchData: fetchDataReducer,

  // Add other reducers if needed
});

export default rootReducer;
