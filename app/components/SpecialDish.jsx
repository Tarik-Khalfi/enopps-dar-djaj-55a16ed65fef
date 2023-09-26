import Image from "next/image";
import React from "react";

export default function SpecialDish() {
  return (
    <div className="h-[882px] bg-[#0B0E11]">
      <div className="container mx-auto px-10 ">
        <div classname="flex  flex-col justify-center items-center mt-[100px] ">
          <h1 className="text-[#FFF] text-[36px] font-normal leading-normal text-center ">
            Special Dish
          </h1>
          <h1 className="text-[#FFF] text-[36px] font-normal leading-normal text-center">
            Best Recomandation
          </h1>
        </div>
        <div className="grid grid-cols-3   gap-20 justify-items-center mt-[70px]">
          {/* <Image
            src="/_DSC4744.jpg"
            width={500}
            height={600}
            alt=""
            className="spcSect h-[500px] w-[370px]"
          />
          <Image
            className="spcSect h-[500px] w-[370px]"
            src="/_DSC4729.jpg"
            width={500}
            height={600}
            alt=""
          />
          <Image
            className="spcSect h-[500px] w-[370px]"
            src="/_DSC4696.jpg"
            width={500}
            height={600}
            alt=""
          /> */}
          <div className="bg-black w-full h-[600px] relative spcSect">
            <div className="bg-[url('/_DSC4744.jpg')]  w-[500px] h-[600px] spcSect bg-cover bg-no-repeat absolute opacity-50"></div>
            <div className="w-[90%] h-[70px] bg-white absolute bottom-0 spcSect">
              <div className="flex flex-row justify-center items-center   absolute space-x-4">
                <div className="h-[3px] w-[40px] bg-[#f09804] ml-5"></div>
                <h1 className="text-[#0F1622] font-poppins text-[20px] font-600 leading-normal space-x-4 p-4">
                  Appertizer Package
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-black w-full h-[600px] relative spcSect">
            <div className="bg-[url('/_DSC4729.jpg')]  w-[500px] h-[600px] spcSect bg-cover bg-no-repeat absolute opacity-50"></div>
            <div className="w-[90%] h-[231px] bg-white absolute bottom-0 spcSect">
              <div className="flex flex-col justify-center items-center absolute space-x-4">
                <div className="flex flex-row justify-center items-center space-x-4">
                  <span className="h-[3px] w-[40px] bg-[#f09804] ml-5"></span>
                  <h1 className="text-[#0F1622] font-poppins text-[20px] font-600 leading-normal space-x-4 p-4">
                    Main Course Package
                  </h1>
                </div>
                <div className="flex-col space-y-4">
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
          </div>
          <div className="bg-black w-full h-[600px] relative spcSect">
            <div className="bg-[url('/_DSC4696.jpg')]  w-[500px] h-[600px] spcSect bg-cover bg-no-repeat absolute opacity-50"></div>
            <div className="w-[90%] h-[70px] bg-white absolute bottom-0 spcSect">
              <div className="flex flex-row justify-center items-center absolute space-x-4">
                <span className="h-[3px] w-[40px] bg-[#f09804] ml-4 "></span>
                <h1 className="text-[#0F1622] font-poppins text-[20px] font-600 leading-normal  space-x-4 p-4   ">
                  Dessert Package
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
