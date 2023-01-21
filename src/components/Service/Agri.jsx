import React from "react";
import agri from "../../image/Agri .svg";
import line from "../../image/Line.png";
import { GiPlantRoots } from "react-icons/gi";
import { BsCircle } from "react-icons/bs";

export const Agri = () => {
  return (
    <div>
    {" "}
    <div className="flex w-[1920px] ">
      {/* line */}
      <img src={line} alt="" className=" absolute " />
      <div className=" relative flex justify-between ">
        {/* for svg */}
        <div className=" mt-[164px] ">
          <img src={agri} alt="" />
        </div>
        {/* for text */}
        <div className=" flex justify-start mt-[59px] ml-[314px]">
          <div className="">
          <div className=" w-[782px]">
                <p className=" font-Montserrat Alternate ml-3 font-bold text-[52px] text-white">
                Agri-business to bestow 

                </p>
                <p className=" justify-end flex w-[682px] font-Montserrat Alternate font-bold  text-transparent text-[55px]  bg-clip-text bg-gradient-to-r from-[#F7941E] via-[#72C6EF] to-[#00A651]">
                Nature's Love
                </p>
              </div>
            <p className=" text-right text-[27px] text-white font-medium w-[684px] ">
            Our Agri-business industry is established to get you fresh and organic fruits and vegetables with the blessed with the touch of nature

            </p>
            <div className=" flex justify-end w-[684px] mt-4">
              <button
                type="button"
                class="flex justify-start text-white hover:text-[#579181] border-2 border-[#579181] hover:bg-[#5ca08d] focus:ring-4 focus:outline-none focus:ring-[#5ca08d] font-medium rounded-3xl text-sm px-12 py-3 text-center mr-2 mb-2 dark:border-[#5ca08d] dark:text-[#5ca08d] dark:hover:text-white dark:hover:bg-[#5ca08d] dark:focus:ring-[#5ca08d]" >
                Read more
                <p className=" text-lg text-white absolute ml-[120px]">
                  <BsCircle />
                </p>
              </button>
            </div>
          </div>
          <div className=" mt-10">
            <p className="text-white  text-5xl shadow-2xl shadow-[#579181] bg-[#579181] rounded-full p-6">
              {" "}
              <GiPlantRoots classname="" />
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
