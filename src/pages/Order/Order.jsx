import Cover from "../../shared/Cover/Cover";
import orderCover from "../../assets/shop/banner2.jpg"
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { useState } from "react";
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu/useMenu";
import FoodCard from "../../components/FoodCard/FoodCard";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = ({ bgImage, title, description }) => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menus] = useMenu();
    const soup = menus.filter(item => item.category === "soup");
    const pizza = menus.filter(item => item.category === "pizza");
    const dessert = menus.filter(item => item.category === "dessert");
    const drinks = menus.filter(item => item.category === "drinks");
    const salad = menus.filter(item => item.category === "salad");

    return (
        <div>
            <Helmet>
                <title>Order Food - Bistro Boss Restaurant</title>
            </Helmet>
            <Cover bgImage={orderCover} title="Order Food" description="WOULD YOU LIKE TO TRY A DISH"></Cover>
            <div className="max-w-6xl mx-auto">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <div className="text-center">
                        <TabList>
                            <Tab>SALAD</Tab>
                            <Tab>PIZZA</Tab>
                            <Tab>SOUPS</Tab>
                            <Tab>DESSERTS</Tab>
                            <Tab>DRINKS</Tab>
                        </TabList>
                    </div>
                    <TabPanel>
                        <OrderTab items={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={dessert}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;