import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";
import CheckOut from "../pages/CheckOut/CheckOut";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element:<Home></Home> ,
        },
        {
          path: "/login",
          element:<Login></Login> ,
        },
        {
          path: "/signUp",
          element:<SignUp></SignUp> ,
        },

        {
          path:'checkout/:id',
          element:<PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },

        {
          path:'/bookings',
          element:<PrivateRoutes><Bookings></Bookings></PrivateRoutes>

        },
        {
          path: "/about",
          element:<AboutUs></AboutUs> ,
        },

        {
          path: "/contact",
          element:<Contact></Contact> ,
        },



       
        
      ],
    },
  ]);
  
  export default router