import Cover from "../../shared/Cover/Cover";
import bgImage from '../../assets/menu/banner3.jpg'
import desserts from '../../assets/menu/dessert-bg.jpeg'
import pizza from '../../assets/menu/pizza-bg.jpg'
import salad from '../../assets/menu/salad-bg.jpg'
import soup from '../../assets/menu/soup-bg.jpg'
import PopularMenu from "../../components/PopularMenu/PopularMenu";
import useMenu from "../../hooks/useMenu/useMenu";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
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
            <Cover bgImage={bgImage} title={"Our Menu"} description={"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}></Cover>
            <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} bgImage={desserts} title={"Desserts"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
            <MenuCategory items={pizza} bgImage={desserts} title={"Pizza"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
            <MenuCategory items={salad} bgImage={desserts} title={"Salads"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
            <MenuCategory items={soup} bgImage={desserts} title={"Soups"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
            <MenuCategory items={pizza} bgImage={desserts} title={"Pizza"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
        </div>
    );
};

export default OurMenu;