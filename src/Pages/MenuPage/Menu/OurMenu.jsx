import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../../Sharedcomponents/Cover/Cover";
import menuimg from "../../../assets/menu/ban01.jpg";
const OurMenu = () => {
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
    </div>
  );
};

export default OurMenu;
