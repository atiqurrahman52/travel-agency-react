import React from "react";
import gift from "../../assets/images/gift card/gift-card.webp";

const Gift = () => {
  return (
    <div className="mb-[60px] lg:mb-[104px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-4">
            <p className="font-nunito font-extrabold lg:text-[45px] text-[28px] lg:text-left text-center text-primary lg:leading-[56px] leading-[40px] mb-[24px]">
              Gift an Experience with Tourelish
            </p>
            <p className="font-nunito font-[600] text-[#747474] text-[16px] lg:text-left text-center leading-[20px] lg:mb-[24px] mb-[10px]">
              Surpirse gift card for your loved one.Surpirse gift
              card for your loved one. Many of those items are valued less because there was
              not much love that went into making them.
            </p>
            <button className="lg:block hidden font-nunito font-semibold text-[14px] text-white bg-[#D00338E5]/90 px-[61px] py-[14px] rounded-[5px]">
              Learn more
            </button>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <img className="w-full" src={gift} alt="" srcSet="" />
            <div className="mt-9 lg:mt-0 flex justify-center items-center">
              <button className="lg:hidden block font-nunito font-[600] text-[14px] text-[#FFFFFF] bg-[#D00338E5] px-[61px] py-[14px] rounded-[5px]">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
