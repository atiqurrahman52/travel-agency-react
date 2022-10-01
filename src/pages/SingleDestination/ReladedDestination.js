import React from 'react';
import minali from '../../assets/images/single-destination/Manali 1.png'
const ReladedDestination = () => {
    return (
        <div class="mb-[80px] mt-9">
        <h3
          class="text-[#393E50] font-nunito font-extrabold text-[24px] md:leading-[30px] leading-[48px] md:text-left text-center mb-8"
        >
          Releated Destination
        </h3>

        <div
          class="relative group overflow-hidden rounded-[20px] itemBox"
        >
          <img
            class="w-full lg:h-max-[350px] h-max-[192px] group-hover:scale-125 transition-all duration-[2000ms]"
            src={minali}
            alt=""
            srcset=""
          />

          <div
            class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#00000000]/0 to-[#00000000]/100 p-4 lg:p-11"
          >
            <div class="flex items-start justify-between flex-col h-full">
              <div
                class="lg:flex flex-col justify-center text-white font-nunito font-extrabold text-[16px] leading-[20px] gap-3"
              >
                <h3 class="lg:mb-0 mb-2">Manali Jeep Safari</h3>
                <p>$1100</p>
              </div>
              <div>
                <div
                  class="flex items-center justify-start gap-2 text-white font-nunito font-semibold text-[14px] leading-[16px]"
                >
                  <i class="ph-map-pin"></i>
                  <p>India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ReladedDestination;