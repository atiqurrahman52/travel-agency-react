import React from "react";
import Slider from "react-slick";

import image1 from "../../assets/images/gallery/image-1.png";
import image2 from "../../assets/images/gallery/image-2.png";
import image3 from "../../assets/images/gallery/image-3.png";

const galleries = [
  {
    id: 0,
    country: "Sydney",
    img: [image1, image2, image3, image1],
    details: "Incredible Sydney, Sydney",
  },
];

const Sydney = () => {
  var settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: "linear",
    autoplay: true,
  };
  return (
    <div className="pt-">
     
        {galleries.map((items) => (
          <div className="border rounded-lg p-5 col-span-1">
            <div class="flex items-center gap-2 mb-[24px]">
              <span class="w-[10px] h-[10px] rounded-full bg-[#F30D60]"></span>
              <p class="font-nunito font-extrabold lg:text-[16px] text-[14px] text-[#393E50] leading-[20px]">
                {items.country}
              </p>
            </div>

            <p class="font-nunito font-extrabold lg:text-[16px] text-[14px] text-[#393E50] leading-[20px] mb-[30px]">
              {items.details}
            </p>

            <Slider {...settings}>
              {items.img.map((item) => (
                <div class="mr-2">
                  <img class="w-full h-full" src={item} alt="" />
                </div>
              ))}
            </Slider>
          </div>
        ))}
    
    </div>
  );
};

export default Sydney;
