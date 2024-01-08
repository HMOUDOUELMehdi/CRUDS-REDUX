// Register.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { togglePasswordVisibility, saveInfo } from '../StoreDetails/Actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Register = ({ isPasswordVisible, togglePasswordVisibility, dispatchSaveInfo }) => {
  const passwordType = isPasswordVisible ? 'text' : 'password';

  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [allUsers, setAllUsers] = useState([]);

  const showAlert = (type, message) => {
    setUserInfo((prevUserInfo) => ({ ...prevUserInfo, error: { type, message } }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({ ...prevUserInfo, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password } = userInfo;

    if (username === '' || email === '' || password === '') {
      showAlert('danger', 'All inputs are required');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/users');
      const data = await response.json();
      setAllUsers(data);

      if (allUsers.some((user) => user.email === email)) {
        showAlert('danger', 'User with this email already exists');
        return;
      }

      const registerResponse = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });

      if (registerResponse.ok) {
        dispatchSaveInfo(userInfo);
        showAlert('success', 'Registration Success');
      } else {
        const errorData = await registerResponse.json();
        showAlert('danger', `Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      showAlert('danger', 'Something went wrong');
    }
  };

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

const mapStateToProps = (state) => ({
  isPasswordVisible: state.password.isPasswordVisible,
});

const mapDispatchToProps = (dispatch) => ({
  togglePasswordVisibility: () => dispatch(togglePasswordVisibility()),
  dispatchSaveInfo: (userInfo) => dispatch(saveInfo(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
