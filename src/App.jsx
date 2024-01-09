// import UI from "./UI"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from "./Login && Rogister/Register";
import Login from "./Login && Rogister/Login";
import ListTasks from "./Tasks/ListTasks";


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
      element: <ListTasks /> ,
    },    
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
