import React, { useState } from "react";
import ReactImageViewer from "./ReactImageViewer";

const ImageViewer = ({ img }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = (e) => {
    setIsOpen(true);
  };

  const handleImageClose = (e) => {
    setIsOpen(false);
  };

  return (
    <>
      <img alt="PICTU" onClick={() => handleImageClick()} src={img} />
      <ReactImageViewer
        imgs={img}
        isOpen={isOpen}
        onClose={() => handleImageClose()}
      />
    </>
  );
};

export default ImageViewer;
