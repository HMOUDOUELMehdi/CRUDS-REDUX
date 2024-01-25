import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { GetInfoForEdit, deleteTask, getTasks } from '../StoreDetails/Actions';

const ListTasks = () => {
  const tasks = useSelector((state) => state.getTasks.tasksCurrentUser);
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const dispatch = useDispatch();

  const currentUserInfo = JSON.parse(currentUser);

  useEffect(() => {
    dispatch(getTasks(currentUserInfo.id));
  }, [dispatch, currentUserInfo.id]);

  const [alert, setAlert] = useState(null);
  const [selectedTaskIds, setSelectedTaskIds] = useState(new Set());

  const showAlert = (type, message) => {
    setAlert({ type, message });
  };

  const showFailureAlert = (errorMessage) => {
    showAlert('danger', errorMessage);
  };

  const showSuccessAlert = (successMessage) => {
    showAlert('success', successMessage);
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await dispatch(deleteTask(taskId));
      showSuccessAlert('Task deleted successfully.');
    } catch (error) {
      showFailureAlert('Failed to delete task');
    }
  };

  const toggleClick = (taskId) => {
    setSelectedTaskIds((prevSelectedTaskIds) => {
      const newSelectedTaskIds = new Set(prevSelectedTaskIds);
      if (newSelectedTaskIds.has(taskId)) {
        newSelectedTaskIds.delete(taskId);
      } else {
        newSelectedTaskIds.add(taskId);
      }
      return newSelectedTaskIds;
    });
  };

  const handleEditTask = async (taskId,taskText,taskDate) => {
    dispatch(GetInfoForEdit({taskId,taskText,taskDate}))
  };  

  return (
    <div className="container">
      <h5 className="mb-3">List of Tasks</h5>
      {alert && (
        <div className={`alert alert-${alert.type}`} role="alert">
          {alert.message}
        </div>
      )}
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="w-25" style={{ maxWidth: '200px' }}>
                Task
              </th>
              <th scope="col" className="w-25" style={{ maxWidth: '100px' }}>
                Date Added
              </th>
              <th scope="col" className="w-25" style={{ maxWidth: '100px' }}>
                Date To Do it
              </th>
              <th scope="col" className="w-25 text-center" style={{ maxWidth: '200px' }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks &&
              tasks.map((task) => (
                <tr key={task.id}>
                  <td
                    className="w-25"
                    style={{
                      maxWidth: '173px',
                      overflow: 'auto',
                      textDecoration: selectedTaskIds.has(task.id) ? 'underline line-through' : 'none'
                    }}
                    onClick={() => toggleClick(task.id)}
                  >
                    {task.taskText}
                  </td>
                  <td className="w-25" style={{ maxWidth: '90px',textDecoration: selectedTaskIds.has(task.id) ? 'underline line-through' : 'none' }} onClick={() => toggleClick(task.id)}>
                    {task.dateDoIt}
                  </td>
                  <td className="w-25" style={{ maxWidth: '90px',textDecoration: selectedTaskIds.has(task.id) ? 'underline line-through' : 'none' }} onClick={() => toggleClick(task.id)}>
                    {task.dateAdd}
                  </td>
                  <td className="w-25 text-center" style={{ maxWidth: '200px',textDecoration: selectedTaskIds.has(task.id) ? 'underline line-through' : 'none' }}>
                    <button
                      type="button" 
                      className="btn btn-warning me-2"
                      onClick={() => handleEditTask(task.id)}
                      >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDeleteTask(task.id,task.taskText,task.dateDoIt)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTasks;



/*// ListTasks.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, getTasks, updateTask } from '../StoreDetails/Actions';

const ListTasks = () => {
  const tasks = useSelector((state) => state.getTasks.tasksCurrentUser);
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const dispatch = useDispatch();

  const currentUserInfo = JSON.parse(currentUser);

  useEffect(() => {
    dispatch(getTasks(currentUserInfo.id));
  }, [dispatch, currentUserInfo.id]);

  const [alert, setAlert] = useState(null);
  const [selectedTaskIds, setSelectedTaskIds] = useState(new Set());
  const [editedTask, setEditedTask] = useState({ taskId: '', taskText: '', taskDate: '' });
  const [isEditing, setIsEditing] = useState(false);

  const showAlert = (type, message) => {
    setAlert({ type, message });
  };

  const showFailureAlert = (errorMessage) => {
    showAlert('danger', errorMessage);
  };

  const showSuccessAlert = (successMessage) => {
    showAlert('success', successMessage);
  };

  const handleDeleteTask = async (taskId, taskText, taskDate) => {
    try {
      await dispatch(deleteTask(taskId));
      showSuccessAlert('Task deleted successfully.');
    } catch (error) {
      showFailureAlert('Failed to delete task');
    }
  };

  const handleEditTask = (taskId, taskText, taskDate) => {
    setEditedTask({ taskId, taskText, taskDate });
    setIsEditing(true);
  };

  const handleUpdateTask = async () => {
    try {
      await dispatch(updateTask(editedTask));
      showSuccessAlert('Task updated successfully.');
      setIsEditing(false);
    } catch (error) {
      showFailureAlert('Failed to update task');
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const toggleClick = (taskId) => {
    setSelectedTaskIds((prevSelectedTaskIds) => {
      const newSelectedTaskIds = new Set(prevSelectedTaskIds);
      if (newSelectedTaskIds.has(taskId)) {
        newSelectedTaskIds.delete(taskId);
      } else {
        newSelectedTaskIds.add(taskId);
      }
      return newSelectedTaskIds;
    });
  };

  return (
    <div className="container">
      <h5 className="mb-3">List of Tasks</h5>
      {alert && (
        <div className={`alert alert-${alert.type}`} role="alert">
          {alert.message}
        </div>
      )}
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="w-25" style={{ maxWidth: '200px' }}>
                Task
              </th>
              <th scope="col" className="w-25" style={{ maxWidth: '100px' }}>
                Date Added
              </th>
              <th scope="col" className="w-25" style={{ maxWidth: '100px' }}>
                Date To Do it
              </th>
              <th scope="col" className="w-25 text-center" style={{ maxWidth: '200px' }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks &&
              tasks.map((task) => (
                <tr key={task.id}>
                  <td
                    className="w-25"
                    style={{
                      maxWidth: '173px',
                      overflow: 'auto',
                      textDecoration: selectedTaskIds.has(task.id) ? 'underline line-through' : 'none'
                    }}
                    onClick={() => toggleClick(task.id)}
                  >
                    {isEditing && editedTask.taskId === task.id ? (
                      <input
                        type="text"
                        value={editedTask.taskText}
                        onChange={(e) => setEditedTask({ ...editedTask, taskText: e.target.value })}
                      />
                    ) : (
                      task.taskText
                    )}
                  </td>
                  <td className="w-25" style={{ maxWidth: '90px', textDecoration: selectedTaskIds.has(task.id) ? 'underline line-through' : 'none' }} onClick={() => toggleClick(task.id)}>
                    {isEditing && editedTask.taskId === task.id ? (
                      <input
                        type="date"
                        value={editedTask.taskDate}
                        onChange={(e) => setEditedTask({ ...editedTask, taskDate: e.target.value })}
                      />
                    ) : (
                      task.dateDoIt
                    )}
                  </td>
                  <td className="w-25" style={{ maxWidth: '90px', textDecoration: selectedTaskIds.has(task.id) ? 'underline line-through' : 'none' }} onClick={() => toggleClick(task.id)}>
                    {task.dateAdd}
                  </td>
                  <td className="w-25 text-center" style={{ maxWidth: '200px', textDecoration: selectedTaskIds.has(task.id) ? 'underline line-through' : 'none' }}>
                    {isEditing && editedTask.taskId === task.id ? (
                      <>
                        <button
                          type="button"
                          className="btn btn-success me-2"
                          onClick={handleUpdateTask}
                        >
                          Update
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={handleCancelEdit}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          type="button"
                          className="btn btn-warning me-2"
                          onClick={() => handleEditTask(task.id, task.taskText, task.dateDoIt)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => handleDeleteTask(task.id, task.taskText, task.dateDoIt)}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTasks;
*/