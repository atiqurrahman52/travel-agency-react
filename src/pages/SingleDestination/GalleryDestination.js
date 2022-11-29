import React, { useState } from "react";
import ImgsViewer from "react-images-viewer";
import Slider from "react-slick";

// data
import { galleriesData } from "../../data/gallerydestination/gallerydestinationData";

const GalleryDestination = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currImg, setCurrImg] = useState(0);
  const imagesLeft = galleriesData.length - 5;

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  console.log(galleriesData);
  return (
    <div className="py-6 md:py-10 gallery-image">
      <h3 className="md:text-left text-center text-[#393E50] md:text-[40px] text-2xl font-nunito font-extrabold leading-[48px] pb-4 md:pb-10">
        Gallery
      </h3>

      <div className="hidden md:grid md:grid-flow-col md:grid-rows-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {galleriesData.slice(0, 5).map((data, i) => (
          <div
            key={i}
            onClick={(e) => {
              setIsOpen(true);
              setCurrImg(i);
            }}
            className={`relative rounded-lg cursor-pointer w-full h-full overflow-hidden ${
              i === 0
                ? "md:col-span-2 md:row-span-2 h-full"
                : "h-[192px] md:h-[142px]"
            }`}
          >
            <img
              src={data.src}
              // src={require(`./../../assets/images/single-destination/${data.src}.png`)}
              alt=""
              className="rounded-[10px] w-ful h-full"
            />
            {i === 4 && (
              <div className="absolute top-0 left-0 h-full w-full backdrop-blur-[2px] bg-white/10 flex justify-center items-center font-bold text-white text-2xl">
                <p className="font-extrabold">{imagesLeft}</p> +
              </div>
            )}
          </div>
        ))}

        <ImgsViewer
          imgs={galleriesData}
          currImg={currImg}
          isOpen={isOpen}
          showThumbnails={true}
          onClickThumbnail={(index) => setCurrImg(index)}
          onClickPrev={(e) => setCurrImg(currImg - 1)}
          onClickNext={(e) => setCurrImg(currImg + 1)}
          onClose={() => setIsOpen(false)}
        />
      </div>

      <div className="md:hidden">
        <Slider {...settings} className="gallerySLider">
          {galleriesData.map((data, i) => (
            <div key={i} className="relative h-[192px] w-full">
              <img
                // src={require(`./../../assets/images/single-destination/${data.src}.png`)}
                src={data.src}
                alt=""
                className="rounded-[10px] w-full h-full"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default GalleryDestination;
