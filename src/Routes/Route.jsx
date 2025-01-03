import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/HomePage/Home/Home";
import OurMenu from "../Pages/MenuPage/Menu/OurMenu";
import OrderMenu from "../Pages/OrderPage/OrderMenu/OrderMenu";
import Login from "../Pages/AuthenticationPages/Loginpage/Login";
import Register from "../Pages/AuthenticationPages/Register/Register";
import Privateroute from "./Privateroute/Privateroute";
import Demo from "../Pages/PrivateroutePages/demo";
import Dashboard from "../Layouts/Dashboard";
import Mycart from "../Pages/DashboardPage/Mycart/Mycart";

export const router =createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/ourmenu',
                element:<OurMenu></OurMenu>
            },
            {
                path:'/orderMenu/:category',
                element:<OrderMenu></OrderMenu>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'demo',
                element:<Privateroute><Demo></Demo></Privateroute>
            }
        ]
    },
    {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'mycart',
                element:<Mycart></Mycart>
            }
        ]
    }
])