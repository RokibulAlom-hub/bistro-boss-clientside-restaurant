import { FaCalendar, FaHistory, FaHome } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
const Fixedmenu = () => {
  return (
    <div>
      <div>
        <ul className="space-y-2 p-5">
          <NavLink className="text-black flex gap-2">
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
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Fixedmenu;
