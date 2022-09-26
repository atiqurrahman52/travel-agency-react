import React from 'react';
import EventBanner from './EventBanner';
import Featured from './Featured';
import Hero from './Hero';

const Home = () => {
    return (
        <div>
            <Hero />
            <Featured />
            <EventBanner />
        </div>
    );
};

export default Home;