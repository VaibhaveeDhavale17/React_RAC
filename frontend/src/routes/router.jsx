import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Signup from "../Components/Signup";
import Login from "../Components/Login";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import CreateItem from "../dashboard/CreateItem";
import ManageItems from "../dashboard/manageItems";
import EditItems from "../dashboard/EditItems";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {
            path:'/',
            element:<Home />
        },
        
        {
            path:'/signup',
            element:<Signup/>
        },
        {
          path:'/login',
          element:<Login/>
        },
      ]
    },

    {
      path:'/dashboard',
      element: <DashboardLayout/>,
      children:[
        {
          path:"/dashboard",
          element:<Dashboard/>
        },
        {
          path:"/dashboard/upload",
          element:<CreateItem/>
        },
        {
          path:"/dashboard/manage",
          element:<ManageItems/>
        },
        {
          path:'/dashboard/edit/:refNumber',
          element:<EditItems/>,
          // loader:({params}) => fetch(`http://localhost:4000/rac/product/${params.refNumber}`)
        }
      ]
    }
  ]);

export default router;