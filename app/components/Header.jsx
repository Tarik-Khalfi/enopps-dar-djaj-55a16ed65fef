"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [link, setLink] = useState("Home");
  return (
    <div className="">
      <div className="bg-black h-[929.73px] relative">
        <div className='bg-[url("/Rectangle2.svg")] bg-cover  bg-no-repeat h-[929.73px] opacity-25 absolute w-full '></div>
        <div className="bg-gradient-to-b from-black via-transparent to-transparent absolute h-[250px] w-full opacity-25"></div>
        <div className="flex flex-row justify-between container mx-auto z-90 item-center px-10 py-10 ">
          <div>
            <Image
              src="/assets/logo/logo.svg"
              width={50}
              height={50}
              className="w-[50px] h-[50px]"
              alt="s"
            />
          </div>
          <div className="space-x-10">
            <Link
              onClick={() => setLink("Home")}
              href="#"
              className="font-poppins text-[16px] font-[500] leading-normal  text-[#FFF] "
            >
              Home
            </Link>
            <Link
              href="#"
              className="font-poppins text-[16px] font-[500] leading-normal  text-[#FFF] "
            >
              Our Menu
            </Link>
            <Link
              href="#"
              className="font-poppins text-[16px] font-[500] leading-normal  text-[#FFF] "
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-row container px-10 mx-auto text-white gap-150 space-x-[300px] space-y-40 mt-50">
          <div className="flex flex-col mt-[198px] w-full mx-auto">
            <div className="w-[100%]">
              <h1 className=" max-w-md font-[400] text-[44px] Leading-[50.63px] text-[#F09804]  font-bernier">
                Welcome to Dar d’jaj
              </h1>
              <h1 className=" font-poppins text-[50px] font-[600] lieading-normal">
                The Authentic
              </h1>
              <h1 className=" font-poppins text-[50px] font-[600] lieading-normal w-[100%]">
                Restaurant & Cafe
              </h1>
              <h1 className=" font-poppins text-[20px] text-[#D4D4D4] font-[400] leading-normal w-[507px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </h1>
              <button className="border-green-900 border-4 py-5 px-10  max-w-sm font-roboto">
                VIEW MORE
              </button>
            </div>
          </div>
          <div className="flex  mt-[198px] relative w-[100%]  ml-auto">
            <Image
              src="/_DSC4816.jpg"
              alt=""
              height={280}
              width={245}
              className="clipImage2 h-[280px] w-[245px] absolute bottom-[-5%]  left-[-30%] z-10 "
            />
            <Image
              src="/_DSC4793.jpg"
              alt=""
              width={430}
              height={490}
              className="clipImage1 w-[430px] h-[490px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
