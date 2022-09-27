import React from 'react';
import usa from '../../assets/images/featured/hollywood hills.png';
import norway from '../../assets/images/featured/nordic hall.png';
import montenegro from '../../assets/images/featured/cozy house.png';
import { MapPin } from 'phosphor-react';

const Featured = () => {
    const featuredItems = [
        {
          id: 0,
          trips:'Hollywood Hills Upscale',
          price:'$1100',
          image: usa,
          img:'https://images.unsplash.com/photo-1438786657495-640937046d18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGlsbHN8ZW58MHx8MHx8&w=1000&q=80',
          country:'United States',
        },
        {
            id: 1,
            trips:'Nordic Arctic Hall',
            price:'$2900',
            image: norway,
            img:'https://images.unsplash.com/photo-1438786657495-640937046d18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGlsbHN8ZW58MHx8MHx8&w=1000&q=80',
            country:'Norway',
          },
        {
            id: 2,
            trips:'Cozy House in Krimona',
            price:'$$750',
            image: montenegro,
            img:'https://images.unsplash.com/photo-1438786657495-640937046d18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGlsbHN8ZW58MHx8MHx8&w=1000&q=80',
            country:'Montenegro',
          },
    ]
    return (
        <div className='mb-[60px] lg:mb-[104px]'>
        <div className='container'>
        <h1
          class="text-center lg:text-[32px] text-[24px] text-[#393E50] font-nunito font-[800]"
        >
          Featured Trips for You
        </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 '>
            {
                
                featuredItems.map(item =>  (
                 
                <div className="relative group overflow-hidden rounded-[20px]"> 
               {/* key={item.id}  */}
                <div className="">
                      <img
                        className="w-full group-hover:scale-125 transition-all duration-[2000ms]"
                        src={item.image}
                        alt=""
                        srcset=""
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


{/* <div className="relative group overflow-hidden rounded-[20px]">
                    <div className="">
                      <img
                        className="w-full group-hover:scale-125 transition-all duration-[2000ms]"
                        src={item.img}
                        alt=""
                        srcset=""
                      />
                    </div>
                    <div className="absolute top-[33px] left-[32px] space-y-[15px]">
                      <p className="font-nunito font-[800] text-[16px] text-[#FFFFFF]">
                        {item.trips}
                      </p>
                      <p className="font-nunito font-[800] text-[16px] text-[#FFFFFF]">
                         {item.price}
                      </p>
                    </div>
                    <div className="absolute bottom-7 left-[32px] flex items-center gap-2">
                      <i className="ph-map-pin text-[#FFFFFF]"></i>
                      <p className="font-nunito font-[600] text-[14px] text-[#FFFFFF]">
                       {item.country}
                      </p>
                    </div>
                  </div> */}