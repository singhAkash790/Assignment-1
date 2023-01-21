import React from "react";
import ecomerce from "../../image/ecomerce.png";
import line from "../../image/Line.png";
import { BsCircle, BsFillHouseFill} from "react-icons/bs";
export const Ecommerce = () => {
  return (
    <div>
      {" "}
      <div>
        {" "}
        <div className="flex w-[1920px]  ">
          {/* line */}
          <img src={line} alt="" className=" absolute " />
          <div className=" relative flex justify-between ">
            {/* for text */}
            <div className="mt-[336px] ml-4">
              <p className="text-white  text-4xl bg-gradient-to-tr from-[#9796F0] to-[#FBC7D4] shadow-[#B6DEFA] shadow-md rounded-full p-6">
                {" "}
                <BsFillHouseFill />
              </p>
            </div>
            <div className=" flex justify-start mt-[310px] ml-5">
              <div className="">
                <div className=" w-[782px] font-bold  text-transparent text-[55px]  bg-clip-text bg-gradient-to-r from-[#F2EFD3] to-[#358D82]">
                  <p className=" font-Montserrat Alternate  text-white ">
                  Get all your essentials in 

                  </p>
                  <p className="  flex w-[682px] font-Montserrat Alternate font-bold  text-transparent text-[55px]  bg-clip-text bg-gradient-to-r from-[#B4DFFD] to-[#EFB79B]">
                  one place
                  </p>
                </div>
                <p className=" text-left text-[27px] text-white font-medium w-[684px] ">
                Ramaera Supermart is an online customer oriented marketplace to motivated to provide everything you need right at one place under the comfort of your homes.
 
                </p>
                <div className=" flex  w-[684px] mt-4">
                  <button
                    type="button"
                    class=" flex justify-start text-white hover:text-[#358D82] border-2 border-[#9796F0] hover:bg-[#8584e5] focus:ring-4 focus:outline-none focus:ring-[#8584e5] font-medium rounded-3xl text-sm px-12 py-3 text-center mr-2 mb-2 dark:border-[#8584e5] dark:text-[#8584e5] dark:hover:text-white dark:hover:bg-[#8584e5] dark:focus:ring-[#8584e5]"
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
            <div className=" ml-[140px] bg-blend-screen ">
              <img src={ecomerce} alt="" />
            </div>

            {/* line */}
            <img src={line} alt="" className="absolute mt-[510px] " />
          </div>
        </div>
      </div>
    </div>
  );
};
