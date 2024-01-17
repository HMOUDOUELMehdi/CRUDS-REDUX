import { combineReducers } from 'redux';
import { passwordReducer, addDataReducer ,fetchDataReducer, loginReducer} from './Reducer';

const rootReducer = combineReducers({
  password: passwordReducer,
  saveInfo: addDataReducer,
  fetchData: fetchDataReducer,
  login: loginReducer,

});

export default rootReducer;
