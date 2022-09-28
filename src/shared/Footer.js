import React from "react";
import logo from "../../src/assets/images/footer/Logo.png";
import visa from "../../src/assets/images/footer/VISA.png";
import mastercard from "../../src/assets/images/footer/Mastercard.png";
import amex from "../../src/assets/images/footer/amex.png";
import paypal from "../../src/assets/images/footer/Paypal.png";
import linkedin from "../../src/assets/images/footer/linkedin.png"
import facebook from "../../src/assets/images/footer/Facebook.png"
import instagram from "../../src/assets/images/footer/Instagram.png"
import youtube from "../../src/assets/images/footer/Youtube.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mb-4">
      <div className="container ">
        <div>
          <p className="text-center text-accent font-normal text-[32px] lg:text-[64px]  font-quentin leading-[48px]  lg:leading-[86px] lg:mb-[64px] mb-[30px]">
            Make memories with us
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-4">
            <div>
              <img
                className="lg:mx-0 w-max mx-auto"
                src={logo}
                alt=""
                srcSet=""
              />
              <p className="text-tertiary text-[16px] font-nunito font-normal leading-[20px] lg:pr-6 lg:text-left text-center">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
              </p>
            </div>
            <div className="flex gap-3 mt-5 lg:mx-0 w-max mx-auto">
              <img src={visa} alt="" srcSet="" />
              <img
                src={mastercard}
                alt=""
                srcSet=""
              />
              <img src={amex} alt="" srcSet="" />
              <img src={paypal} alt="" srcSet="" />
            </div>
          </div>

          <div className="lg:col-span-3 md:col-span-4 col-span-6 lg:mb-[40px] mb-[24px]">
            <div>
              <p className="font-nunito font-[800] text-[#393E50] lg:text-[16px] text-[14px] leading-[20px] pb-[10px] footer_item">
                Inspiration For Tourcode
              </p>
              <span className="w-[calc(100%-80%)] h-[1px] bg-[#5C5C5C] md:inline-block mb-[32px] hidden"></span>
            </div>

            <ul className="flex flex-col gap-[14px] text-[16px] text-[#747474] font-[400] font-poppins leading-[22px]">
              <Link to="#"> Ladhak </Link>
              <Link to="#"> Dubai </Link>
              <Link to="#"> Edinburgh </Link>
              <Link to="#"> Kilimanjaro </Link>
              <Link to="#"> Beijing </Link>
              <Link to="#"> Miyajima </Link>
              <Link to="#"> Sydney </Link>
            </ul>
          </div>

          <div className="lg:col-span-2 md:col-span-4 col-span-6">
            <div>
              <p className="font-nunito font-[800] text-[#393E50] lg:text-[16px] text-[14px] leading-[20px] md:text-left text-right pb-[10px] footer_item">
                Quick Links
              </p>
              <span className="w-[calc(100%-80%)] h-[1px] bg-[#5C5C5C] md:inline-block mb-[32px] hidden"></span>
            </div>

            <ul className="flex flex-col gap-[14px] md:text-left text-right text-[16px] text-[#747474] font-[400] font-poppins leading-[22px]">
                <Link to="/">Home</Link>
                <Link to="/destination">Destinations</Link>
                <Link to="/gallery">GALLERY</Link>
                <Link to="/about">About</Link>
                <Link to="#"> Terms & Conditions </Link>
                <Link to="#"> License </Link>
            </ul>
          </div>

          <div className="lg:col-span-3 md:col-span-4 col-span-12">
            <div>
              <h3 className="font-nunito font-[800] text-[#393E50] lg:text-[16px] text-[14px] leading-[20px] pb-[10px] footer_item">
                Get in touch
              </h3>
              <span className="w-[calc(100%-80%)] h-[1px] bg-[#5C5C5C] md:inline-block mb-[32px] hidden"></span>
            </div>

            <div className="lg:text-[16px] text-[14px] text-[#747474] font-[400] font-poppins gap-[14px] gap-x-16 leading-[32px] mb-[40px]">
              <p>
                Email:
                <Link to="mailto:info@trouelish.com">info@trouelish.com</Link>
              </p>
              <p>
                Phone: <Link to="callto:+12345678900">+1 234 567 89 00</Link>
              </p>
              <p>
                Location: 120/A Street Address, Los Angel,
                <br />
                USA, 1612
              </p>
            </div>
          </div>
        </div>
        <hr />

        <div className="flex flex-col lg:flex-row items-center gap-5 justify-between mt-[30px]">
          <p className="text-[#747474] font-nunito font-[600] text-[14px] leading-[16px]">
            © 2022 Tourelish. All Rights Reserved
          </p>

          <div className="flex gap-3">
            <Link to="#">
              <img src={linkedin} alt="" srcSet="" />
            </Link>
            <Link to="#">
              <img src={facebook} alt="" srcSet="" />
            </Link>
            <Link to="#">
              <img
                src={instagram}
                alt=""
                srcSet=""
              />
            </Link>
            <Link to="#">
              <img src={youtube} alt="" srcSet="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
