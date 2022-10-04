import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { MapPin } from "phosphor-react";
import Slider from "react-slick";
import { asiaSlider } from "../../data/home/asiaData";


const Asia = () => {
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
        <h2 className="text-center font-quentin font-normal md:text-[80px] text-[32px] text-[#D4D4D4] md:leading-[90px] leading-[48px] md:mb-[40px] mb-[30px]">
          {" "}
          Asia{" "}
        </h2>

        <Slider {...settings}>
          {asiaSlider.map((asia) => (
            <div key={asia.id} className="relative gap-x-4">
              <div className="mx-2">
                <img src={asia.img} className="w-full" alt="" />
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
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Asia;
