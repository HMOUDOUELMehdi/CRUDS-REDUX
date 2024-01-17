// RootReducer.jsx
import { combineReducers } from 'redux';
import { passwordReducer, addDataReducer ,fetchDataReducer} from './Reducer';

const rootReducer = combineReducers({
  password: passwordReducer,
  saveInfo: addDataReducer,
  fetchData: fetchDataReducer,

  // Add other reducers if needed
});

export default rootReducer;
