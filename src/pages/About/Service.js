import React from 'react';
import travel from '../../assets/images/about/travel.png'
import CountUp from 'react-countup';
const Service = () => {
    return (
        <div>
             <div className='mt-24  md:bg-[#F8F8F8] bg-transparent mb-[50px] lg:mb-[64px]'>
        <div className='container'>
      
         <div class="grid grid-cols-1 md:grid-cols-12 p-2 md:p-12">
            <div class="col-span-6 md:order-1 order-2">
              <h3
                class="text-[#393E50] lg:text-[40px] text-[20px] font-nunito font-extrabold lg:leading-[48px] leading-[28px] lg:mb-[20px] mb-[26px]"
              >
                Why should Your Use Our Services?
              </h3>
              <p
                class="text-[#747474] text-[16px] font-nunito font-semibold leading-[20px] mb-[40px]"
              >
                Our point is to make worldwide corporate travel the board more
                customized and consistent. What's more, we do this through an
                organization of remarkable nearby offices that are pioneers in
                their own particular business sectors, however who likewise meet
                the high working and administration principles expected to turn
                into a Radius part.
              </p>
              <div
                class="flex items-center justify-center lg:justify-start gap-10 flex-wrap"
              >
                <div class="flex flex-col justify-center items-center">
                  <div>
                  
                      <CountUp className='text-accent font-nunito font-extrabold lg:text-[48px] text-[28px] lg:leading-[56px] leading-[36px] mb-[10px]' end={55} />
                    <span
                      class="text-[#D00338E5]/90 font-nunito font-extrabold lg:text-[48px] text-[28px] lg:leading-[56px] leading-[36px] mb-[10px]"
                      >+</span
                    >
                  </div>

                  <p
                    class="text-[ #393E50] font-nunito font-semibold text-[16px] leading-[20px] opacity-[.4]"
                  >
                    Country Touched
                  </p>
                </div>

                <div class="flex flex-col justify-center items-center">
                  <div>
                  <CountUp className='text-accent font-nunito font-extrabold lg:text-[48px] text-[28px] lg:leading-[56px] leading-[36px] mb-[10px]' end={35000} />
                    <span
                      class="text-accent font-nunito font-extrabold lg:text-[48px] text-[28px] lg:leading-[56px] leading-[36px] mb-[10px]"
                      >+</span
                    >
                  </div>

                  <p
                    class="text-[ #393E50] font-nunito font-semibold text-[16px] leading-[20px] opacity-[.4]"
                  >
                    Travel Experiences
                  </p>
                </div>
                <div class="flex flex-col justify-center items-center">
                  <div>
                  <CountUp className='text-accent font-nunito font-extrabold lg:text-[48px] text-[28px] lg:leading-[56px] leading-[36px] mb-[10px]' end={54} />
                    <span
                      class="text-[#D00338E5]/90 font-nunito font-extrabold lg:text-[48px] text-[28px] lg:leading-[56px] leading-[36px] mb-[10px]"
                      >M+</span
                    >
                  </div>

                  <p
                    class="text-[ #393E50] font-nunito font-semibold text-[16px] leading-[20px] opacity-[.4]"
                  >
                    User Connected
                  </p>
                </div>
              </div>
            </div>

            <div class="col-span-6 order-1 md:mt-0 mt-[-119px]">
              <img src={travel} alt="" />
            </div>
          </div>
         </div>
        </div>
            
        </div>
    );
};

export default Service;