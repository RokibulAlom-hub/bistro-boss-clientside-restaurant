import React from "react";
import Banner from "../Banner/Banner";
import Slider from "../Slider/Slider";
import Menu from "../MenuItems/Menu";
import Features from "../FeatturesSection/Features";
import Testomonial from "../Testomonial/Testomonial";
import { Helmet } from "react-helmet-async";
import RoleBasedUI from "../../RoleBasedUI";

const Home = () => {
  return (
    <div className="space-y-6">
      <Helmet>
        <title>Bistro-Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Slider></Slider>
      <RoleBasedUI></RoleBasedUI>
      <Menu></Menu>
      <Features></Features>
      <Testomonial></Testomonial>
    </div>
  );
};

export default Home;
