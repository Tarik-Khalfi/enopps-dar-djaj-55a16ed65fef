import Image from "next/image";
import React from "react";

export default function Menu() {
  return (
    <div className=" h-[780px] bg-[#0B0E11] ">
      <div className="container mx-auto px-10 flex flex-row  ">
        <div className="bg-[#FFFF] h-[397px] w-[520px] flex flex-col py-5 mt-[184px] z-10   relative bottom-10">
          <div className="w-[500px]  my-auto space-y-2   space-x-2">
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
        <div className="mt-[80px] relative left-[-2%]   w-[1290px] ">
          <Image
            src="/menu_poulet.jpg"
            fill={true}
            className="w-[1290px] h-[590px] foodClip"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
