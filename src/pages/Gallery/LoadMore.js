import React from 'react';
import { Link } from 'react-router-dom';

const LoadMore = () => {
    return (
        <div className='flex justify-center items-center md:mb-[118px] mb-[80px]'>
            <Link to='#' className='font-nunito font-[600] text-[14px] text-[#FFFFFF] bg-[#D00338E5] px-[61px] py-[14px] rounded-[5px] md:mt-[74px] mt-[44px]'>
            Load More
            </Link>
            
        </div>
    );
};

export default LoadMore;