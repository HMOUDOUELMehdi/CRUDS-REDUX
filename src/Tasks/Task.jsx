import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListTask from './ListTasks';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, logOut } from '../StoreDetails/Actions';
import { useNavigate } from 'react-router-dom';

const Task = () => {
  const currentUser = useSelector((state) => state.currentUser.currentUser);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUserInfo = currentUser && typeof currentUser === 'string' ? JSON.parse(currentUser) : currentUser;

  const [alert, setAlert] = useState(null);

  const [taskInfo, setTaskInfo] = useState({
    taskText: '',
    dateDoIt: '',
    dateAdd: new Date().toLocaleString(),
    userId: currentUserInfo.id,
    userName: currentUserInfo.username,
  });

  const showAlert = (type, message) => {
    setAlert({ type, message });
  };

  const showFailureAlert = (errorMessage) => {
    showAlert('danger', errorMessage);
  };

  const showSuccessAlert = () => {
    showAlert('success', 'Task is marked as done. Be careful To DO it.');
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setTaskInfo((prevTaskInfo) => ({ ...prevTaskInfo, [name]: value }));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const { taskText, dateDoIt, dateAdd, userId, userName } = taskInfo;
    if (taskText === '' || dateDoIt === '') {
      showFailureAlert('All inputs are required');
      
      setTimeout(() => {
        setAlert(null);
      }, 7000);

      return;
    }
    dispatch(addTask(taskInfo));
    showSuccessAlert();
    setTaskInfo({ ...taskInfo, taskText: '', dateDoIt: '' });
    
    setTimeout(() => {
      setAlert(null);
    }, 7000);

  };

  return (
    <div className="container mt-4">
      <button
        type="button"
        className="btn btn-danger m-2"
        onClick={() => {
          dispatch(logOut(false));
          navigate("/login");
        }}
      >
        Logout
      </button>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Welcome,
                <span style={{ fontWeight: 'bold', fontSize: '1.2em', color: 'blue' }}>
                  {taskInfo.userName}
                </span>! Wanna Add Task?
              </h5>
              {alert && (
                <div className={`alert alert-${alert.type}`} role="alert">
                  {alert.message}
                </div>
              )}
              <form>
                <div className="mb-3">
                  <label htmlFor="taskInput" className="form-label">
                    Task
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={taskInfo.taskText}
                    onChange={handleChange}
                    name="taskText"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="dateInput" className="form-label">
                    Date To Do it
                  </label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    value={taskInfo.dateDoIt}
                    onChange={handleChange}
                    name="dateDoIt"
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddTask}
                >
                  Add Task
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <ListTask />
        </div>
      </div>
    </div>
  );
};

export default Task;
