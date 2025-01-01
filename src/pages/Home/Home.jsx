import AboutBistro from "../../components/AboutBistro/AboutBistro";
import OrderSlider from "../../components/OrderSlider/OrderSlider";
import PopularMenu from "../../components/PopularMenu/PopularMenu";
import RecomentByChef from "../../components/RecomentByChef/RecomentByChef";
import Slider from "../../components/Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div>
                <OrderSlider></OrderSlider>
                <AboutBistro></AboutBistro>
                <PopularMenu></PopularMenu>
                <RecomentByChef></RecomentByChef>
            </div>
        </div>
    );
};

export default Home;