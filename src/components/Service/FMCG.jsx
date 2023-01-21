import React from "react";
import Fmcg from "../../image/Fmcg.svg";
import line from "../../image/Line.png";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { BsCircle } from "react-icons/bs";

export const FMCG = () => {
  return (
    <div>
      {" "}
      <div className="flex w-[1920px]  ">
        {/* line */}
        <img src={line} alt="" className=" absolute " />
        <div className=" relative flex justify-between ">
          {/* for text */}
          <div className="mt-[336px] ml-4">
            <p className="text-white  text-4xl bg-gradient-to-tr from-[#F2EFD3] to-[#358D82] shadow-[#358D82] rounded-full p-6">
              {" "}
              <MdOutlineAddShoppingCart />
            </p>
          </div>
          <div className=" flex justify-start mt-[310px] ml-5">
            <div className="">
              <div className=" w-[782px] font-bold  text-transparent text-[55px]  bg-clip-text bg-gradient-to-r from-[#F2EFD3] to-[#358D82]">
                <p className=" font-Montserrat Alternate  text-white ">
                  Offering the best with
                </p>
                <p className="  flex w-[682px] font-Montserrat Alternate font-bold  text-transparent text-[55px]  bg-clip-text bg-gradient-to-r from-[#F2EFD3] to-[#358D82]">
                  FMCG industry
                </p>
              </div>
              <p className=" text-left text-[27px] text-white font-medium w-[684px] ">
                Ramaera FMCG industry has commenced an extensive range of FMCG
                to make your days more than ordinary. We plan to offer you
                nothing less than the best.
              </p>
              <div className=" flex  w-[684px] mt-4">
                <button
                  type="button"
                  class=" flex justify-start text-white hover:text-[#358D82] border-2 border-[#F2EFD3] hover:bg-[#358D82] focus:ring-4 focus:outline-none focus:ring-[#358D82] font-medium rounded-3xl text-sm px-12 py-3 text-center mr-2 mb-2 dark:border-[#358D82] dark:text-[#358D82] dark:hover:text-white dark:hover:bg-[#358D82] dark:focus:ring-[#358D82]"
                >
                  Read more
                  <p className=" text-lg text-white absolute left-[290px]">
                    <BsCircle />
                  </p>
                </button>
              </div>
            </div>
          </div>
          {/* for svg */}
          <div className=" ml-[240px]  ">
            <img src={Fmcg} alt="" />
          </div>

          {/* line */}
          <img src={line} alt="" className="absolute mt-[510px] " />
        </div>
      </div>
    </div>
  );
};
