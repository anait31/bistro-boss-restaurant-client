import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import RecomentItemCard from "../RecomentItemCard/RecomentItemCard";
import item1 from '../../assets/home/slide1.jpg'
import item2 from '../../assets/home/slide2.jpg'
import item3 from '../../assets/home/slide3.jpg'

const RecomentByChef = () => {
    return (
        <div className="max-w-6xl mx-auto pb-16">
            <SectionTitle heading={"CHEF RECOMMENDS" } subHeading={"Should Try"}></SectionTitle>
            <div className="md:flex md:gap-8 mt-8">
                <RecomentItemCard name={"Caeser Salad"} recipe="Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets." image={item1}></RecomentItemCard>
                <RecomentItemCard name={"Caeser Salad"} recipe="Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets." image={item2}></RecomentItemCard>
                <RecomentItemCard name={"Caeser Salad"} recipe="Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets." image={item3}></RecomentItemCard>
            </div>
        </div>
    );
};

export default RecomentByChef;