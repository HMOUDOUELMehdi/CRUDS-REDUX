import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Register from "./Login && Rogister/Register";
import Login from "./Login && Rogister/Login";
// import ListTasks from "./Tasks/ListTasks";
import Task from "./Tasks/Task";
import { useEffect } from "react";
import { useSelector } from 'react-redux';


function App() {

  const navigate = useNavigate()

  const PrivateRoot = ({ element }) => {
    const logInSuccess = useSelector((state) => state.login.loginSuccess);

    useEffect(() => {
      console.log("isAuthenticated: " + isAuthenticated);
    }, [isAuthenticated]);
    return logInSuccess ? element : navigate("/login")
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Register /> ,
    },
    {
      path: "/login",
      element: <Login /> ,
    },    
    {
      path: "/task",
      element: <PrivateRoot element={ <Task /> } /> ,
      // element: <Task /> ,
      // element: <ListTasks /> ,
    } 
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
