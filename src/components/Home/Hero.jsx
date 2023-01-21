import React from 'react'
import LOGO from "../../image/logo .png"
import IMG from "../../image/Group 16.png"
import { Header } from './Header'
import { BsTwitter} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'


export const Hero = () => {
  return (
    <div className="h-auto w-[1960px]  bg-cover-pic justify-center  bg-no-repeat bg-cover bg-center overflow-hidden ">
      {/* Logo and header */}
      <div className=" flex justify-between items-center w-[1960] pt-8 px-12  ">
        <img src={LOGO} alt="" className="h-[170px] " />
        <Header />
      </div>
      {/* mddile part */}
      <div className=" flex justify-center items-center pt-[127px]">
        {/* soical toggel */}
        <div className="">
          <ul className="mt-[140px]  pr-[313px] ">
            <li className="text-white text-3xl">
              <BsTwitter />
            </li>
            <li className="text-white text-3xl py-[58.5px]">
              <AiFillInstagram />
            </li>
            <li className="text-white text-3xl">
              <FaFacebookF />
            </li>
          </ul>
        </div>
        {/* text area */}
        <div className="">
          <div className=" uppercase font-extrabold text-center  Use tracking-wide text-transparent text-[107px] w-[977px] bg-clip-text bg-gradient-to-r from-[#E65C00] to-[#F9D423]">
            <p className=" font-AA">Ramaera Industries</p>
          </div>
          <div className="  w-[1124px] text-center text-[44px] text-white">
            An incredible multi-industrial approach oriented towards financial
            independence, customer focus and serving the best quality to the
            people.
          </div>
          <div className=" flex justify-center mt-10">
            <button
              type="button"
              class=" flex font-Montserrat Alternate  text-white text-2xl bg-gradient-to-r from-[#F9D423] to-[#E65C00] hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
            >
              Explore More
            </button>
          </div>
        </div>
        {/* pagination */}
        <div className=" ml-[260px] mt-[200px]">
          <ul className="">
            <li className="h-[85px] w-[2px] ml-6 border-white border-1 bg-white/30"></li>
            <li className="h-[85px] w-[2px] ml-6 border-white border-1 bg-white my-5"></li>
            <li className="h-[85px] w-[2px] ml-6 border-white border-1 bg-white/30"></li>
            <li className=" font-bold text-[40px] mt-10 text-center text-white -rotate-90 ">02</li>
          </ul>
        </div>
        
      </div>
     <div className='flex justify-center '>
     <img src={IMG} alt=""  className=' justify-center'/>

     </div>
    </div>
  );
}
