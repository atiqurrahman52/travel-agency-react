import React from "react";
import { MapPin } from "phosphor-react";
import Slider from "react-slick";
import { europeSlider } from "../../data/home/europeData";



const Europe = () => {
    const settings = {
      infinite: true,
      speed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      centerMode: true,
      centerPadding: "60px",
      arrows: false,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            centerPadding: "20px",
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            centerPadding: "20px",
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          },
        },
      ],
      };


  return (
    <div className="mb-[60px] lg:mb-[104px]">
        <div className="container ">
        <h2 className="text-center font-quentin font-normal text-[32px] md:text-[80px]
          md:leading-[90px] leading-[48px] mb-10 md:mb-16 text-transparent bg-clip-text bg-gradient-to-b from-[#F43B47] to-[#453A94]"> Europe </h2>

    
        <Slider {...settings}  >

          {
            europeSlider.map(asia => 
                <div key={asia.id} className="relative gap-x-4">
                    <div className="mx-2">
                    <img  src={asia.img} className="w-full" alt="" />
                    </div>
                <div className="flex items-center gap-2 absolute bottom-24 left-5 text-white">
                <MapPin size={16} />
                <p>{asia.city}</p>

                </div>
                <div className="lg:text-[#000000]  text-[16px] font-nunito font-semibold leading-[20px] mt-[24px]">
                    <p>{asia.details}</p>
                    <p>{asia.price}</p>
                </div>
                </div>
                )
          }
         
          
        </Slider>

    

     
      </div>
    </div>
  
  );
};

export default Europe;
