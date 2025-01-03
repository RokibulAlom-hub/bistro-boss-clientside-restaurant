import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";
import { FiShoppingCart } from "react-icons/fi";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const [cart] = useCart()
  const { userLogout, user } = useContext(Authcontext);
  const logout = () => {
    userLogout().then((result) => {
      alert("lgoout success");
    });
  };
  const Navoptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/ourmenu">OurMenu</NavLink>
      </li>
      <li>
        <NavLink to="/orderMenu/salad">OrderMenu</NavLink>
      </li>
      <Link to='/dashboard/mycart' className="btn ">
        <FiShoppingCart />
        <div className="badge badge-secondary">+{cart.length}</div>
      </Link>
    </>
  );
  return (
    <div>
      <div className="navbar max-w-screen-xl mx-auto bg-black text-base-200 fixed z-20 bg-opacity-30">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {Navoptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro-Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Navoptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <p onClick={logout} className="btn bg-yellow-200">
              {" "}
              <Link> Logout</Link>
            </p>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
