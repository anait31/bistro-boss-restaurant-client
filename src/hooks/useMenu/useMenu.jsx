import { useEffect, useState } from "react";

const useMenu = () => {

    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://bistro-boss-restaurant-server-iota.vercel.app/menu')
            .then(res => res.json())
            .then(data => {
                setMenus(data);
                setLoading(false);
            })
    }, [])

    return [menus, loading]
};

export default useMenu;