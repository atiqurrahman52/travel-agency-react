import React from 'react';
import DestinationHeader from './DestinationHeader';
import Form from './Form';
import IncredibleTurkey from './IncredibleTurkey';

const SingleDestination = () => {
    return (
        <div className='pt-28 '>
            <DestinationHeader />
            <div className='grid grid-cols-12 gap-4 container'>
                <div className='col-span-12 lg:col-span-8'>
                    <IncredibleTurkey />
                </div>

                <div className='col-span-12 lg:col-span-4'>
                    <Form />
                    
                </div>

            </div>
        </div>
    );
};

export default SingleDestination;