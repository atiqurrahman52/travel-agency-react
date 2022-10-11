import React, { useEffect } from "react";
import GalleryHeader from "./GalleryHeader";
import Galleries from "./Galleries";
// import Loader from "../../shared/Loader";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <GalleryHeader />

      <Galleries />
    </>
  );
};

export default Gallery;
