import React from "react";
import { Link } from "react-router-dom";
import notfound from "../assets/images/not found/notfound.webp";

const NotFound = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <div className="mt-28 flex items-center justify-center">
              <img src={notfound} alt="" />
            </div>
            <Link
              to="/"
              className="flex justify-center items-center sm:w-40 md:w-64 mx-auto bg-[#D41B4B] p-2 text-sm sm:text-base md:text-xl text-white no-underline mt-5 mb-2 rounded-sm"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
