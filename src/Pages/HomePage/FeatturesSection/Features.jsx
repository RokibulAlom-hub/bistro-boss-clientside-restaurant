import React from "react";
import SectionTitles from "../../../Sharedcomponents/SharedTiitles/SectionTitles";
import featureImg from "../../../assets/home/featured.jpg";
import "./Features.css";
import Button from "../../../Sharedcomponents/Button/Button";
const Features = () => {
  return (
    <div>
      <div className="relative bg-fixed feature-bg px-10 py-10">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-20"> 
          <SectionTitles
            heading={"From Our Menu"}
            subheading={"check it out"}
            color="text-yellow"
          ></SectionTitles>
        </div>
        <div className="flex  items-center justify-center">
          {/* Content */}
          <div className="z-20">
            {/* Content Container */}
            <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
              {/* Image */}
              <div className="w-1/2">
                <img
                  src={featureImg}
                  alt="Menu Item"
                  className="w-full h-auto rounded shadow-lg"
                />
              </div>

              {/* Description */}
              <div className="w-1/2 text-left">
                <p className="text-sm text-gray-300">March 20, 2023</p>
                <h3 className="text-lg text-white font-semibold mt-1">
                  Where Can I Get Some?
                </h3>
                <p className="text-sm text-gray-200 mt-2">
                  Efficiently embrace clicks-and-mortar e-commerce without go
                  forward e-markets. Authoritatively leverage other's impactful
                  expertise without functional e-business.
                </p>
                <Button></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
