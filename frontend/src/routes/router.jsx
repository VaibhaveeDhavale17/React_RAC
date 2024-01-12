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
import ManageItems from "../dashboard/ManageItems";
import EditItems from "../dashboard/EditItems";
import ManageUsers from "../dashboard/ManageUsers";
import GetAllItems from "../dashboard/GetAllItems";

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
        },
        {
          path:'/dashboard/manageusers',
          element:<ManageUsers/>
        },

        {
          path:'/dashboard/allitems',
          element:<GetAllItems/>
        }
      ]
    }
  ]);

export default router;