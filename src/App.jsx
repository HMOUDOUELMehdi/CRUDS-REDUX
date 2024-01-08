// import UI from "./UI"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from "./Login && Rogister/Register";
import Login from "./Login && Rogister/Login";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Register /> ,
    },
    {
      path: "/Login",
      element: <Login /> ,
    },    
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
