import Image from "next/image";
import React from "react";

export default function SpecialDish() {
  return (
    <div className="h-[882px] bg-[#0B0E11] mt-[110px]  mb-[110px] relative">
      <Image src="/Group 5.svg" width={213} height={117} alt="" />
      <Image
        src="/Group 5 vertical.svg"
        width={113}
        height={50}
        alt=""
        className="absolute top-0"
      />
      <div className="container mx-auto px-10 ">
        <div classname="flex  flex-col justify-center items-center mt-[100px] ">
          <h1 className=" text-[44px] font-[400] leading-normal text-center font-bernier text-[#F09804] ">
            Special Dish
          </h1>
          <h1 className="text-[#FFF] text-[36px] font-poppins  font-600  font-bold leading-normal text-center">
            Best Recomandation Menu
          </h1>
        </div>
        <div className="grid grid-cols-3   gap-7 justify-items-center mt-[70px]">
          <div className=" w-full h-[600px] relative  bg-black spcSect">
            <div className="bg-[url('/_DSC4744.jpg')]   w-[500px] h-[600px] spcSect bg-cover bg-no-repeat absolute opacity-50 "></div>

            <div className="w-[90%] h-[70px] bg-white absolute bottom-0 spcSect2 z-20">
              <div className="flex flex-row justify-center items-center   absolute space-x-4">
                <div className="h-[3px] w-[40px] bg-[#f09804] ml-5 "></div>
                <h1 className="text-[#0F1622] font-poppins  font-bold text-[20px] font-600 leading-normal space-x-4 p-4 z-20">
                  Appertizer Package
                </h1>
              </div>
            </div>
            <div className="h-[300px] w-full bg-gradient-to-t from-black to-[#0f162200]  absolute  bottom-0 z-1"></div>
          </div>
          <div className="bg-black  w-full h-[600px] relative spcSect">
            <div className="bg-[url('/_DSC4729.jpg')]  w-[500px] h-[600px] spcSect bg-cover bg-no-repeat absolute opacity-50"></div>
            <div className="w-[90%] h-[231px] z-10 bg-white absolute bottom-0 spcSect3">
              <div className="flex flex-col justify-center items-center absolute space-x-4">
                <div className="flex flex-row justify-center items-center space-x-4">
                  <span className="h-[3px] w-[40px] bg-[#f09804] ml-5"></span>
                  <h1 className="text-[#0F1622]  font-poppins text-[20px] font-bold font-600 leading-normal space-x-4 p-4">
                    Main Course Package
                  </h1>
                </div>
                <div className="flex-col space-y-4 mr-auto w-full p-2">
                  <p className="text-[#4E4F51] text-poppins text-[15px] font-400 leading-normal">
                    Indian Chicken Curry
                  </p>
                  <p className="text-[#4E4F51] text-poppins text-[15px] font-400 leading-normal">
                    Kebuli Rice
                  </p>
                  <p className="text-[#4E4F51] text-poppins text-[15px] font-400 leading-normal">
                    Sirloin Steak
                  </p>
                  <p className="text-[#F09804] font-poppins text-[24px] font-600 leading-normal">
                    $120{" "}
                    <span className="text-[#959595] font-poppins text-[12px] font-400 leading-normal">
                      / person
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[600px] w-full bg-gradient-to-t from-black to-[#0f162200]  absolute  bottom-0 z-1"></div>
          </div>
          <div className="bg-black w-full h-[600px] relative spcSect">
            <div className="bg-[url('/_DSC4696.jpg')]  w-[500px] h-[600px] spcSect bg-cover bg-no-repeat absolute opacity-50"></div>
            <div className="w-[90%] h-[70px] bg-white z-10 absolute bottom-0 spcSect2">
              <div className="flex flex-row justify-center items-center absolute space-x-4">
                <span className="h-[3px] w-[40px] bg-[#f09804] ml-4 "></span>
                <h1 className="text-[#0F1622] font-bold font-poppins text-[20px] font-600 leading-normal  space-x-4 p-4   ">
                  Dessert Package
                </h1>
              </div>
            </div>
            <div className="h-[300px] w-full bg-gradient-to-t from-black to-[#0f162200]  absolute  bottom-0 z-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
