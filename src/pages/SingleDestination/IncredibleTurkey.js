import { Calendar, MapPin } from 'phosphor-react';
import React from 'react';
import location from '../../assets/images/single-destination/location.svg'

const incredibleTurkies =[
    {
        id:0,
        title:'Duration',
        details:'5 Days/ 4 Nights'
    },
    {
        id:1,
        title:'Pick Up',
        details:'From Airport'
    },
    {
        id:2,
        title:'Tour Type',
        details:'Beach, Mountain'
    },
    {
        id:3,
        title:'Age Limited',
        details:'From +8 years older'
    },
    {
        id:4,
        title:'Hotel Type',
        details:'Based on Package'
    },
    {
        id:5,
        title:'Tour Guide',
        details:'Yes'
    },
    {
        id:6,
        title:'Date',
        details:'Depands on Booking'
    },
    {
        id:7,
        title:'Date',
        details:'Depands on Booking'
    },
]

const IncredibleTurkey = () => {
    return (
        <div>
            <div class="mb-10">
                <h3
                  class="text-[#393E50] font-nunito font-extrabold lg:text-[40px] text-[20px] lg:leading-[48px] leading-[28px] mb-4"
                >
                  Incredible Turkey | 6Day-5Night
                </h3>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <img
                      src={location}
                      alt=""
                    />
                 
                    <p
                      class="text-[#393E50] lg:text-[16px] text-[14px] font-nunito font-semibold leading-[20px]"
                    >
                      Turkey
                    </p>
                  </div>
                  <div>
                    <p
                      class="text-[#D00338E5] lg:text-[32px] text-[16px] font-nunito font-extrabold lg:leading-[40px] leading-[22px]"
                    >
                      $56780000
                    </p>
                  </div>
                </div>
              </div>
              <hr />

              <div className='grid grid-cols-12 gap-6 my-[45px]'>
            
                 {
                    incredibleTurkies.map(item =>(
                        <div key={item.id} class="lg:col-span-3 col-span-6">
                             <div class="flex gap-1.5 p-1 flex-col md:flex-row items-center md:items-start justify-center md:justify-start"
                  >
                   
                    <Calendar className='text-accent' size={32} />
                    <div class="text-center md:text-left space-y-3">
                      <h3
                        class="text-[#393E50] text-[16px] font-nunito font-extrabold leading-[20px]"
                      >
                        {item.title}
                      </h3>
                      <p
                        class="text-[#747474] lg:text-[16px] text-[14px] font-nunito font-semibold lg:leading-[20px] leading-[16px]"
                      >
                       {item.details}
                      </p>
                    </div>
                  </div> 
                     </div>
                    ))
                 }
           
              </div>
              
             
              <hr />
            
              </div>
              
      
    );
};

export default IncredibleTurkey;


