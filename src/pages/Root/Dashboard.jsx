import { FaAd, FaCalendar, FaHome, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { FaCableCar, FaMarsAndVenus, FaPeopleGroup } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { TbBrandBooking } from "react-icons/tb";
import { MdManageHistory } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {

    const [isAdmin] = useAdmin();
    console.log(isAdmin)
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-gray-400">
                <ul className="menu text-lg space-y-2">

                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to={'/dashboard/adminhome'}><FaHome></FaHome>Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/addItems'}><IoMdAddCircle></IoMdAddCircle> Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/manageItems'}><MdManageHistory></MdManageHistory> Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/manageBookings'}><TbBrandBooking></TbBrandBooking> Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/users'}><FaPeopleGroup></FaPeopleGroup> All Users</NavLink>
                            </li>

                        </> :
                            <>
                                <li>
                                    <NavLink to={'/dashboard/userhome'}><FaHome></FaHome>User Home</NavLink>
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
                            </>
                    }


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