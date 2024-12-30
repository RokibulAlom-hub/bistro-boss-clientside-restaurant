import React from 'react';
import FoodCard from '../../../Sharedcomponents/FoodCard/FoodCard';

const OrderCategory = ({item}) => {
    return (
        <div className='grid md:grid-cols-2 gap-3 my-3'>
            {
                item.map(single => <FoodCard key={single._id} item={single}></FoodCard>)
            }
        </div>
    );
};

export default OrderCategory;