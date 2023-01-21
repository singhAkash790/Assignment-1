import React from "react";
import hotel from "../../image/Hotel.png";
import line from "../../image/Line.png";
import { FaBed} from "react-icons/fa";
import { BsCircle } from "react-icons/bs";

export const Hotel = () => {
  return (
    <div>
    {" "}
    <div className="flex w-[1920px] ">
      {/* line */}
      <img src={line} alt="" className=" absolute " />
      <div className=" relative flex justify-between ">
        {/* for text */}
        <div className="mt-[336px] ml-4">
          <p className="text-white  text-4xl bg-gradient-to-tr from-[#FFE259] to-[#FFA751] shadow-[#FFE259] shadow-md rounded-full p-6">
            {" "}
            <FaBed />
          </p>
        </div>
        <div className=" flex justify-start mt-[310px] ml-5">
          <div className="">
            <div className=" w-[775px] font-bold  text-transparent text-[52px]  bg-clip-text bg-gradient-to-r from-[#FFE259] to-[#FFA751]">
              <p className=" font-Montserrat Alternate   ">
              Making 

              </p>
              <p className="  flex w-[682px] font-Montserrat Alternate font-bold  text-transparent text-[52px]  bg-clip-text bg-gradient-to-r from-[#FFE259] to-[#FFA751]">
              accommodations easier
              </p>
            </div>
            <p className=" text-left text-[27px] text-white font-medium w-[684px] ">
            Introducing capsule hotels in places of extreme need such as examination centres and hospitals to provide comfortable and convenient accommodation at pocket friendly prices .

            </p>
            <div className="  w-[684px] mt-4">
            <button
                type="button"
                class=" flex justify-start text-white hover:text-[#FFE259] border-2 border-gradient-tb from-[#FFE259] to-[#FFA751] hover:bg-[#FFA751] focus:ring-4 focus:outline-none focus:ring-[#FFA751] font-medium rounded-3xl text-sm px-12 py-3 text-center mr-2 mb-2 dark:border-[#FFA751] dark:text-[#FFA751] dark:hover:text-white dark:hover:bg-[#FFA751] dark:focus:ring-[#FFA751]"
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
        <div className=" ml-[310px]  ">
          <img src={hotel} alt="" />
        </div>

        {/* line */}
        <img src={line} alt="" className="absolute mt-[510px] " />
      </div>
    </div>
  </div>
  )
}
