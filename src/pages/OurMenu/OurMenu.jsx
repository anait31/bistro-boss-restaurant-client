import Cover from "../../shared/Cover/Cover";
import bgImage from '../../assets/menu/banner3.jpg'
import desserts from '../../assets/menu/dessert-bg.jpeg'
import pizzas from '../../assets/menu/pizza-bg.jpg'
import salads from '../../assets/menu/salad-bg.jpg'
import soups from '../../assets/menu/soup-bg.jpg'
import PopularMenu from "../../components/PopularMenu/PopularMenu";
import useMenu from "../../hooks/useMenu/useMenu";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const OurMenu = () => {
    const [menus] = useMenu();
    const offered = menus.filter(item => item.category === "offered");
    const soup = menus.filter(item => item.category === "soup");
    const pizza = menus.filter(item => item.category === "pizza");
    const dessert = menus.filter(item => item.category === "dessert");
    const drinks = menus.filter(item => item.category === "drinks");
    const salad = menus.filter(item => item.category === "salad");
    return (
        <div>
            <Helmet>
                <title>Our Menu - Bistro Boss Restaurant</title>
            </Helmet>
            <Cover bgImage={bgImage} title={"Our Menu"} description={"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}></Cover>
            <div className="py-12">
                <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></SectionTitle>
                <MenuCategory items={offered}></MenuCategory>
            </div>
            <div className="space-y-12">
                <MenuCategory items={dessert} bgImage={desserts} title={"dessert"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
                <MenuCategory items={pizza} bgImage={pizzas} title={"pizza"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
                <MenuCategory items={salad} bgImage={salads} title={"salads"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
                <MenuCategory items={soup} bgImage={soups} title={"soups"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
                <div className="pb-12">
                    <MenuCategory items={drinks} bgImage={desserts} title={"drinks"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
                </div>
            </div>
        </div>
    );
};

export default OurMenu;