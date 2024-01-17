import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { togglePasswordVisibility, addData, fetchData } from '../StoreDetails/Actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const isPasswordVisible = useSelector((state) => state.password.isPasswordVisible);
  const passwordType = isPasswordVisible ? 'text' : 'password';

  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.fetchData.users);
  const registrationSuccess = useSelector((state) => state.saveInfo.registrationSuccess);


  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({ type, message });
  };

  const showSuccessAlert = () => {
    showAlert('success', 'Registration Success');
  };

  const showFailureAlert = (errorMessage) => {
    showAlert('danger', errorMessage);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({ ...prevUserInfo, [name]: value }));
  };

  useEffect(() => {
    dispatch(fetchData());
    allUsers 
    registrationSuccess
  }, [userInfo.username]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password } = userInfo;

    if (username === '' || email === '' || password === '') {
      showFailureAlert('All inputs are required')
      return;
    }

    if (allUsers && allUsers.some((user) => user.email === email)) {
      showFailureAlert('User with this email already exists')
      return;
    }

    try {
      dispatch(addData(userInfo));

      if (registrationSuccess) {
        showSuccessAlert()
        setUserInfo({
          username: '',
          email: '',
          password: '',
        });
      } else {
        showFailureAlert('Registration failed')
      }
    } catch (error) {
      showFailureAlert('An error occurred during registration')
    }
  };



  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Register</h2>
              {alert && (
                <div className={`alert alert-${alert.type}`} role="alert">
                  {alert.message}
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
                      onClick={() => dispatch(togglePasswordVisibility())}
                      icon={faEyeSlash}
                      style={{ cursor: 'pointer' }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      onClick={() => dispatch(togglePasswordVisibility())}
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

export default Register;
