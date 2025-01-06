import { FaCalendar, FaHistory, FaHome, FaMailBulk } from "react-icons/fa";
import { FaBook, FaBreadSlice, FaCartFlatbed, FaList, FaPeopleRobbery, FaShop, FaSpoon } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
const Fixedmenu = () => {
  const isAdmin = true;
  return (
    <div>
      <div>
        <ul className="space-y-2 p-5">
          {isAdmin ? (
            <>
              <NavLink to="/" className="text-black flex gap-2">
                <FaHome />
                Admin Home
              </NavLink>
              <NavLink className="text-black flex gap-2">
                <FaSpoon />
                Add Item
              </NavLink>
              <NavLink className="text-black flex gap-2">
                <FaList />
                Manage Items
              </NavLink>
              <NavLink className="text-black flex gap-2">
                <FaBook />
                Manage Bookings
              </NavLink>
              <NavLink to='users' className="text-black flex gap-2">
                <FaPeopleRobbery />
                All Users
              </NavLink>
            </>
          ) : (
            <>
               <NavLink to='/' className="text-black flex gap-2">
            <FaHome />
            User Home
          </NavLink>
          <NavLink className="text-black flex gap-2">
            <FaCalendar />
            Reservation
          </NavLink>
          <NavLink className="text-black flex gap-2">
            <FaHistory/>
            History
          </NavLink>
          <NavLink className="text-black flex gap-2">
            <FaCartFlatbed />
            My Cart
          </NavLink></>
          )}
          <div className="divider"></div>
          <NavLink className="text-black flex gap-2">
            <FaHome />
            Home
          </NavLink>
          <NavLink to="/" className="text-black flex gap-2">
            <FaBreadSlice />
            Menu
          </NavLink>
          <NavLink className="text-black flex gap-2">
            <FaShop />
            Shop
          </NavLink>
          <NavLink className="text-black flex gap-2">
            <FaMailBulk />
            Contact
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Fixedmenu;
