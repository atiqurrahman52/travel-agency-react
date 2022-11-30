import React, { useEffect } from "react";
import Featured from "../Home/Featured";
import Accordion from "./Accordion";
import DestinationHeader from "./DestinationHeader";
import Form from "./Form";
import GalleryDestination from "./GalleryDestination";
import IncredibleTurkey from "./IncredibleTurkey";
import ReladedDestination from "./ReladedDestination";
import Tags from "./Tags";

const SingleDestination = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    document.title = "Tourelish | Destination ";
  }, []);
  return (
    <div className=" pt-10 md:pt-0">
      <DestinationHeader />
      <div className="grid grid-cols-12 gap-6 container">
        <div className="col-span-12 lg:col-span-8">
          <IncredibleTurkey />
          <Accordion />

          <GalleryDestination />
        </div>

        <div className="col-span-12 lg:col-span-4">
          <Form />
          <ReladedDestination />
          <Tags />
        </div>
      </div>
      <Featured />
    </div>
  );
};

export default SingleDestination;
