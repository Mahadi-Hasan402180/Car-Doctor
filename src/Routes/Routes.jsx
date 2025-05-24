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
import Appointment from "../pages/Appointment/Appointment";
import Appointments from "../Appointments/Appointments";
import UpdateAppo from "../Appointments/UpdateAppo";
import Products from "../Products/Products";
import CarDamageUpload from "../pages/CarDamageUpload/CarDamageUpload";





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
          loader:({params})=>fetch(`https://car-doctor-server-one-flame.vercel.app/services/${params.id}`)
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
          path: "/product",
          element:<Products></Products> ,
        },


        {
          path: "/contact",
          element:<Contact></Contact> ,
        },

        {
          path: "/damage",
          element:<CarDamageUpload></CarDamageUpload> ,
        },

        {
          path: "/appointment",
          element:<PrivateRoutes><Appointment></Appointment></PrivateRoutes> ,
        },

       

        {
          path: "/appointments",
          element:<PrivateRoutes><Appointments></Appointments></PrivateRoutes>,
          loader:({params})=>fetch(`https://car-doctor-server-one-flame.vercel.app/appointment/${params.id}`)
        },

        {
          path:'/update/:id',
          element:<UpdateAppo></UpdateAppo>,
          loader:({params})=>fetch(`https://car-doctor-server-one-flame.vercel.app/appointments/${params.id}`)
        }

       


       
        
      ],
    },
  ]);
  
  export default router