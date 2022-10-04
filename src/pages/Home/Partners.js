import React from "react";
import Slider from "react-slick";
import { partners } from "../../data/home/partnersData";


const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 1500,
    slidesToShow: 8,
    autoplay: true,
    arrows: false,
    rows: 2,
    speed: 8000,
    autoplaySpeed: 150,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  return (
    <div className="mb-[60px] lg:mb-[94px]">
      <div className="container">
        <div className="text-center">
          <h3 className="font-nunito font-extrabold  lg:text-[48px] text-[24px] text-primary lg:leading-[56px] leading-[40px] md:mb-[20px] mb-[14px]">
            Our Partners
          </h3>
          <p className="font-nunito text-center font-[600] text-tertiary text-[16px] leading-[20px] md:mb-[60px] mb-[40px]">
            We team up with the best to give you an unmatchable experience
          </p>
        </div>

        <Slider {...settings}>
          {partners.map((partner) => (
            <div key={partner.id}>
              <div>
                <img
                  className="grayscale-[100%] hover:grayscale-[0%] lg:w-[100px] w-[70px] lg:h-[50px] h-[20px] object-contain mx-auto my-2"
                  src={partner.logo}
                  alt=""
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
