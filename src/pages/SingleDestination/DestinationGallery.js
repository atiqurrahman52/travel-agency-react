import React from 'react';
import image_1 from '../../assets/images/single-destination/image-1.png';
import image_2 from '../../assets/images/single-destination/image-2.png';
import image_3 from '../../assets/images/single-destination/image-3.png';
import image_4 from '../../assets/images/single-destination/image-4.png';
import image_5 from '../../assets/images/single-destination/image-5.png';


const DestinationGallery = () => {
    return (
        <div>
              <div class="mt-5 lg:mt-9">
        <h3
          class="md:text-left text-center text-[#393E50] md:text-[40px] text-[24px] font-nunito font-extrabold leading-[48px] mb-[16px] md:mb-[40px] "
        >
          Gallery
        </h3>
        <div
          class="grid lg:grid-flow-col lg:grid-rows-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2"
        >
      
          <div
            class="group rounded-[10px] overflow-hidden cursor-pointer lg:row-span-2"
          >
            <img
              src={image_1}
              class="w-full h-full"
              alt=""
            />
          </div>
          {/* <!-- one  --> */}
          <div
            class="group rounded-[10px] overflow-hidden cursor-pointer"
          >
            <img
              src={image_2}
              class="w-full h-full"
              alt=""
            />
          </div>
          {/* <!-- two  --> */}
          <div
            class="group rounded-[10px] overflow-hidden cursor-pointer"
          >
            <img
              src={image_3}
              class="w-full h-full"
              alt=""
            />
          </div>
          {/* <!-- three  --> */}
          <div
            class="group rounded-[10px] overflow-hidden cursor-pointer"
          >
            <img
              src={image_4}
              class="w-full h-full"
              alt=""
            />
          </div>
          {/* <!-- four  --> */}
          <div
            class="group rounded-[10px] overflow-hidden cursor-pointer"
          >
            <div class="relative">
              <img
                src={image_5}
                class="w-full h-full"
                alt=""
              />
              <div
                class="overlay absolute top-0 left-0 text-black font-nunito font-extrabold text-[24px] leading-[30px] w-full h-full bg-black/50"
              >
                <p
                  class="z-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white"
                >
                  25+
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default DestinationGallery;