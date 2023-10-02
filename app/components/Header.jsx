"use client";
import { Nav } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [active, setactive] = useState("");

  return (
    <div className=" ">

      <div className="bg-black  h-[929.73px] relative">
        <div className='bg-[url("/Rectangle2.svg")]   bg-cover  bg-no-repeat h-[929.73px] opacity-25 absolute w-full '></div>
        <div className="bg-gradient-to-b z-50 from-black via-transparent to-transparent absolute h-[250px] w-full opacity-25"></div>
        <Nav />
        <Image
          src="Group 5.svg"
          width={240}
          height={20}
          alt=""
          className="absolute  right-0 top-[25%]"
        />
        <div className="grid grid-cols-2 text-white  container px-10 mx-auto  gap-[122px]   mt-50">
          <div className=" mt-[88px] w-full ">
            {/*  */}
            <div className="w-[100%]  col-span-1">
              <h1 className=" max-w-md font-[400] text-[44px] Leading-[50.63px] text-[#F09804]  font-bernier">
                Welcome to Dar d’jaj
              </h1>
              <h1 className=" font-poppins text-[50px] font-[600] lieading-normal text-[#FFF]">
                The Authentic
              </h1>
              <h1 className=" font-poppins text-[50px] font-[600] lieading-normal w-[100%] text-[#FFF]">
                Restaurant & Cafe
              </h1>

              <h1 className=" font-poppins text-[20px] text-[#D4D4D4] font-[400] leading-normal mt-[30px] ">
                Sed ut perspiciatis unde omnis iste natus error sit
                <br />
                voluptatem accusantium doloremque laudantium.
              </h1>

              <button className="border-[#D7B686] border-2   max-w-sm  text-[#FFF]font-popins text-[16px] font-[600] leading-normal py-[18px] px-[60px] mt-[60px]">
                VIEW MORE
              </button>
            </div>
          </div>
          <div className=" relative mt-[10px] mr-[20px]">
            <div className=" overflow-hidden">
              <div className="absolute z-20 right-0  w-[480px]   h-[490px]    clipImage1  ">
                <Image
                  src="/_DSC4793.jpg"
                  alt=""
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  className=" border-2 border-[#EF4949]   absolute z-10 overflow-hidden"
                />
              </div>
              <div className="absolute z-20 left-[4%] top-[60%]  w-[245px]   h-[280px] ">
                <Image
                  src="/_DSC4816.jpg"
                  alt=""
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  className="clipImage2 h-[280px] w-[245px]  z-10 "
                />
              </div>
              <Image
                src="/Group 41.svg"
                width={312}
                height={211}
                alt=" "
                className="z-1 absolute bottom-[-40%] left-[25%]"
              />
            </div>
          </div>
        </div>
        <Image
          src="/Group 5.svg"
          alt=""
          width={173}
          height={91}
          className="absolute bottom-0"
        />
        <Image
          src="/Group 5 vertical.svg"
          alt=""
          width={91}
          height={173}
          className="absolute bottom-0"
        />
      </div>
    </div>
  );
}
