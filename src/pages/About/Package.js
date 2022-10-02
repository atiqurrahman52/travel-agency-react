import React from "react";
import vector from "../../assets/images/about/Vector.png";
import vector1 from "../../assets/images/about/Vector1.png";
import africa from "../../assets/images/about/africa.svg";
import africa2 from "../../assets/images/about/africa2.png";
import asia from "../../assets/images/about/asia.svg";
import asia2 from "../../assets/images/about/asia2.png";
import usa from "../../assets/images/about/usa.svg";
import usa2 from "../../assets/images/about/use2.png";

const packages = [
  {
    id: 0,
    country: "Europe",
    img1: vector,
    img2: vector1,
    pack: " 35 Package",
  },
  {
    id: 1,
    country: "Africa",
    img1: africa,
    img2: africa2,
    pack: " 42 Package",
  },
  {
    id: 2,
    country: "Asia",
    img1: asia,
    img2: asia2,
    pack: " 35 Package",
  },
  {
    id: 3,
    country: "USA",
    img1: usa,
    img2: usa2,
    pack: " 35 Package",
  },
];

const Package = () => {
  return (
    <div class="mt-[44px] md:mt-[131px] ">
      <div class="container">
        <div class="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 mb-[88px]">
          {packages.map((item) => (
            <div class="hover:border border-[#D00338E5] rounded-[20px] lg:shadow-[0_0_40px_rgba(0,0,0,0.1)] shadow-[0_0_18px_rgba(0,0,0,0.1)] p-4 max-h-[257px] h-full col-span-1 flex items-center justify-center flex-col gap-2">
              <img class="hidden md:block" src={item.img1} alt="" />
              <img class="block md:hidden" src={item.img2} alt="" />
              <h3 class="text-[#393E50] font-nunito font-extrabold lg:text-[24px] text-[12px] md:leading-[30px] leading-[14px]">
                {item.country}
              </h3>
              <p class="text-[#747474] lg:text-[16px] text-[8px] font-nunito font-semibold lg:leading-[20px] leading-[9px]">
                {item.pack}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Package;
