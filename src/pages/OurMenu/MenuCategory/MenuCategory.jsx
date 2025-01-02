import Cover from "../../../shared/Cover/Cover";
import Menu from "../../../shared/Menu/Menu";

const MenuCategory = ({ items, bgImage, description, title }) => {
    return (
        <div className="">
            {title && <Cover bgImage={bgImage} title={title} description={description}></Cover>}
            <div className="md:grid md:grid-cols-2 md:gap-8 mt-8 max-w-6xl mx-auto">
                {
                    items.map(menu => <Menu key={menu._id} menu={menu}></Menu>)
                }
            </div>
            <button>ORDER YOUR FAVOURITE FOOD</button>
        </div>
    );
};

export default MenuCategory;