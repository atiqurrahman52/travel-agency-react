import { Image } from "phosphor-react";
import React from "react";
import ladhak from "../../assets/images/inspiration/ladhak.png";
import dubai from "../../assets/images/inspiration/dubai.png";
import sydney from "../../assets/images/inspiration/sydney.png";
import edinburgh from "../../assets/images/inspiration/edinburgh.png";
import kilimanjaro from "../../assets/images/inspiration/kilimanjaro.png";
import miyajima from "../../assets/images/inspiration/miyajima.png";
import Beijing from "../../assets/images/inspiration/beijing.png";

const Inspiration = () => {
  
  const images = [
    {
      i: 0,
      img: ladhak,
      name: "Ladhak",
    },
    {
      i: 1,
      img: dubai,
      name: "Dubai",
    },
    {
      i: 2,
      img: sydney,
      name: "Sydney",
    },
    {
      i: 3,
      img: edinburgh,
      name: "Edinburgh",
    },
    {
      i: 4,
      img: kilimanjaro,
      name: "Kilimanjaro",
    },
    {
      i: 5,
      img: miyajima,
      name: "Miyajima",
    },
    {
      i: 6,
      img: Beijing,
      name: "Beijing",
    },
  ];
  return (
    <div className="mb-[60px] lg:mb-[104px]">
       <h3
        className="text-center font-quentin font-normal md:text-[80px] text-[32px] text-[#D4D4D4] lg:leading-[90px] leading-[48px] mb-[48px]"
      >
        Inspiration
      </h3>
      <div className="container">
        <div className="grid lg:grid-flow-col lg:grid-rows-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 xl:gap-6">
          {images.map(
            (image, i) => (
              <div
                key={i}
                className={`group relative rounded-[16px] overflow-hidden cursor-pointer ${
                  (i === 0 &&
                    "lg:row-span-3 lg:col-span-3 h-[216px] lg:h-[477px]") ||
                  ((i === 1 || i === 4 || i === 5) &&
                    "h-[216px] lg:h-[310px] lg:row-span-2") ||
                  ((i === 2 || i === 3 || i === 6) && "h-[216px] lg:h-[143px]")
                }`}
              >
     
              
                  <img
                    src={image.img}
                    className="group-hover:scale-110 transition duration-1000 w-full h-full object-cover bg-[#0000004D]/20"
                    alt=""
                  />
                  <p className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white font-nunito font-extrabold text-[24px] leading-[30px]">
                   {image.name}
                  </p>
             
              </div>
            )
      
          )}
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
