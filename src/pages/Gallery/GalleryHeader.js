import { MagnifyingGlass } from "phosphor-react";
import React from "react";


const Gallery = () => {

  return (
    <div className="pt-28">
     
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
              <MagnifyingGlass size={22} className="absolute mr-[334px]" />
            </span>
          </div>
        </div>

      
    </div>
  );
};

export default Gallery;
