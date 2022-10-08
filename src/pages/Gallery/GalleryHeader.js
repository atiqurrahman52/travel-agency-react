import { MagnifyingGlass } from "phosphor-react";
import React from "react";

const GalleryHeader = () => {
  return (
    <div className="pt-20 lg:pt-28">
        <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h3 className="lg:text-left text-center text-[#393E50]  font-extrabold md:text-[40px] text-[24px] leading-[48px]">
          GALLERY
        </h3>

        <div className="relative flex w-[300px] flex-wrap items-stretch md:mt-0 mt-5">
          <input
            type="text"
            placeholder="Search Destination"
            className="focus-visible:outline-none px-3 py-4 font-semibold text-[14px] leading-[16px] text-[#747474] relative bg-[#F8F8F8] rounded-lg text-sm w-full pr-10"
          />
          <span className="z-10 h-full leading-snug font-normal text-center text-[#7C7B7B] absolute bg-transparent items-center justify-center w-10 right-0 pr-3 py-4">
            <MagnifyingGlass size={22} className="absolute mr-[334px]" />
          </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default GalleryHeader;
