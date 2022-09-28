import React from 'react';
import '../../css/Destination.css'

const Header = () => {
    return (
       <div className='top-0'>
      
        <div 
          className="destination-bg bg-cover bg-no-repeat bg-center w-full h-[212px]  lg:h-[622px] flex flex-col items-center justify-center gap-[20px] lg:gap-[50px] "
        >
          <p
            className="font-nunito font-extrabold lg:text-[64px] text-[24px] md:mt-0 mt-9 text-[#FFFFFF] text-center lg:leading-[62px] leading-[34px]"
          >
            Inspiration for your <br />
            Next Tour
          </p>
          <p
            className="font-nunito font-semibold text-[16px] text-[#FFFFFF] leading-[20px] text-center"
          >
            Find the best tourist location for your next destination.
          </p>
        </div>

     
        </div>
       
    );
};

export default Header;