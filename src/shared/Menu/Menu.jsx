
const Menu = ({ menu }) => {
    const { price, name, recipe, image } = menu;
    return (
        <div className="flex gap-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="h-20" src={image} alt="" />
            <div>
                <h3 className="text-2xl uppercase">{name}</h3>
                <p >{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default Menu;