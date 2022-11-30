import { CaretDown } from "phosphor-react";
import React, { useState } from "react";
import { tourItineraryData } from "../../data/singleDestination/tourItineraryData";

const Accordion = () => {
  const [accordionActive, setAccordionActive] = useState(0);

  return (
    <div className="mt-10 space-y-6">
      <h3 className="md:text-left text-center text-[#393E50] md:text-[40px] text-[24px] font-nunito font-extrabold mb-6 md:mb-9 leading-[48px]">
        Tour Itinerary
      </h3>

      {tourItineraryData.map(({ id, title, description }) => (
        <div
          key={id}
          onClick={() => setAccordionActive(id === accordionActive ? "" : id)}
          className={`shadow-[0px_0px_20px_0px_#FDF3F6] rounded-[10px] ${
            id === accordionActive
              ? "bg-accent text-white rounded-b-none"
              : "bg-white text-[#D41B4B]"
          }`}
        >
          <div className="flex items-center justify-between lg:text-xl py-2.5 px-5 cursor-pointer">
            <p>{title}</p>
            <CaretDown
              size={25}
              className={`${
                id === accordionActive &&
                "rotate-180 transition-all duration-500"
              }`}
            />
          </div>
          {id === accordionActive && (
            <p
              key={id}
              className="bg-white text-secondary text-sm lg:text-base p-5"
            >
              {description}
            </p>
          )}
        </div>
      ))}
      <hr />
    </div>
  );
};

export default Accordion;
