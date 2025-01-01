import { useEffect, useState } from "react";
import Menu from "../../shared/Menu/Menu";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";

const PopularMenu = () => {
    const [menus, setMenus] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularMenus = data.filter(popularmenu => popularmenu.category === 'popular');
                setMenus(popularMenus);
            })
    }, [])
    return (
        <div className="max-w-6xl mx-auto py-16">
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"}></SectionTitle>
            <div className="md:grid md:grid-cols-2 md:gap-8 mt-8">
                {
                    menus.map(menu => <Menu key={menu._id} menu={menu}></Menu>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;