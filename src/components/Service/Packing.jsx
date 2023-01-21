import React from "react";
import packing from "../../image/Packing .svg";
import line from "../../image/Line.png";
import { FaBoxOpen } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";

export const Packing = () => {
  return (
    <div>
      {" "}
      <div className="flex w-[1920px] ">
        {/* line */}
        <img src={line} alt="" className=" absolute " />
        <div className=" relative flex justify-between ">
          {/* for svg */}
          <div className=" mr-[270px] mt-[164px] ">
            <img src={packing} alt="" />
          </div>
          {/* for text */}
          <div className=" flex justify-start mt-[59px]">
            <div className="">
              <div className=" w-[782px]">
                <p className=" font-Montserrat Alternate text-center font-bold text-[52px] text-white">
                  Packaging industry for 
                </p>
                <div className=" ml-[270px] flex ">
                <p className="font-Montserrat Alternate  font-bold text-[52px] text-white ">business</p>
                <p className="  flex w-[682px] font-Montserrat Alternate  font-bold  text-transparent text-[55px]  bg-clip-text bg-gradient-to-r from-[#E65C00] to-[#F9D423]">
                  growth
                </p>
                </div>
              </div>
              <p className=" text-right text-[27px] text-white font-medium w-[684px] ">
                We provide packaging solutions to help your business flourish
                with boosted outreach. Ensuring the protection, containment, and
                communication of packaged projects is our foremost priority.
              </p>
              <div className=" flex justify-end w-[684px] mt-4">
                <button
                  type="button"
                  class=" flex justify-start text-white hover:text-[#EACDA3] border-2 border-[#EACDA3] hover:bg-[#fbd8a8] focus:ring-4 focus:outline-none focus:ring-[#EACDA3] font-medium rounded-3xl text-sm px-12 py-3 text-center mr-2 mb-2 dark:border-[#f1ce9e] dark:text-[#f8bf6f] dark:hover:text-white dark:hover:bg-[#ecc184] dark:focus:ring-[#f0c180]"
                >
                  Read more
                  <p className=" text-lg text-white absolute ml-[120px]">
                    <BsCircle />
                  </p>
                </button>
              </div>
            </div>
            <div className="  mt-10">
              <p className="text-white  text-4xl bg-gradient-to-tr from-[#EACDA3] to-[#D6AE7B] shadow-md shadow-[#D6AE7B] rounded-full p-6">
                {" "}
                <FaBoxOpen classname="" />
              </p>
            </div>
          </div>
          {/* line */}
          <img src={line} alt="" className="absolute mt-[510px] " />
        </div>
      </div>
    </div>
  );
};
