import React from "react";
import Menucard from "../MenuitemCard/Menucard";
import Cover from "../Cover/Cover";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const MenuCategory = ({ items, itemsImg, title }) => {
  return (
    <div>
      {title && <Cover img={itemsImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-3 my-7">
        {items.map((item) => (
          <Menucard key={item._id} item={item}></Menucard>
        ))}
      </div>
      <Link to={`/orderMenu/${title}`}> <Button title={"Order Now"} classes="bg-black"></Button> </Link>
    </div>
  );
};

export default MenuCategory;
