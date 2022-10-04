import React from 'react';
import '../../css/single-destination.css';
const Form = () => {
    return (
     
              <div className="">
                <form
                  action=""
                  className="p-[33px] rounded-[20px] bg-[#FFFFFF] shadow-[0px_0px_40px_rgba(0,0,0,0.05)]"
                >
                  <div>
                    <input
                      className="appearance-none block w-full text-[14px] leading-[16px] bg-[#F8F8F8] rounded-[8px] p-[16px] mb-[16px] border-0 "
                      id=""
                      type="text"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <input
                      className="appearance-none block w-full text-[14px] leading-[16px] bg-[#F8F8F8] rounded-[8px] p-[16px] mb-[16px] border-0 focus:border-0"
                      id=""
                      type="email"
                      placeholder="Your Email"
                    />
                  </div>
  
                  <div>
                    <input
                      className="appearance-none block w-full text-[14px] leading-[16px] bg-[#F8F8F8] rounded-[8px] p-[16px] mb-[16px] border-0 focus:border-0"
                      id=""
                      type="tel"
                      placeholder="Phone"
                    />
                  </div>
  
                
                  <div className="relative">
                    
                    <div>
                      <input
                        datepicker=""
                        type="text"
                        className="appearance-none bg-[#F8F8F8]  text-[14px] rounded-lg mb-[16px] w-full p-[16px] datepicker-input border-0 focus:border-0"
                        placeholder="Choose Date of Travel"
                      />
                    </div>
                  </div>
  
                  <div>
                    <input
                      className="appearance-none block w-full  leading-[16px] bg-[#F8F8F8] rounded-[8px] p-[16px] mb-[16px] border-0 focus:border-0"
                      id=""
                      type="text"
                      placeholder="No of People"
                    />
                  </div>
  
                  <div>
                    <textarea
                      className="appearance-none block text-[14px] leading-[16px] bg-[#F8F8F8] rounded-[8px] p-[16px] mb-[16px] w-full border-0 focus:border-0"
                      id=""
                      placeholder="Message"
                      name=""
                   
                      cols="30"
                      rows="5"
                    ></textarea>
                  </div>
  
                  <button
                    className="text-[#FFFFFF] text-[16px] font-nunito font-semibold leading-[16px] p-3 w-full bg-[#D00338E5] rounded-[8px]"
                  >
                    Send Enquiry
                  </button>
                </form>
              </div>
          
    );
};

export default Form;