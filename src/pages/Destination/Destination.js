import React from 'react';
import EventBanner from '../Home/EventBanner';
import Header from './Header';
import Location from './Location';

const Destination = () => {
    return (
        <div className='pt-28'>
        <Header />
        <Location />
        <EventBanner />
             
        </div>
    );
};

export default Destination;