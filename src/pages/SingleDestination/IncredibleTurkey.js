import { Calendar } from "phosphor-react";
import React from "react";
import location from "../../assets/images/single-destination/location.svg";

import { incredibleTurkies } from "../../data/singleDestination/incredibleTurkiesData";

const IncredibleTurkey = () => {
  return (
    <div>
      <div className="mb-10">
        <h3 className="text-[#393E50] font-nunito font-extrabold lg:text-[40px] text-[20px] lg:leading-[48px] leading-[28px] mb-4">
          Incredible Turkey | 6Day-5Night
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={location} alt="" />

            <p className="text-[#393E50] lg:text-[16px] text-[14px] font-nunito font-semibold leading-[20px]">
              Turkey
            </p>
          </div>
          <div>
            <p className="text-[#D00338E5] lg:text-[32px] text-[16px] font-nunito font-extrabold lg:leading-[40px] leading-[22px]">
              $56780000
            </p>
          </div>
        </div>
      </div>
      <hr />

      <div className="grid grid-cols-12 gap-6 my-[45px]">
        {incredibleTurkies.map((item) => (
          <div key={item.id} className="lg:col-span-3 col-span-6">
            <div className="flex gap-1.5 p-1 flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
              <Calendar className="text-accent" size={32} />
              <div className="text-center md:text-left space-y-3">
                <h3 className="text-[#393E50] text-[16px] font-nunito font-extrabold leading-[20px]">
                  {item.title}
                </h3>
                <p className="text-[#747474] lg:text-[16px] text-[14px] font-nunito font-semibold lg:leading-[20px] leading-[16px]">
                  {item.details}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr />
    </div>
  );
};

export default IncredibleTurkey;
