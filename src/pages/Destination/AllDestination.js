import React, { useState } from "react";
import istanbul from '../../assets/images/destination/istanbul.png';
import zurich from '../../assets/images/destination/zurich.png';
import paris from '../../assets/images/destination/paris.png';
import edinburgh from '../../assets/images/destination/kilimanjaro.png';
import halti from '../../assets/images/destination/halti.png';
import nardic from '../../assets/images/destination/nordic.png';
import { Link } from "react-router-dom";
import { CaretLeft, CaretRight } from "phosphor-react";

const menu =[
    { 
        id:0,
        country:'Turkey',
        details:'Incredible Turkey, Istanbul',
        days:'5days | ',
        price:'$59,000',
        img:istanbul,
        category:'europe',
    },
    { 
        id:1,
        country:'Switzerland',
        details:'Charming Switzerland, Zurich',
        days:'5days | ',
        price:'$59,000',
        img:zurich,
        category:'europe',
    },
    { 
        id:2,
        country:'France',
        details:'Romantic Paris, Paris',
        days:'5days | ',
        price:'$59,000',
        img:paris,
        category:'asia',
    },
    { 
        id:3,
        country:'Montenegro',
        details:'Cozy House, Krimona',
        days:'5days | ',
        price:'$59,000',
        img:edinburgh,
        category:'asia',
    },
    { 
        id:4,
        country:'Finland',
        details:'Aavasaksa, Halti ',
        days:'5days | ',
        price:'$59,000',
        img:halti,
        category:'africa',
    },
    { 
        id:5,
        country:'Norway',
        details:'Nordic Arctic Hall, Nordic',
        days:'5days | ',
        price:'$59,000',
        img:nardic,
        category:'america',
    },
]

const Destination = () => {
  const [items, setItems]= useState(menu);

  const filterItem =(categItem)=> {
    const updateItems = menu.filter((curElem) =>{
      return curElem.category === categItem;
    });
    setItems(updateItems);
  }

  return (
   <div className="" >
     <div className="container">
     <h3
              class="text-[#393E50]  font-nunito font-extrabold lg:text-[32px] text-[16px] lg:leading-[40px] leading-[22px] text-center mb-[32px]"
            >
              Find your Destination from Our Travel Bucket
            </h3>
      <div className="flex md:justify-center justify-start items-center gap-[40px]  text-[#E46D8C]  overflow-x-auto">
        <button className="font-nunito font-extrabold text-[16px] leading-[20px] text-[#747474] cursor-pointer active" onClick={() => filterItem('europe')}> Europe</button>
        <button className="font-nunito font-extrabold text-[16px] leading-[20px] text-[#747474] cursor-pointer" onClick={() => filterItem('asia')}> Asia</button>
        <button className="font-nunito font-extrabold text-[16px] leading-[20px] text-[#747474] cursor-pointer" onClick={() => filterItem('africa')}> Africa</button>
        <button className="font-nunito font-extrabold text-[16px] leading-[20px] text-[#747474] cursor-pointer active" onClick={() => filterItem('america')}> North America</button>
    
      </div>

     
      <div className='mt-10 grid grid-cols-1  md:grid-cols-2  lg:grid-cols-2 gap-5 '>
            {
                items.map(({ id, country,details,days,price, img }) =>(
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
   </div>
  );
};

export default Destination;