// import UI from "./UI"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from "./Login && Rogister/Register";
import Login from "./Login && Rogister/Login";
import ListTasks from "./Tasks/ListTasks";
import Task from "./Tasks/Task";


function App() {

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
      element: <Task /> ,
      // element: <ListTasks /> ,
    },   
    {
      path: "/task1",
      element: <ListTasks /> ,
      // element: <ListTasks /> ,
    },    
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
