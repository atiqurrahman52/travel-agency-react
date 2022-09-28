import { MagnifyingGlass } from "phosphor-react";
import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/images/gallery/image-1.png";
import image2 from "../../assets/images/gallery/image-2.png";
import image3 from "../../assets/images/gallery/image-3.png";

const galleries = [
  {
    id: 0,
    country: "Turkey",
    img:{
        img1:image1,
        img2:image2,
        img3:image3,
    },
    details: "Incredible Turkey, Istanbul",
  },
  {
    id: 1,
    country: "Turkey",
    img:{
        img1:image1,
        img2:image2,
        img3:image3,
    },
    details: "Incredible Turkey, Istanbul",
  },
  {
    id: 2,
    country: "Turkey",
    img:{
        img1:image1,
        img2:image2,
        img3:image3,
    },
    details: "Incredible Turkey, Istanbul",
  },
  {
    id: 3,
    country: "Turkey",
    img:{
        img1:image1,
        img2:image2,
        img3:image3,
    },
    details: "Incredible Turkey, Istanbul",
  },
  {
    id: 4,
    country: "Turkey",
    img:{
        img1:image1,
        img2:image2,
        img3:image3,
    },
    details: "Incredible Turkey, Istanbul",
  },
  {
    id: 5,
    country: "Turkey",
    img:{
        img1:image1,
        img2:image2,
        img3:image3,
    },
    details: "Incredible Turkey, Istanbul",
  },

];

const Gallery = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: "linear",

    //   $('.gallery_slider').mouseover(function() {
    //     $(this).slick('play')
    //   });
    //   $('.gallery_slider').mouseout(function() {
    //     $(this).slick('pause')
    //   });
  };
  return (
    <div className="pt-28">
      <div className="container">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <h3 class="lg:text-left text-center text-[#393E50]  font-extrabold md:text-[40px] text-[24px] leading-[48px]">
            GALLERY
          </h3>

          <div class="relative flex w-[300px] flex-wrap items-stretch md:mt-0 mt-5">
            <input
              type="text"
              placeholder="Search Destination"
              class="focus-visible:outline-none px-3 py-4 font-semibold text-[14px] leading-[16px] text-[#747474] relative bg-[#F8F8F8] rounded-lg text-sm w-full pr-10"
            />
            <span class="z-10 h-full leading-snug font-normal text-center text-[#7C7B7B] absolute bg-transparent items-center justify-center w-10 right-0 pr-3 py-4">
             
              <MagnifyingGlass size={22} className='absolute mr-[334px]' />
            </span>
          </div>
        </div>

        <Slider {...settings}>
          {galleries.map(({ country, details, img ,id}) => (
            <div key={id}>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-[80px] mt-[50px]">

             <div class="border rounded-lg p-5 col-span-1 ">
                <div class="flex items-center gap-2 mb-[24px]">
                  <span class="w-[10px] h-[10px] rounded-full bg-[#F30D60]"></span>
                  <p class="font-nunito font-extrabold lg:text-[16px] text-[14px] text-[#393E50] leading-[20px]">
                    {country}
                  </p>
                </div>
                <p class="font-nunito font-extrabold lg:text-[16px] text-[14px] text-[#393E50] leading-[20px] mb-[30px]">
                  {details}
                </p>
                <div class=" flex">
                  <div class="mr-2">
                    <img class="w-full h-full" src={img.img1} alt="" />
                  </div>
                  <div class="mr-2">
                    <img class="w-full h-full" src={img.img2} alt="" />
                  </div>
                  <div class="mr-2">
                    <img class="w-full h-full" src={img.img3} alt="" />
                  </div>
                 
                </div>
              </div>
            

             </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
