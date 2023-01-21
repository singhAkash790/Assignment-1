import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { MdKeyboardArrowDown } from 'react-icons/md';
export const Header = () => {
  return (
    <div className="bg-white/30 backdrop-blur-sm border-2 border-white rounded-xl px-10 py-6 w-[1550px] mr-10 ">
        <div className=' flex justify-between items-center gap-[370px]'>
     <ul className=" flex justify-center items-center gap-20">
        <li className=" uppercase font-normal text-[27px] font-Montserrat Alternate text-white hover:underline ease-out">Home</li>
        <li className=" uppercase font-normal text-[27px] font-Montserrat Alternate text-white flex justify-center items-center hover:underline ease-out ">our industries<MdKeyboardArrowDown/></li>
        <li className=" uppercase font-normal text-[27px] font-Montserrat Alternate text-white flex justify-center items-center hover:underline ease-out">our companies<MdKeyboardArrowDown/></li>
     </ul>
     <ul className=" flex justify-center items-center  gap-11">
        <li className=" font-normal text-[23px] text-white">Career</li>
        <li className="font-normal text-[23px] text-white">Contact</li>
        <li className="font-normal text-[23px] text-white"><BiSearch/></li>
     </ul>
    </div>
    </div>
  )
}
