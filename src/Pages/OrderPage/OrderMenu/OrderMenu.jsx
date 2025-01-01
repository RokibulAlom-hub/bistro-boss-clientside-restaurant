import React, { useState } from "react";
import Cover from "../../../Sharedcomponents/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenudata from "../../../hooks/useMenudata";
import OrderCategory from "../Ordercategory/OrderCategory";
import { useParams } from "react-router-dom";
const OrderMenu = () => {
  const categories = ["dessert", "pizza", "salad", "soup", "offered"];
  const { category } = useParams();
  const iniatialIndex = categories.indexOf(category);
  const [tabIndex, setTabindex] = useState(iniatialIndex);
  const [menu] = useMenudata();
  console.log(menu);

  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const Soups = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Cover img={orderImg} title={"Order Menu"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
        <TabList>
          <Tab>Dessert</Tab>
          <Tab>Pizza</Tab>
          <Tab>Salad</Tab>
          <Tab>Soup</Tab>
          <Tab>offered</Tab>
        </TabList>
        <TabPanel>
          <OrderCategory item={desserts}></OrderCategory>
        </TabPanel>
        <TabPanel>
          <OrderCategory item={pizzas}></OrderCategory>
        </TabPanel>
        <TabPanel>
          <OrderCategory item={salads}></OrderCategory>
        </TabPanel>
        <TabPanel>
          <OrderCategory item={Soups}></OrderCategory>
        </TabPanel>
        <TabPanel>
          <OrderCategory item={offered}></OrderCategory>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderMenu;
