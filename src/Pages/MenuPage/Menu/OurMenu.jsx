import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../../Sharedcomponents/Cover/Cover";
import menuimg from "../../../assets/menu/ban01.jpg";
import dessertImg from "../../../assets/menu/ban02.jpeg";
import pizzaImg from "../../../assets/menu/ban04.jpg";
import Saladimg from "../../../assets/menu/ban03.jpg";
import Soupimg from "../../../assets/menu/ban05.jpg";
import useMenudata from "../../../hooks/useMenudata";
import MenuCategory from "../../../Sharedcomponents/Menucategory/MenuCategory";
import SectionTitles from "../../../Sharedcomponents/SharedTiitles/SectionTitles";
const OurMenu = () => {
  const [menu] = useMenudata();
  const offered = menu.filter(item => item.category === "offered")
  const desserts = menu.filter(item => item.category === "dessert")
  const pizzas = menu.filter(item => item.category === "pizza")
  const salads = menu.filter(item => item.category === "salad")
  const Soups = menu.filter(item => item.category === "soup")
  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | OurMenu</title>
      </Helmet>
      <Cover
        img={menuimg}
        title={"Our Menu"}
        description={
          "Dramatically evisculate magnetic partnerships via orthogonal markets. Intrinsicly optimize front-end scenarios through corporate portals. Authoritatively actualize."
        }
      ></Cover>
      {/* this is for todays offer */}
      <SectionTitles heading={'Todays Offer'} subheading={'Dont Miss'}></SectionTitles>
      <MenuCategory items={offered}></MenuCategory>
      {/* this is for dessert */}
      <MenuCategory items={desserts} itemsImg={dessertImg} title={'Desserts'}></MenuCategory>
      {/* this is for pizza  */}
      <MenuCategory items={pizzas} itemsImg={pizzaImg} title={'Pizzas'}></MenuCategory>
      {/* this is for salad */}
      <MenuCategory items={salads} itemsImg={Saladimg} title={'Salads'}></MenuCategory>
      {/* this is for soup */}
      <MenuCategory items={Soups} itemsImg={Soupimg} title={'Soups'}></MenuCategory>
    </div>
  );
};

export default OurMenu;
