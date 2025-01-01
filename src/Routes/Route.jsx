import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/HomePage/Home/Home";
import OurMenu from "../Pages/MenuPage/Menu/OurMenu";
import OrderMenu from "../Pages/OrderPage/OrderMenu/OrderMenu";
import Login from "../Pages/AuthenticationPages/Loginpage/Login";

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
            }
        ]
    },
])