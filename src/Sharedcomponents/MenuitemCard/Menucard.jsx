import React from "react";

const Menucard = ({item}) => {
    // console.log(item);
    const{image,name,price,recipe} = item
  return (
    <div>
      <div className="flex items-center gap-4 p-4 bg-white border-b border-gray-200">
        {/* Image Circle */}
        <div>
            <img className="w-14 h-14" style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <div className="flex justify-between items-center">
            {/* Title */}
            <h3 className="  uppercase tracking-widest">
              {name} --------
            </h3>
            {/* Price */}
            <span className="text-lg font-medium text-gold-600">${price}</span>
          </div>
          {/* Description */}
          <p className="text-sm text-gray-600 mt-1">
            {recipe}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menucard;
