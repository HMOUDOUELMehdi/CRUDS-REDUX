import { combineReducers } from 'redux';
import { passwordReducer, addDataReducer ,fetchDataReducer, loginReducer ,addTaskReducer,getCurrentUserReducer} from './Reducer';

const rootReducer = combineReducers({
  password: passwordReducer,
  saveInfo: addDataReducer,
  fetchData: fetchDataReducer,
  login: loginReducer,
  addTask: addTaskReducer,
  currentUser: getCurrentUserReducer
});

export default rootReducer;
