import React from 'react';
import packageOne from '../../assets/images/combo/Package1.png';
import packageTwo from '../../assets/images/combo/Package2.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const combos =[
    {
        id:0,
        img:packageOne,
    },
    {
        id:1,
        img:packageTwo,
    },
    {
        id:2,
        img:packageTwo,
    },
    {
        id:3,
        img:packageOne,
    },
    {
        id:4,
        img:packageTwo,
    },
    {
        id:5,
        img:packageOne,
    },
]

const Combo = () => {
    const settings = {
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        autoplay: true,
        infinite: true,
        arrows: false,
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "120px",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              centerMode: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              centerMode: false,
            }
          },
        
        ]
    }
    return (
        <div className='mb-[60px] lg:mb-[104px]'>
            <div className='container'>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-12 lg:col-span-4'>
                    <h3
              class="text-primary text-[24px] lg:text-[48px]  font-nunito font-extrabold lg:leading-[56px] leading-[40px] lg:text-left text-center mb-[20px]"
            >
              Find the Perfect Combo 
            </h3>
            <p
              class="text-[#747474] text-[16px] font-nunito font-[600] leading-[20px] lg:text-left text-center"
            >
              Plan and Find your perfect package for next tour Plan and Find
              your perfect package for next tour Plan and Find your perfect
              package for next tour
            </p>

                    </div>
                    <div className='col-span-12 lg:col-span-8'>
                        <Slider {...settings}>
                        {
                             combos.map(combo => (
                                <div key={combo.id} className="max-h-[408px] gap-2">
                             <div>
                             <img
                               className="h-[408px] w-full"
                               src={combo.img}
                               alt=""
                             />
                             </div>
                           </div>
                             ))
                        }

                        </Slider>

                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default Combo;