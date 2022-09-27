import React from 'react';
import Asia from './Asia';
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
            <Asia />
        </div>
    );
};

export default Home;