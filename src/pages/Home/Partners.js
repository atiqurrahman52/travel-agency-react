import React from 'react';
import airbnb from '../../assets/images/partners/airbnb.png';
import decathlon from '../../assets/images/partners/decathlon.png';
import expedia from '../../assets/images/partners/expedia.png';
import gopro from '../../assets/images/partners/gopro.png';
import homeaway from '../../assets/images/partners/homeaway.png';
import isuzu from '../../assets/images/partners/isuzu.png';
import jordan from '../../assets/images/partners/jordan.png';
import mahindra from '../../assets/images/partners/mahindra.png';
import makemytrip from '../../assets/images/partners/makemytrip.png';
import advisor from '../../assets/images/partners/trip advisor.png';
import tvs from '../../assets/images/partners/tvs.png';
import uber from '../../assets/images/partners/uber.png';
import viator from '../../assets/images/partners/viator.png';
import sweden from '../../assets/images/partners/visit sweden.png';
import wildcraft from '../../assets/images/partners/wildcraft.png';
import zoom from '../../assets/images/partners/zoom car.png';

import Slider from 'react-slick';

const partners =[
    {
        id:0,
        logo:airbnb,
    },
    {
        id:1,
        logo:decathlon,
    },
    {
        id:2,
        logo:expedia,
    },
    {
        id:3,
        logo:gopro,
    },
    {
        id:4,
        logo:homeaway,
    },
    {
        id:5,
        logo:isuzu,
    },
    {
        id:6,
        logo:jordan,
    },
    {
        id:7,
        logo:mahindra,
    },
    {
        id:8,
        logo:makemytrip,
    },
    {
        id:9,
        logo:uber,
    },
    {
        id:10,
        logo:wildcraft,
    },
    {
        id:11,
        logo:sweden,
    },
    {
        id:12,
        logo:zoom,
    },
    {
        id:13,
        logo:viator,
    },
    {
        id:14,
        logo:isuzu,
    },
    {
        id:15,
        logo:tvs,
    },
    {
        id:16,
        logo:advisor,
    },
    {
        id:17,
        logo:airbnb,
    },
    {
        id:18,
        logo:isuzu,
    },
    {
        id:19,
        logo:uber,
    },
    {
        id:20,
        logo:jordan,
    },
]

const Partners = () => {
    const settings ={
        dots: false,
        infinite: true,
        autoplaySpeed: 1500,
        slidesToShow: 8,
        autoplay: true,
        arrows: false,
        rows: 2,
        speed: 8000,
        autoplaySpeed:0,
        pauseOnHover: true,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 4,
            },
          },
        ],
    }
    return (
        <div className='mb-[60px] lg:mb-[94px]'>
            <div className='container'>
            <div className="text-center">
            <h3
              className="font-nunito font-extrabold  lg:text-[48px] text-[24px] text-primary lg:leading-[56px] leading-[40px] md:mb-[20px] mb-[14px]"
            >
              Our Partners
            </h3>
            <p
              className="font-nunito text-center font-[600] text-tertiary text-[16px] leading-[20px] md:mb-[60px] mb-[40px]"
            >
              We team up with the best to give you an unmatchable experience
            </p>
          </div>

          <Slider {...settings}>
          {
            partners.map(partner =>(
                <div key={partner.id}>
                     <img
                className="grayscale-[100%] hover:grayscale-[0%] lg:w-[100px] w-[70px] lg:h-[50px] h-[20px] object-contain mx-auto my-2"
                src={partner.logo}
                alt=""
              />
             </div>
            ))
          }
          </Slider>
         

            </div>
            
        </div>
    );
};

export default Partners;