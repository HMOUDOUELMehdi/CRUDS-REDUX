import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Register from "./Login && Rogister/Register";
import Login from "./Login && Rogister/Login";
import Task from "./Tasks/Task";
import { useSelector } from 'react-redux';

function App() {
  function PrivateRoute({ element }) {
    const logInSuccess = useSelector((state) => state.login.loginSuccess);

    return logInSuccess ? element : <Navigate to="/login" replace />;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/task",
      element: <PrivateRoute element={<Task />} />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
