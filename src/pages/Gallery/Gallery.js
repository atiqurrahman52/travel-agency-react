import React, { useEffect } from "react";
import GalleryHeader from "./GalleryHeader";
import LoadMore from "./LoadMore";
import Galleries from "./Galleries";
import Loader from "../../shared/Loader";


const Gallery = () => {
  useEffect(() =>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
},[])
  return (
    <>
      
      <GalleryHeader />

      <Galleries />
      <LoadMore />
     
    </>
  );
};

export default Gallery;
