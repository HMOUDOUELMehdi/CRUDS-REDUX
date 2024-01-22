import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListTasks = () => {
  // Dummy data for illustration
  const tasks = [
    { id: 1, task: 'Task 1', date: '2024-01-11' },
    { id: 2, task: 'Task 2', date: '2024-01-12' },
    { id: 3, task: 'Task 3', date: '2024-01-13' },
  ];

  return (
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
  );
};

export default ListTasks;
