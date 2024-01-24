import { combineReducers } from 'redux';
import { passwordReducer, addDataReducer ,fetchDataReducer, loginReducer 
  ,addTaskReducer,getCurrentUserReducer,getTasksReducer,logOutReducer,deleteTaskReducer} from './Reducer';

const rootReducer = combineReducers({
  password: passwordReducer,
  saveInfo: addDataReducer,
  fetchData: fetchDataReducer,
  login: loginReducer,
  addTask: addTaskReducer,
  currentUser: getCurrentUserReducer,
  getTasks: getTasksReducer,
  logOut:logOutReducer,
  deleteTasks:deleteTaskReducer
});

export default rootReducer;
