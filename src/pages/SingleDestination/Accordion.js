import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
// import { accordions } from './AccordionData';

const accordions = [
  {
    id: 0,
    title: "Day 1 - Turkey ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit",
  },
  {
    id: 1,
    title: "Day 2 - Turkey ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit",
  },
  {
    id: 2,
    title: "Day 3 - Turkey ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit",
  },
  {
    id: 3,
    title: "Day 4 - Turkey ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit",
  },
  {
    id: 4,
    title: "Day 5 - Turkey ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit",
  },
];

const Accordion = () => {
  const [accordionActive, setAccordionActive] = useState(0);

  return (
    <div className="mt-10 space-y-6">
      <h3 className="md:text-left text-center text-[#393E50] md:text-[40px] text-[24px] font-nunito font-extrabold mb-6 md:mb-9 leading-[48px]">
        Tour Itinerary
      </h3>
      {accordions.map(({ id, title, description }) => (
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
            <RiArrowDownSLine
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
