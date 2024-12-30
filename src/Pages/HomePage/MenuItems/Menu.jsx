import React, { useEffect, useState } from 'react';
import SectionTitles from '../../../Sharedcomponents/SharedTiitles/SectionTitles';
import axios from 'axios';
import Menucard from '../../../Sharedcomponents/MenuitemCard/Menucard';
import useMenudata from '../../../hooks/useMenudata';

const Menu = () => {
    const [menu] = useMenudata();
    // console.log(menu);
    const popular = menu.filter(item => item.category === "popular")
    // console.log(popular);
    
    return (
        <div className='my-8'>
            <SectionTitles heading={"From Our Menu"} subheading={"check it out"}>
            </SectionTitles>
            <div className='grid md:grid-cols-2 gap-3'>
                {
                    popular.map(item => <Menucard key={item._id} item={item}></Menucard>)
                }
            </div>
        </div>
    );
};

export default Menu;