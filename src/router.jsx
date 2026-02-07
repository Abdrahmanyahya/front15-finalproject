import { Children } from "react";
import Mainlayout from "./layout/Mainlayout";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Cart from "./pages/cart/Cart";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[

       {
        index:true,
        element:<Home></Home>,
       },
       {
        path:"login",
        element:<Login></Login>,
       },
       {
        path:"register",
        element:<Register></Register>,
       },
       {
        path:"cart",
        element:<Cart></Cart>,
       },




    ]
  },
]);


export default router