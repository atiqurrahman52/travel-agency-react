import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Gallery from "../pages/Gallery/Gallery";


const Loader = () => {
  const [loading, setLoading] = useState(false);

//   const style = {
//     position: "fixed",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//   };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="absolute left-0 top-0 h-screen w-screen  flex justify-center items-center">
      {loading ? (
        <ClipLoader color={"#d63674"} loading={loading} size={30} />
      ) : (
        <div>
     
            {/* <Gallery /> */}
           
        </div>
      )}
    </div>
  );
};

export default Loader;
