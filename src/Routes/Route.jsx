import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/HomePage/Home/Home";
import OurMenu from "../Pages/MenuPage/Menu/OurMenu";
import OrderMenu from "../Pages/OrderPage/OrderMenu/OrderMenu";
import Login from "../Pages/AuthenticationPages/Loginpage/Login";
import Register from "../Pages/AuthenticationPages/Register/Register";
import Privateroute from "./Privateroute/Privateroute";
import Dashboard from "../Layouts/Dashboard";
import Mycart from "../Pages/DashboardPage/Mycart/Mycart";
import Allusers from "../Pages/DashboardPage/Allusers/Allusers";
import Adminroute from "./Adminroute/Adminroute";
import Additems from "../Pages/AdminPages/Additems/Additems";
import ManageItems from "../Pages/AdminPages/Manageitems/ManageItems";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ourmenu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/orderMenu/:category",
        element: <OrderMenu></OrderMenu>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
 
    ],
  },
  {
    path: "dashboard",
    element: (
      <Privateroute>
        <Dashboard></Dashboard>
      </Privateroute>
    ),
    children: [
      // users route
      {
        path: "mycart",
        element: <Mycart></Mycart>,
      },
      // admin routes
      {
        path: "additems",
        element: (
          <Adminroute>
            <Additems></Additems>
          </Adminroute>
        ),
      },
      {
        path: "users",
        element: <Adminroute>
            <Allusers></Allusers>
        </Adminroute>,
      },
      {
        path: "manageItems",
        element: <Adminroute>
            <ManageItems></ManageItems>
        </Adminroute>,
      },
    ],
  },
]);
