import Image from "next/image";
import React from "react";

export default function Menu() {
  return (
    <div className=" h-[780px] bg-[#0B0E11] mt-[120px]  mb-[110px] relative">
      <div className="container mx-auto px-10 grid grid-cols-2  relative">
        <div className="bg-[#FFFF] h-[397px] w-[482px] flex flex-col py-5 mt-[184px] z-50   items-center justify-center  ">
          <div className="  w-[442px] my-auto space-y-2  absolute space-x-2">
            <h1 className="text-[#f09804] font-bernier text-[44px] font-400 leading-normal text-left px-5">
              POULET BRAISE GRILLE
            </h1>
            <div className="flex  justify-between items-center px-5">
              <p className="text-[#0F1622] font-bernier text-[22px] font-400 leading-normal text-uppercase">
                1/4 poulet
              </p>
              <Image
                src="/Vector 24.svg"
                width={235}
                height={3}
                className="w-[235px] h-[3px]"
                alt=""
              />
              <p className="text-[#F09804] text-[23px] font-400 leading-normal">
                40DHS
              </p>
            </div>
            <div className="flex justify-between items-center px-5">
              <p className="text-[#0F1622] font-bernier text-[22px] font-400 leading-normal text-uppercase">
                1/2 poulet
              </p>
              <Image
                src="/Vector 24.svg"
                width={235}
                height={3}
                className="w-[235px] h-[3px]"
                alt=""
              />
              <p className="text-[#F09804] text-[23px] font-400 leading-normal">
                80DHS
              </p>
            </div>
            <div className="flex justify-between items-center px-5">
              <p className="text-[#0F1622] font-bernier text-[22px] font-400 leading-normal text-uppercase">
                poulet entier
              </p>
              <Image
                src="/Vector 24.svg"
                width={235}
                height={3}
                className="w-[235px] h-[3px] "
                alt=""
              />
              <p className="text-[#F09804] text-[23px] font-400 leading-normal">
                145DHS
              </p>
            </div>
            <h1 className="text-[#F09804] font-bernier text-[22px] font-400 leading-normal px-5">
              SERVI AVEC SALADE MAROCAINE SAUCE,RIZ ET FRITE
            </h1>
          </div>
        </div>
        <div className="mt-[80px] relative w-[815px]   ">
          <div className="overflow-hidden">
            <div className="absolute z-20 w-[1115px] h-[600px] right-20">
              <Image
                src="/Group 41.svg"
                alt=""
                width={210}
                height={210}
                className="absolute top-[-12%] left-[-10%] z-1"
              />
              <Image
                src="/menu_poulet.jpg"
                fill={true}
                objectFit="cover"
                objectPosition="center"
                className="  absolute z-10 overflow-hidden foodClip2 "
                alt=""
              />
              <Image
                src="/Group 5.svg"
                width={170}
                height={170}
                alt=""
                className="absolute bottom-0 right-[-10%] z-20"
              />
              <Image
                src="/Group 5 vertical.svg"
                width={100}
                height={70}
                alt=""
                className="absolute bottom-[-16%] right-[-3%] z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// // <div className=" relative mt-[10px] mr-[20px]">
//             <div className=" overflow-hidden">
//               <div className="absolute z-20 right-0  w-[480px]   h-[490px]    clipImage1  ">
//                 <Image
//                   src="/_DSC4793.jpg"
//                   alt=""
//                   fill
//                   objectFit="cover"
//                   objectPosition="center"
//                   className=" border border-[#EF4949]   absolute z-10 overflow-hidden"
//                 />
//               {/* </div> */}
