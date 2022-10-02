import React from 'react';
import Sydney from './Sydney';
import GalleryHeader from './GalleryHeader';
import Turkey from './Turkey';
import Paris from './Paris';
import Dubai from './Dubai';
import Scotland from './Scotland';
import Tanzania from './Tanzania';
import LoadMore from './LoadMore';

const Gallery = () => {
    return (
        <div className='container'>
            <GalleryHeader />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-[80px] mt-[50px]'>
            <Sydney />
            <Turkey />
            <Paris />
            <Dubai />
            <Scotland />
            <Tanzania />
            
            </div>
            <LoadMore />

       
           
        </div>
    );
};

export default Gallery;