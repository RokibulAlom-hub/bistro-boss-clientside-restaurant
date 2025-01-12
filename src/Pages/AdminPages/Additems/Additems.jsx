import React from "react";
import SectionTitles from "../../../Sharedcomponents/SharedTiitles/SectionTitles";
import { useForm } from "react-hook-form";
import usePublicaxios from "../../../hooks/usePublicaxios";
import useAxiosSecure from "../../../hooks/useAxiossecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Additems = () => {
  const axiosPublic = usePublicaxios();
  const axiosSecure = useAxiosSecure()
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    // console.log(data);
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile,{
        headers:{'content-type' : 'multipart/form-data'}
    });
    const itemData = {
       name:data.name,
       image:res.data.data.display_url,
       price:parseFloat(data.price),
       category:data.category,
       recipe: data.recipe
    }
    const menuRes = await axiosSecure.post('/allmenus',itemData)
    console.log(menuRes.data);
    console.log('withImage url',res.data);

  };
  

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-md shadow-md">
      {/* Section Titles */}
      <div className="mb-6">
        <SectionTitles heading="ADD AN ITEM" subheading="---What's new?---" />
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-md shadow-lg space-y-4"
      >
        {/* Recipe Name */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Recipe name*
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Recipe name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
          />
        </div>

        {/* Category and Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Category */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Category*
            </label>
            <select
              {...register("category", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
            >
              <option value="salad">Salad</option>
              <option value="soup">Soup</option>
              <option value="pizza">Pizza</option>
              <option value="dessert">Dessert</option>
              <option value="drinks">Drinks</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Price*
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Price"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
            />
          </div>
        </div>

        {/* Recipe Details */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Recipe Details*
          </label>
          <textarea
            {...register("recipe", { required: true })}
            placeholder="Recipe Details"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
          ></textarea>
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Choose File
          </label>
          <input
            type="file"
            {...register("image")}
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-600 hover:file:bg-yellow-100"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className=" bg-gold-600 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
          >
            Add Item 🍴
          </button>
        </div>
      </form>
    </div>
  );
};

export default Additems;
