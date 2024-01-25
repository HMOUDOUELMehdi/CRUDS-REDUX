const InfoState = {
  users: [],
  isPasswordVisible: false,
  registrationSuccess: true,
  loginSuccess: localStorage.getItem('loginSuccess') === 'true' || null,
  tasks: [],
  currentUser: localStorage.getItem('currentUser') || null,
  tasksCurrentUser:[],
  taskId:'',
  taskText:'',
  taskDate:''
};

export const passwordReducer = (state = InfoState, action) => {
  switch (action.type) {
    case 'TOGGLE_PASSWORD_VISIBILITY':
      return { ...state, isPasswordVisible: !state.isPasswordVisible };
    default:
      return state;
  }
};

export const fetchDataReducer = (state = InfoState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export const addDataReducer = (state = InfoState, action) => {
  switch (action.type) {
    case 'ADD_SUCCESS':
      return {
        ...state,
        users: [...state.users, action.payload],
        registrationSuccess: true,
      };
    case 'ADD_FAILURE':
      return {
        ...state,
        registrationSuccess: false,
      };
    default:
      return state;
  }
};

export const loginReducer = (state = InfoState, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('loginSuccess', action.payload);
      return {
        ...state,
        loginSuccess: action.payload,
      };
    default:
      return state;
  }
};

export const addTaskReducer = (state = InfoState, action) => {
  switch (action.type) {
    case 'ADD_TASK_SUCCESS':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
};

export const getCurrentUserReducer = (state = InfoState, action) => {
  switch (action.type) {
    case 'GET_CURRENT_USER_SUCCESS':
      const currentUserString = JSON.stringify(action.payload);
      localStorage.setItem('currentUser', currentUserString);
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export const getTasksReducer = (state = InfoState, action) => {
  switch (action.type) {
    case 'GET_TASKS_SUCCESS':
      return {
        ...state,
        tasksCurrentUser: action.payload,
      };
    default:
      return state;
  }
};

export const logOutReducer = (state = InfoState, action) => {
  switch (action.type) {
    case 'LOGOUt':
      return {
        ...state,
        loginSuccess: action.payload,
      };
    default:
      return state;
  }
};

export const deleteTaskReducer = (state = InfoState, action) => {
  switch (action.type) {
    case 'DELETE_TASK_SUCCESS':
      const updatedTasks = state.tasksCurrentUser.filter((task) => task.id !== action.payload);
      return {
        ...state,
        tasksCurrentUser: updatedTasks,
      };
    case 'DELETE_TASK_FAILURE':
      return state;
    default:
      return state;
  }
};

export const GetInfoForEditReducer = (state = InfoState, action) => {
  switch (action.type) {
    case 'GET_INFO_FOR_EDIT':
      return {
        ...state,
        taskId: action.payload.taskId,
        taskText: action.payload.taskText,
        taskDate: action.payload.taskDate,
      };
    default:
      return state;
  }
};

/*export const updateTaskReducer = (state = InfoState, action) => {
  switch (action.type) {
    case 'UPDATE_TASK_SUCCESS':
      const updatedTasks = state.tasksCurrentUser.map((task) => {
        return task.id === action.payload.id ? { ...task, ...action.payload } : task;
      });
      return {
        ...state,
        tasksCurrentUser: updatedTasks,
      };
    case 'UPDATE_TASK_FAILURE':
      return state;
    default:
      return state;
  }
}; */