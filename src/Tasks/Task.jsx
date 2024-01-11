import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Task = () => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleAddTask = () => {
    // Add your logic to handle the task addition
    console.log('Task:', task, 'Date:', date);
    // Reset the input fields after adding the task
    setTask('');
    setDate('');
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
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
                    id="taskInput"
                    value={task}
                    onChange={handleTaskChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="dateInput" className="form-label">
                    Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dateInput"
                    value={date}
                    onChange={handleDateChange}
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
      </div>
    </div>
  );
};

export default Task;
