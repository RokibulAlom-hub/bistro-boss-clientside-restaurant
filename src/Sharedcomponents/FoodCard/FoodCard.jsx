import React from "react";
import Button from "../Button/Button";

const FoodCard = ({item}) => {
    const{image,name,price,recipe} = item

  return (
    <div>
      <div className=" relative p-3 bg-base-100 shadow-xl">
        <figure>
          <img
          className="w-full p-2"
            src={image}
            alt="Shoes"
          />
          <p className="p-2 bg-black right-6 top-5 text-white absolute ">${price}</p>
        </figure>
        <div className="">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <Button title={"Order Now"} classes="bg-black"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
