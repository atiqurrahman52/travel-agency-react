import React from 'react';
import EventBanner from './EventBanner';
import Featured from './Featured';
import Hero from './Hero';
import Inspiration from './Inspiration';

const Home = () => {
    return (
        <div>
            <Hero />
            <Featured />
            <EventBanner />
            <Inspiration />
        </div>
    );
};

export default Home;