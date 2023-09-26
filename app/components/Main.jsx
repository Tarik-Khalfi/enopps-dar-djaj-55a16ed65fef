import Image from "next/image";
import React from "react";

export default function Main() {
  return (
    <div className="h-[793px] bg-[#0B0E11]">
      <div className="container w-full mx-auto px-10 ">
        <div className="flex  flex-col justify-center items-center gap-5 ">
          <p className="text-[#F09804] font-normal leading-normal text-[44px] mt-[96px] font-bernier">
            DISCOVER
          </p>
          <h1 className="text-[#FFF] text-[36px]  font-[600] leading-normal font-poppins">
            Our Special Cuisine
          </h1>
        </div>
        {/* <div className="grid grid-cols-2    mt-[70px] mx-auto container px-10  ">
          <div className="h-[200px] w-[570px] bg-[#0D1518] text-[#F09804]   mx-auto rounded-tl-[50px] frstCont flex items-center gap-5">
            <div>
              <Image
                src="/Food Icon-08 3.svg"
                width={60}
                alt=""
                height={60}
                className="w-[60px] h-[60px]"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[#F09804] font-poppins text-[22px] font-600 leading-600">
                Middle - East Food
              </p>
              <p className="text-[14px] font-400 leading-[26px] font-poppins text-[#808080]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium
              </p>
            </div>
          </div>
          <div className="h-[200px] w-[570px] bg-[#0D1518] text-[#F09804] scdCont flex items-center gap-5">
            <div>
              <Image
                src="/Food Icon-08 3.svg"
                width={60}
                alt=""
                className="w-[60px] h-[60px]"
                height={60}
              />
            </div>
            <div className="flex-col items-center">
              <p className="text-[#F09804] font-poppins text-[22px] font-600 leading-600">
                Korean Food
              </p>
              <p className="text-[14px] font-400 leading-[26px] font-poppins text-[#808080]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium,{" "}
              </p>
            </div>
          </div>
          <div className=" scdCont h-[200px] w-[570px] bg-[#0D1518] text-[#F09804] flex  items-center gap-5">
            <Image
              src="/Food Icon-08 3.svg"
              width={60}
              alt=""
              height={60}
              className="w-[60px] h-[60px]"
            />
            <div className="flex-col">
              <p className="text-[#F09804] font-poppins text-[22px] font-600 leading-600">
                Western Food
              </p>
              <p className="text-[14px] font-400 leading-[26px] font-poppins text-[#808080]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium,{" "}
              </p>
            </div>
          </div>
          <div className="frstCont h-[200px] w-[570px] bg-[#0D1518] text-[#F09804] flex flex-row items-center gap-5">
            <Image
              src="/Food Icon-08 3.svg"
              width={60}
              alt=""
              height={60}
              className="w-[60px] h-[60px]"
            />
            <div className="flex flex-col">
              <p className="text-[#F09804] font-poppins text-[22px] font-600 leading-600">
                Chinesse
              </p>
              <p className="text-[14px] font-400 leading-[26px] font-poppins text-[#808080]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium,{" "}
              </p>
            </div>
          </div>
        </div> */}
        <div className="grid grid-cols-2   gap-y-10 gap-x-10 justify-items-center ">
          <div className="h-[200px] w-full bg-[#0D1518] text-[#F09804]     frstCont flex flex-row items-center gap-5">
            <div className="flex flex-row">
              <div className="ml-20">
                <Image
                  src="/Food Icon-08 3.svg"
                  width={60}
                  alt=""
                  height={60}
                  className="w-[60px] h-[60px] "
                />
              </div>
              <div className="flex flex-col w-[70%] pr-[100px]">
                <p className="text-[#F09804] font-poppins text-[22px] font-600 leading-600">
                  Middle - East Food
                </p>
                <p className="text-[14px] font-400 leading-[26px] font-poppins text-[#808080]  ">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium
                </p>
              </div>
            </div>
          </div>
          <div className="h-[200px] w-full bg-[#0D1518] text-[#F09804]   scdCont flex items-center gap-5">
            <div className="flex flex-row">
              <div className="ml-20">
                <Image
                  src="/Layer 2.svg"
                  width={60}
                  alt=""
                  height={60}
                  className="w-[60px] h-[60px]"
                />
              </div>
              <div className="flex flex-col col w-[70%] pr-[100px]">
                <p className="text-[#F09804] font-poppins text-[22px] font-600 leading-600">
                  Korean Food
                </p>
                <p className="text-[14px] font-400 leading-[26px] font-poppins text-[#808080]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium
                </p>
              </div>
            </div>
          </div>
          <div className="h-[200px] w-full bg-[#0D1518] text-[#F09804]   scdCont flex items-center gap-5">
            <div className="flex flex-row items-start">
              <div className="ml-20">
                <Image
                  src="/Vector.svg"
                  width={60}
                  alt=""
                  height={60}
                  className="w-[60px] h-[60px]"
                />
              </div>
              <div className="flex flex-col col w-[70%] pr-[100px]">
                <p className="text-[#F09804] font-poppins text-[22px] font-600 leading-600">
                  Western Food
                </p>
                <p className="text-[14px] font-400 leading-[26px] font-poppins text-[#808080]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium
                </p>
              </div>
            </div>
          </div>
          <div className="h-[200px] w-full bg-[#0D1518] text-[#F09804]    rounded-tl-[50px] frstCont flex items-center gap-5">
            <div className="flex flex-row">
              <div className="ml-20">
                <Image
                  src="/Layer 2(1).svg"
                  width={60}
                  alt=""
                  height={60}
                  className="w-[60px] h-[60px]"
                />
              </div>
              <div className="flex flex-col col w-[70%] pr-[100px]">
                <p className="text-[#F09804] font-poppins text-[22px] font-600 leading-600">
                  Chinese Food
                </p>
                <p className="text-[14px] font-400 leading-[26px] font-poppins text-[#808080]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
