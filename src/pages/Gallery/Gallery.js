import React from "react";
import GalleryHeader from "./GalleryHeader";
import LoadMore from "./LoadMore";
import Galleries from "./Galleries";
import Loader from "../../shared/Loader";


const Gallery = () => {
  return (
    <>
      
      <GalleryHeader />

      <Galleries />
      <LoadMore />
     
    </>
  );
};

export default Gallery;
