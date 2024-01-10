// login.jsx
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkInfo, loginSuccessAction } from '../StoreDetails/Actions';

const Login = ({ DcheckInfo, loginSuccess }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const showAlert = (type, message) => {
    setUser((prev) => ({ ...prev, error: { type, message } }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const fetchData = async () => {
    // Example of fetching data from a server
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    setData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchData();

    // Dispatch the action with user information
    DcheckInfo(user);

    // Dispatch a separate action for login success
    loginSuccess();
  };

  useEffect(() => {
    if (!loginSuccess) {
      navigate('/task');
    }
  }, [loginSuccess]);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              {user.error && (
                <div className={`alert alert-${user.error.type}`} role="alert">
                  {user.error.message}
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
                    placeholder="Enter your mail"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your password"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Login
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
  // map any state you need from the Redux store
  loginSuccess: state.loginSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  DcheckInfo: (user) => dispatch(checkInfo(user)),
  loginSuccess: () => dispatch(loginSuccessAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);


