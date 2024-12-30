import React from "react";

const Button = ({title,classes}) => {
  return (
    <button className={`mt-4 px-6 py-2 ${classes} border-yellow-600 text-white
    text-sm uppercase font-medium rounded border-b-4 hover:bg-gold-600 transition`}>
     {title}
    </button>
  );
};

export default Button;
