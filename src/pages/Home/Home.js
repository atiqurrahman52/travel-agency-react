import React from 'react';
import Asia from './Asia';
import Combo from './Combo';
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
            <Combo />
        </div>
    );
};

export default Home;