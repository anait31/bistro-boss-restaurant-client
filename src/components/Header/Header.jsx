import { Link } from 'react-router-dom';
import logo from '../../assets/others/mainLogo.png'
import { useContext } from 'react';
import { authContext } from '../../providers/AuthProviders';
import userCart from '../../hooks/userCart';
const Header = () => {

    const { user, logoutUser } = useContext(authContext);
    const [cart] = userCart()

    const handleLogout = () => {
        logoutUser()
            .then(() => {

            })
            .catch(error => {
                console.log(error)
            })
    }

    const links = <>
        <li><Link to={'/'}>HOME</Link></li>
        <li><Link to={'/our-menu'}>OUR MENU</Link></li>
        <li><Link to={'/order/salad'}>ORDER FOOD</Link></li>
        <li><a>CONTACT US</a></li>
        {/* <li><Link to={'/login'}>LOGIN</Link></li> */}
        <li><Link to={'/register'}>REGISTER</Link></li>
        <li><a>DASHBOARD</a></li>
        <li><button className="">
            CART
            <div className="badge badge-secondary">+{cart.length}</div>
        </button></li>
    </>
    return (
        <div className='text-white fixed bg-black opacity-45 z-10 w-full'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <img className='h-12' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <button onClick={handleLogout}>LOGOUT</button> :
                        <Link to={'/login'}>LOGIN</Link>}
                </div>
            </div>
        </div>
    );
};

export default Header;