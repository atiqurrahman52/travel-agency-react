import React from "react";
import GalleryHeader from "./GalleryHeader";
import LoadMore from "./LoadMore";
import Galleries from "./Galleries";

const Gallery = () => {
  return (
    <div>
      <GalleryHeader />

      <Galleries />

      <LoadMore />
    </div>
  );
};

export default Gallery;
