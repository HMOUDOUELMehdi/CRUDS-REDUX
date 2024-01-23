import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../StoreDetails/Actions';

const ListTasks = () => {
  const tasks = useSelector((state) => state.getTasks.tasksCurrentUser);
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const dispatch = useDispatch();

  const currentUserInfo = JSON.parse(currentUser);


    dispatch(getTasks(currentUserInfo.id));


  return (
<div className="container">
  <h5 className="mb-3">List of Tasks</h5>
  <div className="table-responsive">
    <table className="table table-striped table-bordered">
      <thead className="thead-dark">
        <tr>
          <th scope="col" className="w-25" style={{ maxWidth: '200px'}}>Task</th>
          <th scope="col" className="w-25" style={{ maxWidth: '100px' }}>Date Added</th>
          <th scope="col" className="w-25" style={{ maxWidth: '100px' }}>Date To Do it</th>
          <th scope="col" className="w-25 text-center" style={{ maxWidth: '200px' }}>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {tasks &&
          tasks.map((task) => (
            <tr key={task.id}>
              <td className="w-25" style={{ maxWidth: '173px', overflow:"auto" }}>{task.taskText}</td>
              <td className="w-25" style={{ maxWidth: '90px' }}>{task.dateDoIt}</td>
              <td className="w-25" style={{ maxWidth: '90px'}}>{task.dateAdd}</td>
              <td className="w-25 text-center" style={{ maxWidth: '200px'}}>
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
