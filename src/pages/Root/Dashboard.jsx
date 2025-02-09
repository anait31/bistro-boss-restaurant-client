import { FaAd, FaCalendar, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaCableCar, FaMarsAndVenus } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

    const isAdmin = true;

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-gray-400">
                <ul className="menu text-[20px] space-y-2">
                    <li>
                        <NavLink to={'/dashboard/userhome'}><FaHome></FaHome> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/cart'}><FaShoppingCart></FaShoppingCart> My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/reservation'}><FaCalendar></FaCalendar> Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/reviews'}><FaAd></FaAd>Add Reviews</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/bookings'}><FaCalendar></FaCalendar> My Bookings</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to={'/'}><FaHome></FaHome> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}><FaSearch></FaSearch> Menu</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;