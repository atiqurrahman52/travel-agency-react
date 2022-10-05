import { useState } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "../../css/pagination.css";

const Location = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState(items);
  
  const  handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  }
  
  // 0, 10, 20, 30....
  const PER_PAGE = 4;
  const offset = currentPage * PER_PAGE;
  // console.log("offset", offset);

  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <div className="container">
      <div className="mt-10 lg:-mt-20 grid grid-cols-1  md:grid-cols-2  lg:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-20">
        {data
          .slice(offset, offset + PER_PAGE)
          .map(({ id, country, details, days, price, img }) => (
            <div key={id} className="">
              <div
                className="relative group overflow-hidden rounded-[20px]"
                
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
    </div>
  );
};

export default Location;
