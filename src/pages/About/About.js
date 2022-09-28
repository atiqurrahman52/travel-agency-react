import React from 'react';


import Partners from '../Home/Partners';
import AboutUs from './AboutUs';
import Package from './Package';
import Service from './Service';

const About = () => {
    return (
        <div className='pt-28 mt-1 lg:mt-10'>
 
            <AboutUs />
            <Service />
            <Partners />
            <Package />
        </div>

       

          


        
    );
};

export default About;