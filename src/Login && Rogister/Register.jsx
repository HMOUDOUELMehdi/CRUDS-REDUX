import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Register</h2>
                            <form>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="username" placeholder="Enter your username" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                                </div>
                                <button type="submit" className="btn btn-success btn-block">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
