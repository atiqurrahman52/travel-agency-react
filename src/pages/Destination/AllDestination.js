import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CaretLeft, CaretRight } from "phosphor-react";
import ReactPaginate from "react-paginate";
import "../../css/pagination.css";
import "../../css/Destination.css";

const AllDestination = ({ items }) => {
  // const [items, setItems] = useState(data);
  const [data, setData] = useState(items);
  const [isActive, setIsActive] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(
      isActive === 0
        ? data.filter((item) => item.category === "europe")
        : filteredData
    );
  }, [data, isActive]);

  const filterItem = (item, i) => {
    setIsActive(i);
    setFilteredData(
      data.filter((currentItem) => currentItem.category === item)
    );
  };

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  // 0, 10, 20, 30....
  const PER_PAGE = 4;
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(filteredData.length / PER_PAGE);

  return (
        <div className="py-10 xl:py-16">
          <div className="container">
            <h3 className="text-[#393E50]  font-nunito font-extrabold lg:text-[32px] text-[16px] lg:leading-[40px] leading-[22px] text-center mb-[32px]">
              Find your Destination from Our Travel Bucket
            </h3>
            {/* <div className="flex md:justify-center justify-start items-center gap-10  text-[#E46D8C] scroll-bar  overflow-x-auto md:overflow-x-visible scrollbar-thumb-blue-600 hover:scrollbar-thumb-red-500 "> */}
            <div className="flex justify-start md:justify-center items-center gap-10  text-[#E46D8C] scroll-bar overflow-x-auto">
              {["europe", "asia", "africa", "north america"].map((item, i) => {
                return (
                  <button
                    key={i}
                    className={`font-nunito capitalize font-extrabold p-2.5 rounded-[5px]  leading-[20px] border ${
                      isActive === i
                        ? "text-white bg-[#F1B4C4] border-[#D00338]"
                        : "text-[#747474] bg-transparent border-transparent"
                    }  cursor-pointer`}
                    onClick={() => filterItem(item, i)}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            <div className="mt-12 md:mt-20 grid grid-cols-1  md:grid-cols-2  lg:grid-cols-2 gap-4 md:gap-6  mb-10 md:mb-20">
              {filteredData
                .slice(offset, offset + PER_PAGE)
                .map(({ id, country, details, days, price, img }) => (
                  <div key={id} className="">
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
                ))}
            </div>

            {filteredData.length > PER_PAGE && (
              <ReactPaginate
                previousLabel={<CaretLeft size={22} />}
                nextLabel={<CaretRight size={22} />}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disable"}
                activeClassName={"pagination__link--active"}
              />
            )}
          </div>
        </div>
  );
};

export default AllDestination;
