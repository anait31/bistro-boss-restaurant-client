import AboutBistro from "../../components/AboutBistro/AboutBistro";
import OrderSlider from "../../components/OrderSlider/OrderSlider";
import PopularMenu from "../../components/PopularMenu/PopularMenu";
import RecomentByChef from "../../components/RecomentByChef/RecomentByChef";
import Slider from "../../components/Slider/Slider";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
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