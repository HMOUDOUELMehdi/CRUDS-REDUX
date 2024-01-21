import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Task = () => {

  const [taskInfo , setTaskInfo] = useState({
    task:'',
    date:''
  })

  const [tasks , setTasks] = useState([])

  const handleChange = (event) => {
    const { value,name } = event.target
    setTaskInfo((prevTaskInfo) => ({ ...prevTaskInfo, [name]: value }));
  };

  const handleAddTask = () => {

  };

  return (
<div className="container mt-4">
  <div className="row">
    {/* Add Task Form (Left Column) */}
    <div className="col-md-6 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Add Task</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="taskInput" className="form-label">
                Task
              </label>
              <input
                type="text"
                className="form-control"
                value={taskInfo.task}
                onChange={handleChange}
                name="task"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dateInput" className="form-label">
                Date To Do it
              </label>
              <input
                type="date"
                className="form-control"
                value={taskInfo.date}
                onChange={handleChange}
                name="date"
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

    {/* Task List (Right Column) */}
    <div className="col-md-6">
      <div className="container">
        <h5 className="mb-3">List of Tasks</h5>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Task</th>
                <th scope="col">Date Added</th>
                <th scope="col">Date To Do it</th>
                <th scope="col" className="text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.task}</td>
                  <td>{/* Date Added goes here */}</td>
                  <td>{task.date}</td>
                  <td className="text-center">
                    <button type="button" className="btn btn-warning me-2">
                      Edit
                    </button>
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Task;
