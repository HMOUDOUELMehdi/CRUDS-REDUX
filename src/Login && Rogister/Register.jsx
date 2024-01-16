import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect, useSelector,useDispatch } from 'react-redux';
import { togglePasswordVisibility, addUserData, fetchData } from '../StoreDetails/Actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Register = ({ isPasswordVisible, togglePasswordVisibility }) => {
  // const Register = ({ isPasswordVisible, togglePasswordVisibility, dispatchAddUserData, dispatchFetchData, allUsers }) => {
  const passwordType = isPasswordVisible ? 'text' : 'password';

  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch()

  const allUsers = useSelector((state) => state.allUsers)

  const showAlert = (type, message) => {
    setUserInfo((prevUserInfo) => ({ ...prevUserInfo, error: { type, message } }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({ ...prevUserInfo, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password } = userInfo;

    if (username === '' || email === '' || password === '') {
      showAlert('danger', 'All inputs are required');
      return;
    }

    // Check if the email already exists in the fetched data
    if (allUsers.some((user) => user.email === email)) {
      showAlert('danger', 'User with this email already exists');
      return;
    }

    // Dispatch the action to add user data
    dispatch(addUserData(userInfo));

    showAlert('success', 'Registration Success');
  };

  useEffect(() => {
    // Fetch data when the component mounts
    dispatch(fetchData());
    console.log(allUsers)
  }, []);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Register</h2>
              {userInfo.error && (
                <div className={`alert alert-${userInfo.error.type}`} role="alert">
                  {userInfo.error.message}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    name="username"
                    placeholder="Enter your username"
                    value={userInfo.username}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    onChange={handleChange}
                    name="email"
                    placeholder="Enter your email"
                    value={userInfo.email}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type={passwordType}
                    className="form-control"
                    onChange={handleChange}
                    name="password"
                    placeholder="Enter your password"
                    value={userInfo.password}
                  />
                  {isPasswordVisible ? (
                    <FontAwesomeIcon
                      onClick={togglePasswordVisibility}
                      icon={faEyeSlash}
                      style={{ cursor: 'pointer' }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      onClick={togglePasswordVisibility}
                      icon={faEye}
                      style={{ cursor: 'pointer' }}
                    />
                  )}
                </div>
                <button type="submit" className="btn btn-success btn-block">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   isPasswordVisible: state.password.isPasswordVisible,
//   allUsers: state.fetchData.users, // Assuming the 'fetchData' reducer has a 'users' property
// });

// const mapDispatchToProps = (dispatch) => ({
//   togglePasswordVisibility: () => dispatch(togglePasswordVisibility()),
//   dispatchAddUserData: (userInfo) => dispatch(addUserData(userInfo)),
//   dispatchFetchData: () => dispatch(fetchData()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Register);
export default Register
