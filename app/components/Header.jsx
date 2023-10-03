"use client";
import { Nav } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [active, setactive] = useState("");

  return (
    <div className="bg-black h-[90vh] relative">
      <div className='bg-[url("/Rectangle3.jpg")] bg-cover  bg-no-repeat h-[90vh] opacity-25 absolute w-full '></div>
      <div className="bg-gradient-to-b from-black via-transparent to-transparent absolute h-[250px] w-full opacity-25"></div>
      <Nav />
      <div className="flex flex-row justify-between md:container mx-auto z-90 item-center px-10 py-10 "></div>
      <Image
        src="Group 5.svg"
        width={240}
        height={20}
        alt=""
        className="absolute  right-0 top-[25%] "
      />
      <div className="lg:grid lg:grid-cols-2 text-white  md:container px-10 mx-auto  lg:gap-[122px]   mt-50 flex flex-col">
        <div className=" mt-[88px] w-full  z-50">
          <div className="w-[90%]  lg:w-[100%] col-span-1">
            <h1 className=" max-w-md font-[400] text-[44px] Leading-[50.63px] text-[#F09804]  font-bernier">
              Bienvenue a Dar d&apos;jaj
            </h1>
            <h1 className=" font-poppins text-[50px] font-[600] lieading-normal text-[#FFF]">
              Votre Restaurant
            </h1>
            <h1 className=" font-poppins text-[50px] font-[600] lieading-normal w- text-[#FFF] lg:w-auto">
              Unique Et Authentique
            </h1>

            <h1 className=" font-poppins text-[20px] text-[#D4D4D4] font-[400] leading-normal mt-[30px] ">
              Venez decouvrir le goût inmensurable de notre cuisine
              <br />
              Car la rôtisserie de qualité, c&apos;&apos;est notre métier.
            </h1>

            <button className="border-[#D7B686] border-2   max-w-sm  text-[#FFF]font-popins text-[16px] font-[600] leading-normal py-[18px] px-[60px] mt-[60px] cursor-pointer z-50">
              VOIR MENU
            </button>
          </div>
        </div>
        <div className=" relative mt-[-30px] mr-[20px]">
          <div className=" overflow-hidden">
            <div className="absolute z-20 right-0  w-[480px]   h-[490px]    clipImage1  ">
              <Image
                src="/_DSC4793.jpg"
                alt=""
                fill
                objectFit="cover"
                objectPosition="center"
                className=" border-[3px] border-[#E3C08D] border-opacity-30   absolute z-10 overflow-hidden"
              />
            </div>
            <div className="absolute z-40 left-[4%] top-[50%]  w-[245px]   h-[280px] ">
              <Image
                src="/_DSC4816.jpg"
                alt=""
                fill
                objectFit="cover"
                objectPosition="center"
                className="clipImage2 h-[280px] w-[245px]  z-10  border-[3px] border-[#E3C08D] border-opacity-30   absolute overflow-hidden"
              />
            </div>
            <Image
              src="/Group 41.svg"
              width={312}
              height={211}
              alt=" "
              className="z-10 absolute bottom-[-20%] left-[25%]"
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
  );
}
