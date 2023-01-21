import React from 'react'
import POLYGON from "../../image/Polygon 3.png"
import POLYGON2 from "../../image/Polygon 4.png"

// import Image from 'react'
export const Heading = () => {
  return (
    <div>
     <div className=" flex justify-start items-center  w-[1920px]">
        {/* for polygon */}
        <div className=" flex ">
            <img src={POLYGON} alt="/" className=' relative '/>
            <img src={POLYGON2} alt="/" className=' absolute  '/>

        </div>
        {/* for text */}
        <div className=" ">
        <div className=" font-AA uppercase font-normal text-center tracking-wide text-transparent text-[75px] w-[1209px] bg-clip-text bg-gradient-to-r from-[#E65C00] to-[#F9D423]">
           the Ramaera Industries
          </div>
        <p className="text-center font-normal text-[42px] w-[1323px] text-white">We are aiming to be a part of the major industrialisation drive in India and embarking our presence in every significant industrial domain including IT.
          </p>
        </div>
     </div>

    </div>
  )
}
