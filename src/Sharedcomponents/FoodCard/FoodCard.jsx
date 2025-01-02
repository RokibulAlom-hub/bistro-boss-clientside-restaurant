import React from "react";
import Button from "../Button/Button";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiossecure from "../../hooks/useAxiossecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const navigate = useNavigate()
  const axiosSecure = useAxiossecure()
  const location = useLocation()
  const {user} = useAuth()
  const [,refetch] = useCart()
  const { image, name, price, recipe, _id } = item;
  const handlecart = (item) => {
    if(user && user?.email) {
      // create cart in database
      const cartInfo ={
        foodId:_id,
        email:user?.email,
        image,
        name
      }
      axiosSecure.post('/carts',cartInfo)
      .then(res => {
        console.log(res.data);
        refetch()
      })
    }
    else{
     navigate('/login',{state:{from: location}})
    }
    // console.log(location);
    
  };
  return (
    <div>
      <div className=" relative p-3 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full p-2" src={image} alt="Shoes" />
          <p className="p-2 bg-black right-6 top-5 text-white absolute ">
            ${price}
          </p>
        </figure>
        <div className="">
          <h2 className="card-title btn" >{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handlecart(item)}>
              <Button title={"Order Now"} classes="bg-black"></Button>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
