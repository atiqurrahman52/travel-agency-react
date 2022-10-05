import { useEffect, useState } from "react";

import EventBanner from "../Home/EventBanner";
import AllDestination from "./AllDestination";
import Header from "./Header";
import Location from "./Location";

const Destination = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("location.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [data]);

  return (
    <>
      {data.length > 0 ? (
        <div>
          <Header />
          <Location items={data} />
          <EventBanner />
          <AllDestination items={data} />
        </div>
      ) : (
        <div className="absolute left-0 top-0 h-screen w-screen bg-white flex justify-center items-center">
          Loading...
        </div>
      )}
    </>
  );
};

export default Destination;
