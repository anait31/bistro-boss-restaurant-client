import AboutBistro from "../../components/AboutBistro/AboutBistro";
import OrderSlider from "../../components/OrderSlider/OrderSlider";
import PopularMenu from "../../components/PopularMenu/PopularMenu";
import Slider from "../../components/Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div>
                <OrderSlider></OrderSlider>
                <AboutBistro></AboutBistro>
                <PopularMenu></PopularMenu>
            </div>
        </div>
    );
};

export default Home;