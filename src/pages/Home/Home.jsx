import { Helmet } from "react-helmet-async";
import AboutBistro from "../../components/AboutBistro/AboutBistro";
import OrderSlider from "../../components/OrderSlider/OrderSlider";
import PopularMenu from "../../components/PopularMenu/PopularMenu";
import RecomentByChef from "../../components/RecomentByChef/RecomentByChef";
import Slider from "../../components/Slider/Slider";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Bistro Boss Restaurant</title>
            </Helmet>
            <Slider></Slider>
            <div>
                <OrderSlider></OrderSlider>
                <AboutBistro></AboutBistro>
                <PopularMenu></PopularMenu>
                <RecomentByChef></RecomentByChef>
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;