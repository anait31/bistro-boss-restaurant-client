import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Root = () => {
    const location = useLocation();
    const loginNoHeaderFooter = location.pathname.includes('login')
    const registerNoHeaderFooter = location.pathname.includes('register')
    return (
        <div>
            {(loginNoHeaderFooter || registerNoHeaderFooter) || <Header></Header>}
            <div className="min-h-[calc(100vh-361px)]">
                <Outlet></Outlet>
            </div>
            {(loginNoHeaderFooter || registerNoHeaderFooter) || <Footer></Footer>}
        </div>
    );
};

export default Root;