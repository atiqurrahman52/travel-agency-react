import React from "react";
import banner from "../../assets/images/event/desert2.png";
import logo from "../../assets/images/event/Logo.png";
import "../../css/EventBanner.css"

const EventBanner = () => {

  return (
    // <div className="mb-[30px] lg:mb-[44px] mt-16 md:mt-32">
    //     <div className="container">

    //   <div className="grid grid-cols-12">
    //   <div className="col-span-12 ">
    //   <div  
    //   className="event-banner bg-cover bg-no-repeat lg:bg-center bg-right rounded-[20px] h-[324px]"
    //   >
    //       <div className="pl-0 md:pl-[20%]">
    //       <div className="">
    //         <h3 className="font-nunite font-[200] absolute w-[115px] md:w-[248px] h-[50px] left-[84px] md:left-[300px] top-[6px] md:top-[59px]  text-[24px] md:text-[52px]  leading-[50px] mb-[31px] md:mb-[22px]  text-[#4F4F4C]">
    //           Experience
    //         </h3>
    //         <h3 className="font-nunito font-medium absolute text-[16px] md:text-[52px] w-[288px] md:w-[643px] h-[64px] md:h-[50px] left-0  md:left-[300px] top-[87px] md:top-[131px]  leading-8 md:leading-[50px] tracking-[10px]  md:tracking-[13px]  text-[#4F4F4C]">
    //           The Anicent Egypt
    //         </h3>
    //         <img className="absolute w-[83px] md:w-[126px] h-[34px] md:h-[50px] left-0 top-[260px]" src={logo} alt="" />
    //       </div>
    //       <img className="mx-auto md:ml-0" src={logo} alt="" />
          
    //     </div>
    //   </div>

    //   </div>
    // </div>
    // </div>
    // </div>

    <div className="mb-[30px] lg:mb-[44px] mt-16 md:mt-32">
    <div className="container">

  <div className="grid grid-cols-12">
  <div className="col-span-12">
  <div  
  className="event-banner bg-cover bg-no-repeat lg:bg-center bg-right rounded-[20px] p-0 md:p-9"
  >
      <div className="pl-0 md:pl-[20%]">
        <p className="font-nunite font-[200] md:text-left text-center md:text-[52px] text-[24px] leading-[50px] md:mb-[22px] mb-[15px] text-[#4F4F4C]">
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

