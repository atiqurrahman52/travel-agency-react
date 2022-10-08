import { hover } from "@testing-library/user-event/dist/hover";
import React, { useEffect } from "react";
import Slider from "react-slick";
import { galleries } from "../../data/gallery/galleryData";



const Galleries = () => {
 
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 1000,
    arrows: false,
    autoplay: true,
    // pauseOnHover: true
    // centerPadding: "20px",
  };

  return (
    <div className="container pt-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-[80px] mt-[50px]">
        {galleries.map((items) => (
          <div key={items.id} className="border rounded-lg p-5 col-span-1">
            <div className="flex items-center gap-2 mb-[24px]">
              <span className="w-[10px] h-[10px] rounded-full bg-[#F30D60]"></span>
              <p className="font-nunito font-extrabold lg:text-[16px] text-[14px] text-[#393E50] leading-[20px]">
                {items.country}
              </p>
            </div>

            <p className="font-nunito font-extrabold lg:text-[16px] text-[14px] text-[#393E50] leading-[20px] mb-[30px]">
              {items.details}
            </p>

            <Slider {...settings} className="slider-item">
              {items.img.map((item) => (
                <div key={item.id} className="px-1">
                  <img className="w-full h-full" src={item} alt="" />
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galleries;
