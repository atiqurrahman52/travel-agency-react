import React from "react";
import colombo from "../../assets/images/asia/colombo.png";
import newDelhi from "../../assets/images/asia/newDelhi.png";
import coxsBazar from "../../assets/images/asia/coxsBazar.png";
import zanzibar from "../../assets/images/asia/zanzibar.png";
import mauritius from "../../assets/images/asia/mauritius.png";
import madagascar from "../../assets/images/asia/madagascar.png";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { MapPin } from "phosphor-react";
import Slider from "react-slick";

const asiaSlider = [
  {
    id: 0,
    city: "Colombo",
    details: "Tropical Sri-lanka || 6Day-5Night",
    price: "$59000.00",
    img: colombo,
  },
  {
    id: 1,
    city: "Coxs Bazar",
    details: "Generous Cox’s Bazar | 6Day-5Night",
    price: "$59000.00",
    img: coxsBazar,
  },
  {
    id: 2,
    city: "New Delhi",
    details: "Manali Jeep Safari | 12Day-11Night",
    price: "$59000.00",
    img: newDelhi,
  },
  {
    id: 3,
    city: "Madagascar",
    details: "Dreaming Madagascar | 6Day-5Night",
    price: "$59000.00",
    img: madagascar,
  },
  {
    id: 4,
    city: "Mauritius",
    details: "Calming Mauritius | 6Day-5Night",
    price: "$59000.00",
    img: mauritius,
  },
  {
    id: 5,
    city: "Zanzibar",
    details: "Beautiful Zanzibar || 6Day-5Night",
    price: "$59000.00",
    img: zanzibar,
  },
  {
    id: 6,
    city: "Madagascar",
    details: "Dreaming Madagascar | 6Day-5Night",
    price: "$59000.00",
    img: madagascar,
  },
];

const Africa = () => {
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
        <h2 className="text-center font-quentin font-normal md:text-[80px] text-[32px] text-[#D4D4D4] md:leading-[90px] leading-[48px] md:mb-[40px] mb-[30px]"> Africa</h2>

    
        <Slider {...settings}  >

          {
            asiaSlider.map(asia => 
                <div key={asia.id} className="relative gap-x-4">
                    <div className="mx-2">
                    <img  src={asia.img} className="w-full" alt=""/>
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

export default Africa;
