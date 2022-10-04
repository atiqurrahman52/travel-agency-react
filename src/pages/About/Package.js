import { packages } from "../../data/about/packagesData";

const Package = () => {
  return (
    <div className="mt-11 md:mt-[131px] ">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 mb-[88px]">
          {packages.map(({ id, country, img, pack }) => (
            <div
              key={id}
              className="border border-transparent hover:border-[#D00338E5] transition-all duration-700 rounded-[20px] lg:shadow-[0_0_40px_rgba(0,0,0,0.1)] shadow-[0_0_18px_rgba(0,0,0,0.1)] p-4 max-h-[257px] h-full col-span-1 flex items-center justify-center flex-col gap-2"
            >
              <img className="h-16 lg:h-36" src={img} alt="" />
              <h3 className="text-[#393E50] font-nunito font-extrabold lg:text-[24px] text-[12px] md:leading-[30px] leading-[14px]">
                {country}
              </h3>
              <p className="text-[#747474] lg:text-[16px] text-[8px] font-nunito font-semibold lg:leading-[20px] leading-[9px]">
                {pack}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Package;
