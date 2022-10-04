import React from 'react';
import { featuredItems } from '../../data/home/featuredData'; 
import { MapPin } from 'phosphor-react';

const Featured = () => {
  
    
    return (
        <div className='mb-[60px] lg:mb-[104px]'>
        <div className='container'>
        <h1
          className="text-center lg:text-[32px] text-[24px] text-[#393E50] font-nunito font-[800]"
        >
          Featured Trips for You
        </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 '>
            {
                
                featuredItems.map(item =>  (
                 
                <div key={item.id} className="relative group overflow-hidden rounded-[20px]"> 
             
                <div className="">
                      <img
                        className="w-full group-hover:scale-125 transition-all duration-[2000ms]"
                        src={item.image}
                        alt=""
                        srcSet=""
                      />
                </div>
                <div className="absolute top-[33px] left-[32px] space-y-[15px]">
                      <p className="font-nunito font-[800] text-[16px] text-white">
                        {item.trips}
                      </p>
                      <p className="font-nunito font-[800] text-[16px] text-white">
                         {item.price}
                      </p>
                    </div>
                    <div className="absolute bottom-7 left-[32px] flex items-center gap-2">
                   
                      <MapPin className='text-white' size={18} />
                      <p className="font-nunito font-[600] text-[14px] text-white">
                       {item.country}
                      </p>
                    </div>
                      
                   
                </div>
                )
                   
                    
                )
            }
            </div>
        </div>
        </div>
    );
};

export default Featured;


