import React from "react";
import banner from "../../assets/images/event_banner/desert2.png";
import logo from "../../assets/images/event_banner/Logo.png";

const EventBanner = () => {
  return (
    <div className="mb-[60px] lg:mb-[104px]">
        <div className="container">
      <div className="grid grid-cols-12">
      <div className="col-span-12">
      <div 

       class="bg-cover bg-no-repeat lg:bg-center bg-right rounded-[20px] p-5 ">
        {/* <img src={banner} /> */}
        {/* bg-[url('/src/assets/images/event_banner/desert2.png')] */}
        {/* style="background-image: url('../../assets/images/event_banner/desert2.png');" */}
          <div class="pl-0 md:pl-[20%]">
            <p class="font-nunite font-[200] md:text-left text-center md:text-[52px] text-[24px] leading-[50px] md:mb-[22px] mb-[31px] text-[#4F4F4C]">
              Experience
            </p>
            <h3 class="font-nunito font-medium md:text-[52px] text-[16px] lg:leading-[50px] leading-[32px] md:tracking-[13px] tracking-[10px] md:text-left text-center text-[#4F4F4C]">
              The Anicent Egypt
            </h3>
          </div>
          <img class="mx-auto md:ml-0 bg-black" src={logo} alt="" srcset="" />
        </div>
      </div>
      </div>
     
    </div>
    </div>
  );
};

export default EventBanner;

