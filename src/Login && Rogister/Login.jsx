import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, fetchData , togglePasswordVisibility} from '../StoreDetails/Actions';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allUsers = useSelector((state) => state.fetchData.users);
  const successLogin = useSelector((state) => state.login.loginSuccess);
  const isPasswordVisible = useSelector((state) => state.password.isPasswordVisible);
  const passwordType = isPasswordVisible ? 'text' : 'password';

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({ type, message });
  };

  const showFailureAlert = (errorMessage) => {
    showAlert('danger', errorMessage);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = user;

    if (email === '' || password === '') {
      showFailureAlert('All inputs are required');
      return;
    }

    const userExists = allUsers.some((userData) => userData.email === email && userData.password === password);

    if (userExists) {
      dispatch(login(true));
      navigate('/task');
    } else {
      dispatch(login(false));
      showFailureAlert('Invalid email or password');
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              {alert && (
                <div className={`alert alert-${alert.type}`} role="alert">
                  {alert.message}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type={passwordType}
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your password"
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
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form> <br />
              <div> Create New Account ! <Link to={'/'} > Register </Link> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
