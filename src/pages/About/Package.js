import React from 'react';
import vector from '../../assets/images/about/Vector.png';
import vector1 from '../../assets/images/about/Vector1.png';
import africa from '../../assets/images/about/africa.svg';
import africa2 from '../../assets/images/about/africa2.png';
import asia from '../../assets/images/about/asia.svg';
import asia2 from '../../assets/images/about/asia2.png';
import usa from '../../assets/images/about/usa.svg';
import usa2 from '../../assets/images/about/use2.png';
const Package = () => {
    return (
      
            <div  class="mt-[44px] md:mt-[131px] ">
        <div class="container">
          <div
            class="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 mb-[88px]"
          >
            <div
              class="hover:border border-[#D00338E5] rounded-[20px] lg:shadow-[0_0_40px_rgba(0,0,0,0.1)] shadow-[0_0_18px_rgba(0,0,0,0.1)] p-4 max-h-[257px] h-full col-span-1 flex items-center justify-center flex-col gap-2"
            >
              <img
                class="hidden md:block"
                src={vector}
                alt=""
              />
              <img
                class="block md:hidden"
                src={vector1}
                alt=""
              />
              <h3
                class="text-[#393E50] font-nunito font-extrabold lg:text-[24px] text-[12px] md:leading-[30px] leading-[14px]"
              >
                Europe
              </h3>
              <p
                class="text-[#747474] lg:text-[16px] text-[8px] font-nunito font-semibold lg:leading-[20px] leading-[9px]"
              >
                35 Package
              </p>
            </div>

            <div
              class="hover:border border-[#D00338E5] rounded-[20px] lg:shadow-[0_0_40px_rgba(0,0,0,0.1)] shadow-[0_0_18px_rgba(0,0,0,0.1)] p-4 max-h-[257px] h-full col-span-1 flex items-center justify-center flex-col gap-2"
            >
              <img
                class="hidden md:block"
                src={africa}
                alt=""
              />
              <img
                class="block md:hidden"
                src={africa2}
                alt=""
              />
              <h3
                class="text-[#393E50] font-nunito font-extrabold lg:text-[24px] text-[12px] md:leading-[30px] leading-[14px]"
              >
                Africa
              </h3>
              <p
                class="text-[#747474] lg:text-[16px] text-[8px] font-nunito font-semibold lg:leading-[20px] leading-[9px]"
              >
                42 Package
              </p>
            </div>

            <div
              class="hover:border border-[#D00338E5] rounded-[20px] lg:shadow-[0_0_40px_rgba(0,0,0,0.1)] shadow-[0_0_18px_rgba(0,0,0,0.1)] p-4 max-h-[257px] h-full col-span-1 flex items-center justify-center flex-col gap-2"
            >
              <img
                class="hidden md:block"
                src={asia}
                alt=""
              />
              <img
                class="block md:hidden"
                src={asia2}
                alt=""
              />
              <h3
                class="text-[#393E50] font-nunito font-extrabold lg:text-[24px] text-[12px] md:leading-[30px] leading-[14px]"
              >
                Asia
              </h3>
              <p
                class="text-[#747474] lg:text-[16px] text-[8px] font-nunito font-semibold lg:leading-[20px] leading-[9px]"
              >
                35 Package
              </p>
            </div>

            <div
              class="hover:border border-[#D00338E5] rounded-[20px] lg:shadow-[0_0_40px_rgba(0,0,0,0.1)] shadow-[0_0_18px_rgba(0,0,0,0.1)] p-4 max-h-[257px] h-full col-span-1 flex items-center justify-center flex-col gap-2"
            >
              <img
                class="hidden md:block"
                src={usa}
                alt=""
              />
              <img
                class="block md:hidden"
                src={usa2}
                alt=""
              />
              <h3
                class="text-[#393E50] font-nunito font-extrabold lg:text-[24px] text-[12px] md:leading-[30px] leading-[14px]"
              >
                USA
              </h3>
              <p
                class="text-[#747474] lg:text-[16px] text-[8px] font-nunito font-semibold lg:leading-[20px] leading-[9px]"
              >
                39 Package
              </p>
            </div>
          </div>
        </div>
      </div>
       
    );
};

export default Package;