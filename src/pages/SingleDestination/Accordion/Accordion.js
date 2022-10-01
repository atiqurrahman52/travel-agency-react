import React, { useState } from "react";

const accordions = [
  {
    id: 0,
    title: "Day 1 - Turkey ",
    details:
      " ONE Rebum dolor magna ipsum sit aliquyam ea sanctus, clistet dolor.",
  },
  {
    id: 1,
    title: "Day 2 - Turkey ",
    details:
      " TWO Rebum dolor magna ipsum sit aliquyam ea sanctus, clistet dolor.",
  },
  {
    id: 2,
    title: "Day 3 - Turkey ",
    details:
      " THREE Rebum dolor magna ipsum sit aliquyam ea sanctus, clistet dolor.",
  },
  {
    id: 3,
    title: "Day 4 - Turkey ",
    details:
      " FOUR Rebum dolor magna ipsum sit aliquyam ea sanctus, clistet dolor.",
  },
  {
    id: 4,
    title: "Day 5 - Turkey ",
    details:
      " FIVE Rebum dolor magna ipsum sit aliquyam ea sanctus, clistet dolor.",
  },
];

const Accordion = () => {
  // const [data, setData] = useState(accordions);
  const [show, setShow] = useState(false);
  return (
    <div className="container">
      <h1>Accordion</h1>

      {accordions.map((e) => {
        console.log(e.title);
        console.log(e.details);
        <div>
          <h2>{e.title}</h2>
          <p>{e.details}</p>
        </div>
      })}
    </div>
  );
};

export default Accordion;
