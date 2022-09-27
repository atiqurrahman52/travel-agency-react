import React from 'react';
import Asia from './Asia';
import Combo from './Combo';
import Europe from './Europe';
import EventBanner from './EventBanner';
import Featured from './Featured';
import Gift from './Gift';
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
            <Europe />
            <Gift />
        </div>
    );
};

export default Home;