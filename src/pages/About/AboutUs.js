import React from 'react';
import about from '../../assets/images/about/about.png'
import tourguid from '../../assets/images/about/tourguid.png';
import friendly from '../../assets/images/about/friendlyprice.png';
import reliable from '../../assets/images/about/reliabletour.png';
const AboutUs = () => {
    return (
        <div>
               <div class="container">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="">
              <img src={about} alt="" />
            </div>

            <div>
              <div class="">
                <h3
                  class="text-[#393E50] font-nunito font-extrabold lg:text-[40px] text-[20px] lg:leading-[48px] leading-[28px] lg:mb-[20px] mb-[16px]"
                >
                  Tourelish is your only Trusted Tourmate
                </h3>
                <p
                  class="text-[#747474] font-nunito font-semibold text-[16px] leading-[20px] lg:mb-[40px] mb-[40px]"
                >
                  The world's top travel counselors, the brands you knows, and
                  the advantages and genuine serenity you won't find elsewhere
                  for near and dear escapes or remote that could only be
                  described as epic
                </p>
              </div>

              <div class="lg:mb-[31px] mb-[16px]">
                <div class="flex gap-[16px] mb-[10px]">
                  <img
                    class="w-5 md:w-10 h-5 md:h-10"
                    src={tourguid}
                    alt=""
                  />
                  <div class="flex flex-col gap-[10px]">
                    <h3
                      class="text-[#393E50] font-nunito font-extrabold lg:text-[28px] text-[16px] lg:leading-[30px] leading-[22px]"
                    >
                      Tour Guide hhh
                    </h3>
                    <p
                      class="text-[#747474] font-nunito font-semibold lg:text-[16px] text-[14px] leading-[20px]"
                    >
                      The world's top travel counselors, the brands you knows,
                      and the advantages and genuine serenity you won't find
                      elsewhere.
                    </p>
                  </div>
                </div>
              </div>

              <div class="lg:mb-[31px] mb-[16px]">
                <div class="flex gap-[16px] mb-[10px]">
                  <img
                    class="w-5 md:w-10 h-5 md:h-10"
                    src={friendly}
                    alt=""
                  />
                  <div class="flex flex-col gap-[10px]">
                    <h3
                      class="text-[#393E50] font-nunito font-extrabold lg:text-[28px] text-[16px] lg:leading-[30px] leading-[22px]"
                    >
                      Friendly price
                    </h3>
                    <p
                      class="text-[#747474] font-nunito font-semibold lg:text-[16px] text-[14px] leading-[20px]"
                    >
                      The world's top travel counselors, the brands you knows,
                      and the advantages and genuine serenity you won't find
                      elsewhere.
                    </p>
                  </div>
                </div>
              </div>

              <div class="lg:mb-[31px] mb-[16px]">
                <div class="flex gap-[16px] mb-[10px]">
                  <img
                    class="w-5 md:w-10 h-5 md:h-10"
                    src={reliable}
                    alt=""
                  />
                  <div class="flex flex-col gap-[10px]">
                    <h3
                      class="text-[#393E50] font-nunito font-extrabold lg:text-[28px] text-[16px] lg:leading-[30px] leading-[22px]"
                    >
                      Reliable Tour
                    </h3>
                    <p
                      class="text-[#747474] font-nunito font-semibold lg:text-[16px] text-[14px] leading-[20px]"
                    >
                      The world's top travel counselors, the brands you knows,
                      and the advantages and genuine serenity you won't find
                      elsewhere.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
        </div>
        </div>
    );
};

export default AboutUs;