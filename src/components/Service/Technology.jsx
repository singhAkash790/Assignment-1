import React from "react";
import tech from "../../image/Tech.svg";
import line from "../../image/Line.png";
import {GrCubes} from 'react-icons/gr'
import {BsCircle} from 'react-icons/bs'



export const Technology = () => {
  return (
    <div className="flex w-[1920px] pt-10">
        {/* line */}
      <img src={line} alt="" className=" absolute " />
      <div className=" relative flex justify-between ">
        {/* for svg */}
        <div className=" mr-[155px] mt-[164px] ">
          <img src={tech} alt="" />
        </div>
        {/* for text */}
        <div className=" flex justify-start mt-[59px]">
          <div className="">
           <div className=" w-[782px]">
           <p className=" font-Montserrat Alternate font-bold text-[50px] text-white">
              Unleashing the strength of{" "}
            </p>
            <p className=" justify-end flex w-[682px] font-Montserrat Alternate font-bold  text-transparent text-[50px]  bg-clip-text bg-gradient-to-r from-[#E65C00] to-[#F9D423]">
              Technology
            </p>
           </div>
            <p className=" text-right text-[27px] text-white font-medium w-[684px] ">
              We believe in innovation and excellence hence , our approach in
              the field of technology is focused to relish incredible customer
              experience and stabilising business models for tomorrow.
            </p>
            <div className=" flex justify-end w-[684px] mt-4">
            <button
              type="button"
              class=" flex justify-start text-white hover:text-[#BF5AE0] border border-[#BF5AE0] hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-3xl text-sm px-12 py-3 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
            >
              Read more
             <p className=" text-lg text-white absolute ml-[120px]">
              <BsCircle/>

             </p>
            </button>
            </div>
          </div>
          <div className="  mt-10">
            <p className=" text-white stroke-white fill-white text-4xl bg-gradient-to-tr from-[#BF5AE0] to-[#A811DA] shadow-md shadow-[#BF5AE0] rounded-full p-6">  <GrCubes classname='text-white' /></p>
             </div>
        </div>
         {/* line */}
      <img src={line} alt="" className="absolute mt-[510px] " />
      </div>
    </div>
  );
};
