import React from "react";
import ImgsViewer from "react-images-viewer";

import image_1 from "../../assets/images/single-destination/image-1.png";
import image_2 from "../../assets/images/single-destination/image-2.png";
import image_3 from "../../assets/images/single-destination/image-3.png";
import image_4 from "../../assets/images/single-destination/image-4.png";
import image_5 from "../../assets/images/single-destination/image-5.png";
import ImageViewer from "./ImageViewer";

const G = () => {
  const images = [
    {
      id: 0,
      img: image_1,
    },
    {
      id: 1,
      img: image_2,
    },
    {
      id: 2,
      img: image_3,
    },
    {
      id: 3,
      img: image_4,
    },
    {
      id: 4,
      img: image_5,
    },
  ];



 

  return (

      <div className="mt-5 lg:mt-9">
        <h3 className="md:text-left text-center text-[#393E50] md:text-[40px] text-2xl font-nunito font-extrabold leading-[48px] mb-[16px] md:mb-[40px] ">
          Gallery
        </h3>

        <div className="grid lg:grid-flow-col lg:grid-rows-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
          {images.map((image, i) => (
            <div
              key={i}
              className={`group relative rounded-[16px] overflow-hidden cursor-pointer ${
                (i === 0 && "lg:row-span-2") ||
                i === 1 ||
                i === 2 ||
                i === 3 ||
                i === 4
              }`}
            >
               <img
                src={image.img}
                className="group rounded-[10px] overflow-hidden cursor-pointer w-full h-full"
                alt=""
              />
            </div>
          ))}

      
        </div>

      
      </div>
  
  );
};

export default G;
