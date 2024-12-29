import React, { useEffect, useState } from 'react';
import SectionTitles from '../../../Sharedcomponents/SharedTiitles/SectionTitles';
import axios from 'axios';
import Menucard from '../../../Sharedcomponents/MenuitemCard/Menucard';

const Menu = () => {
    const [menu,setMenu] = useState([])
    useEffect(() =>{
        axios.get('Menu.json')
        .then(res =>{
            const popularItems = res.data.filter(item => item.category === "popular")
            setMenu(popularItems)
        } )
    },[])
    // console.log(menu);
    
    return (
        <div className='my-8'>
            <SectionTitles heading={"From Our Menu"} subheading={"check it out"}>
            </SectionTitles>
            <div className='grid md:grid-cols-2 gap-3'>
                {
                    menu.map(item => <Menucard key={item._id} item={item}></Menucard>)
                }
            </div>
        </div>
    );
};

export default Menu;