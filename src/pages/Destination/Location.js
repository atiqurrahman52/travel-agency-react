import React from 'react';
import ladhak from '../../assets/images/destination/ladhak.png';
import dubai from '../../assets/images/destination/dubai.png';
import sydney from '../../assets/images/destination/sydney.png';
import edinburgh from '../../assets/images/destination/edinburgh.png';
import kilimanjaro from '../../assets/images/destination/kilimanjaro.png';
import fuji from '../../assets/images/destination/fuji.png';
import { CaretLeft, CaretRight } from 'phosphor-react';
import { Link } from 'react-router-dom';

const locations =[
    { 
        id:0,
        country:'India',
        details:'Pangong TSO, Ladhak ',
        days:'5days | ',
        price:'$59,000',
        img:ladhak,
    },
    { 
        id:1,
        country:'United Arab Emirates',
        details:'Dubai Aquarium house, Dubai',
        days:'5days | ',
        price:'$59,000',
        img:dubai,
    },
    { 
        id:2,
        country:'Australia',
        details:'Sydney Opera House, Sydney ',
        days:'5days | ',
        price:'$59,000',
        img:sydney,
    },
    { 
        id:3,
        country:'Scotland',
        details:'Edinburgh Castle, Edinburgh',
        days:'5days | ',
        price:'$59,000',
        img:edinburgh,
    },
    { 
        id:4,
        country:'Tanzania',
        details:' Mount Kilimanjaro, Kilimanjaro ',
        days:'5days | ',
        price:'$59,000',
        img:kilimanjaro,
    },
    { 
        id:5,
        country:'Japan',
        details:'Mount Fuji, Fuji',
        days:'5days | ',
        price:'$59,000',
        img:fuji,
    },
]

const Location = () => {
    return (
       <div className='container'>
         <div className='mt-10 lg:-mt-20 grid grid-cols-1  md:grid-cols-2  lg:grid-cols-2 gap-5 '>
            {
                locations.map(({ id, country,details,days,price, img }) =>(
                    <div key={id} className=''>
                         <div
        className="relative group overflow-hidden rounded-[20px] itemBox"
      
      >
        <img
          className="w-full lg:h-max-[350px] h-max-[192px] group-hover:scale-125 transition-all duration-[2000ms]"
          src={img}
          alt=""
          srcset=""
        />

        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#00000000]/0 to-[#00000000]/100 p-4 lg:p-11"
        >
          <div className="flex items-start justify-between flex-col h-full">
            <div className="flex items-center justify-center gap-2">
              
                <span className="w-[10px] h-[10px] rounded-full bg-[#F30D60] inline-block">
                </span>
                <p
                  className="font-nunito font-extrabold lg:text-[16px] text-[14px] leading-[20px] text-[#FFFFFF]"
                >
               {country}
                </p>
            </div>
            <div>
              <div className="mb-3">
                <div >
                  <p
                    className="text-[#FFFFFF] lg:text-[24px] text-[16px] font-nunito font-extrabold lg:leading-[30px] leading-[22px]"
                  >
                 {details}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-2">
                <p
                  className="font-nunito font-extrabold text-[#FFFFFF]/60 text-[16px] leading-[20px]"
                >
                 {days}
                </p>
                <p
                  className="font-nunito font-extrabold text-[#FFFFFF] text-[16px] leading-[20px]"
                >
                  {price}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
                    </div>
                ))
            }
            
        </div>

        {/* Pagination started  */}
        
        <div class="flex justify-center mt-[40px] lg:mt-[80px] mb-[80px] lg:mb-[118px]">
              <Link
                class="flex w-10 h-10 mx-2 bg-[#F1B4C433] justify-center items-center rounded-lg border bg-white text-black"
                to="#"
                title="Previous Page"
              >
                <CaretLeft size={22} />
               
              </Link>
              <Link
                class="flex w-10 h-10 mx-2 justify-center items-center rounded-lg border border-gray-200 bg-[#F1B4C4] font-bold text-[16px] leading-[20px] text-[#D00338E5]"
                to="#"
                title="Page 1"
              >
                1
              </Link>
              <Link
                class="flex w-10 h-10 mx-2 justify-center items-center rounded-lg border text-[#D00338E5] bg-white font-bold"
                to="#"
                title="Page 2"
              >
                2
              </Link>

              <Link
                class="flex w-10 h-10 mx-2 justify-center items-center rounded-lg border bg-white font-bold text-[#D00338E5]"
                to="#"
                title="Page 3"
              >
                3
              </Link>
              <Link
                class="flex w-10 h-10 mx-2 justify-center items-center rounded-lg border bg-white font-bold text-[#D00338E5]"
                to="#"
                title="Page 4"
              >
                4
              </Link>

              <Link
                class="flex w-10 h-10 ml-1 justify-center items-center rounded-lg border bg-[#D00338E5] text-white"
                to="#"
                title="Next Page"
              >
                <CaretRight size={22} />
                
              </Link>
            </div>
             {/* Pagination end */}
       </div>
    );
};

export default Location;