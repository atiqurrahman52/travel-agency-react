import React from "react";
import Featured from "../Home/Featured";
import Accordion from "./Accordion";

// import AccordionTurkey from "./AccordionTurkey";
import DestinationGallery from "./DestinationGallery";
import DestinationHeader from "./DestinationHeader";
import Form from "./Form";
// import IncredibleTurkey from "./IncredibleTurkey";
import ReladedDestination from "./ReladedDestination";
import Tags from "./Tags";

const SingleDestination = () => {
  return (
    <div className="pt-0">
      <DestinationHeader />
      <div className="grid grid-cols-12 gap-6 container">
        <div className="col-span-12 lg:col-span-8">
     
          <Accordion />

          <DestinationGallery />
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
