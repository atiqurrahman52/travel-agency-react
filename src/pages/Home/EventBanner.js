import React from "react";
import banner from "../../assets/images/event/desert2.png";
import logo from "../../assets/images/event/Logo.png";
import "../../css/EventBanner.css"

const EventBanner = () => {

  return (
    <div className="mb-[60px] lg:mb-[104px]">
        <div className="container">

      <div className="grid grid-cols-12">
      <div className="col-span-12">
      <div  
      className="event-banner bg-cover bg-no-repeat lg:bg-center bg-right rounded-[20px] p-5 "
      >
          <div className="pl-0 md:pl-[20%]">
            <p className="font-nunite font-[200] md:text-left text-center md:text-[52px] text-[24px] leading-[50px] md:mb-[22px] mb-[31px] text-[#4F4F4C]">
              Experience
            </p>
            <h3 className="font-nunito font-medium md:text-[52px] text-[16px] lg:leading-[50px] leading-[32px] md:tracking-[13px] tracking-[10px] md:text-left text-center text-[#4F4F4C]">
              The Anicent Egypt
            </h3>
          </div>
          <img className="mx-auto md:ml-0" src={logo} alt="" srcSet="" />
        </div>
      </div>

      </div>
    </div>
    </div>
  );
};

export default EventBanner;

