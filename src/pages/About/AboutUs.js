import React from 'react';
import about from '../../assets/images/about/about.webp'
import tourguid from '../../assets/images/about/tourguid.webp';
import friendly from '../../assets/images/about/friendlyprice.webp';
import reliable from '../../assets/images/about/reliabletour.webp';
const AboutUs = () => {
    return (
        <div>
               <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="">
              <img src={about} alt="" />
            </div>

            <div>
              <div className="">
                <h3
                  className="text-[#393E50] font-nunito font-extrabold lg:text-[40px] text-[20px] lg:leading-[48px] leading-[28px] lg:mb-[20px] mb-[16px]"
                >
                  Tourelish is your only Trusted Tourmate
                </h3>
                <p
                  className="text-[#747474] font-nunito font-semibold text-[16px] leading-[20px] lg:mb-[40px] mb-[40px]"
                >
                  The world's top travel counselors, the brands you knows, and
                  the advantages and genuine serenity you won't find elsewhere
                  for near and dear escapes or remote that could only be
                  described as epic
                </p>
              </div>

              <div className="lg:mb-[31px] mb-[16px]">
                <div className="flex gap-[16px] mb-[10px]">
                  <img
                    className="w-5 md:w-10 h-5 md:h-10"
                    src={tourguid}
                    alt=""
                  />
                  <div className="flex flex-col gap-[10px]">
                    <h3
                      className="text-[#393E50] font-nunito font-extrabold lg:text-[28px] text-[16px] lg:leading-[30px] leading-[22px]"
                    >
                      Tour Guide 
                    </h3>
                    <p
                      className="text-[#747474] font-nunito font-semibold lg:text-[16px] text-[14px] leading-[20px]"
                    >
                      The world's top travel counselors, the brands you knows,
                      and the advantages and genuine serenity you won't find
                      elsewhere.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:mb-[31px] mb-[16px]">
                <div className="flex gap-[16px] mb-[10px]">
                  <img
                    className="w-5 md:w-10 h-5 md:h-10"
                    src={friendly}
                    alt=""
                  />
                  <div className="flex flex-col gap-[10px]">
                    <h3
                      className="text-[#393E50] font-nunito font-extrabold lg:text-[28px] text-[16px] lg:leading-[30px] leading-[22px]"
                    >
                      Friendly price
                    </h3>
                    <p
                      className="text-[#747474] font-nunito font-semibold lg:text-[16px] text-[14px] leading-[20px]"
                    >
                      The world's top travel counselors, the brands you knows,
                      and the advantages and genuine serenity you won't find
                      elsewhere.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:mb-[31px] mb-[16px]">
                <div className="flex gap-[16px] mb-[10px]">
                  <img
                    className="w-5 md:w-10 h-5 md:h-10"
                    src={reliable}
                    alt=""
                  />
                  <div className="flex flex-col gap-[10px]">
                    <h3
                      className="text-[#393E50] font-nunito font-extrabold lg:text-[28px] text-[16px] lg:leading-[30px] leading-[22px]"
                    >
                      Reliable Tour
                    </h3>
                    <p
                      className="text-[#747474] font-nunito font-semibold lg:text-[16px] text-[14px] leading-[20px]"
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