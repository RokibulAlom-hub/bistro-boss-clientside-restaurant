import React from 'react';

const SectionTitles = ({heading,subheading,headingClassName = ""}) => {
    return (
        <div className='md:w-4/12 mx-auto my-8 '>
            <p className='text-yellow-700 mb-2 text-center'>---{subheading}---</p>
            <h1 className={`font-bold uppercase  text-3xl text-center border-y-4 py-3${headingClassName}`}>{heading}</h1>
        </div>
    );
};

export default SectionTitles;