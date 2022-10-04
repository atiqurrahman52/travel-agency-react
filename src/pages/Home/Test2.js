import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Test2 = () => {
  // const [tabActive, setTabActive] = useState(0);
  // const [tabData, setTabData] = useState([]);
  const [data, setData] = useState([]);
  const [tabActive, setTabActive] = useState(0);
  const [tabData, setTabData] = useState({});

  useEffect(() => {
    fetch("location.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, [tabData,tabActive]);

  console.log(tabActive);
  console.log(tabData);

  return (
    // <h2>Test2</h2>
    // <div className="py-40 container grid grid-cols-3 gap-5">
      
    //   {data?.map(({id, country, details, days, price, img, category}) => (
    //     <div> 

    //     </div>
       
       
    //   ))}
    //    <div key={id}>
    //       <h3>{country}</h3>
    //      <div> <img src={require(`./../../assets/images/destination/${img}`)} alt="" /> </div>
    //     </div>
    // </div>
//     <p
//     key={id}
//     onClick={() => setTabActive(id)}
//     className={`${id ===tabActive ? "bg-blue-500" : "bg-blue-300"} py-1.5 px-4 rounded text-white cursor-pointer`}
//   >
//     {category}
//   </p>

    <div className="py-40 container">
      {/* <div className=" "> */}
        {data.map(({ id,country,details,days,price, category ,img}) => (
            <div >
                <h2> Category</h2>

            <div>
            <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-2 gap-5" >
          
          <div
              className="relative group overflow-hidden rounded-[20px] itemBox"
              
            >
              <img
                className="w-full lg:h-max-[350px] h-max-[192px] group-hover:scale-125 transition-all duration-[2000ms]"
                src={require(`./../../assets/images/destination/${img}`)}
                alt=""
              />

              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#00000000]/0 to-[#00000000]/100 p-4 lg:p-11">
                <div className="flex items-start justify-between flex-col h-full">
                  <Link
                    to="/single-destination"
                    className="flex items-center justify-center gap-2"
                  >
                    <span className="w-[10px] h-[10px] rounded-full bg-[#F30D60] inline-block"></span>
                    <p className="font-nunito font-extrabold lg:text-[16px] text-[14px] leading-[20px] text-[#FFFFFF]">
                      {country}
                    </p>
                  </Link>
                  <div>
                    <div className="mb-3">
                      <Link to="/single-destination">
                        <p className="text-[#FFFFFF] lg:text-[24px] text-[16px] font-nunito font-extrabold lg:leading-[30px] leading-[22px]">
                          {details}
                        </p>
                      </Link>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                      <p className="font-nunito font-extrabold text-[#FFFFFF]/60 text-[16px] leading-[20px]">
                        {days}
                      </p>
                      <p className="font-nunito font-extrabold text-[#FFFFFF] text-[16px] leading-[20px]">
                        {price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
       </div>
                 </div>
            </div>
           
            
            ))}
          
       
      {/* </div> */}

     
    </div>
  );
};

export default Test2;
