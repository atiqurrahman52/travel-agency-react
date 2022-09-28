import React from 'react';
import Africa from './Africa';
import Asia from './Asia';
import Combo from './Combo';
import Europe from './Europe';
import EventBanner from './EventBanner';
import Featured from './Featured';
import Gift from './Gift';
import Hero from './Hero';
import Inspiration from './Inspiration';
import Partners from './Partners';

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
            <Africa />
            <Partners />
        </div>
    );
};

export default Home;