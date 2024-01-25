import { combineReducers } from 'redux';
import { passwordReducer, addDataReducer ,fetchDataReducer, loginReducer 
  ,addTaskReducer,getCurrentUserReducer,getTasksReducer,logOutReducer,deleteTaskReducer
  ,updateTaskReducer} from './Reducer';

const rootReducer = combineReducers({
  password: passwordReducer,
  saveInfo: addDataReducer,
  fetchData: fetchDataReducer,
  login: loginReducer,
  addTask: addTaskReducer,
  currentUser: getCurrentUserReducer,
  getTasks: getTasksReducer,
  logOut:logOutReducer,
  deleteTasks:deleteTaskReducer,
  getInfo:updateTaskReducer,
});

export default rootReducer;
