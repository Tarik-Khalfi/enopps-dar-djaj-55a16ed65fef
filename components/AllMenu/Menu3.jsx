import React from "react";
import Image from "next/image";

const Menu3 = () => {
  return (
    <section className=" relative py-20">
      <div className="container relative    flex justify-between ">
        <div className=" mb-10 space-y-6">
          <div className="  relative  gap-6  left-[280px] items-end flex   ">
            <Image
              alt="ll"
              src="/_DSC4795.jpg "
              width={400}
              height={400}
              className="w-[400px] h-[300px]  clipo6"
            />
            <Image
              alt="ll"
              src="/menu_poulet.jpg"
              width={400}
              height={400}
              className="w-[700px]  clipo3"
            />
          </div>

          <div className=" relative z-20 h-auto ml-20  ">
            <Image
              alt="ll"
              src="/Group 5.png"
              width={400}
              height={400}
              className="w-[300px] h-[100px] z-50 absolute -rotate-[39deg] -top-[49px] left-[40.9%] "
            />
            <div className=" h-[550px]  clipo7 ">
              <Image
                alt="ll"
                src="/_DSC4805.jpg"
                fill
                className=" overflow-hidden"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
            <Image
              src="/Group 284.png"
              width={250}
              height={300}
              className=" absolute -left-[63px]  -bottom-[79px]  "
              alt="img"
            />
          </div>
        </div>
        <div className="bg-white mt-[200px] py-10 px-10 z-50 space-y-8 ">
          <h3 className="text-[#F09804E5]  text-4xl font-bernier font-semibold">
            ASSIETTES
          </h3>
          <div className="text-[#808080] space-y-4">
            <div className="w-[400px] ">
              <div className="flex justify-between items-center">
                <p className="font-medium text-2xl font-bernier  text-[#0F1622]">
                  POULET ENTIER
                </p>
                <p className=" text-primary">
                  --------------------------------
                </p>

                <h3 className="text-[#F09804E5] font-bold font-bernier text-2xl ">
                  140 DH
                </h3>
              </div>
              <p className="text-[#808080] font-500 text-[14px] leading-[27px] font-poppins ">
                Poulet rôti (accompagné de riz , frites sauce tomate cdrise et
                sauce poulet)
              </p>
            </div>
          </div>

          <div className="text-[#808080] space-y-4">
            <div className="w-[400px] ">
              <div className="flex justify-between items-center">
                <p className="font-medium text-2xl font-bernier  text-[#0F1622]">
                  POULET 1/2
                </p>
                <p className=" text-primary">
                  --------------------------------------
                </p>

                <h3 className="text-[#F09804E5] font-bold font-bernier text-2xl ">
                  70 DH
                </h3>
              </div>
              <p className="text-[#808080] font-500 text-[14px] leading-[27px] font-poppins ">
                Poulet rôti (accompagné de riz, frites sauce tomate cdrise et
                sauce poulet)
              </p>
            </div>
          </div>

          <div className="text-[#808080] space-y-4">
            <div className="w-[400px] ">
              <div className="flex justify-between items-center">
                <p className="font-medium text-2xl font-bernier  text-[#0F1622]">
                  POULET 1/4
                </p>
                <p className=" text-primary">
                  ---------------------------------------
                </p>

                <h3 className="text-[#F09804E5] font-bold font-bernier text-2xl ">
                  35 dh
                </h3>
              </div>
              <p className="text-[#808080] font-500 text-[14px] leading-[27px] font-poppins ">
                Accompagné paella, salade marocaine sauce tomate et sauce
                poulet, frites
              </p>
            </div>
          </div>

          <div className="text-[#808080] space-y-4">
            <div className="w-[400px] ">
              <div className="flex justify-between items-center">
                <p className="font-medium text-2xl font-bernier  text-[#0F1622]">
                  ESCALOPE DE POULET
                </p>
                <p className=" text-primary">--------------------------</p>

                <h3 className="text-[#F09804E5] font-bold font-bernier text-2xl ">
                  49 dh
                </h3>
              </div>
              <p className="text-[#808080] font-500 text-[14px] leading-[27px] font-poppins ">
                Poulet rôti (accompagné de riz, frites sauce tomate cdrise et
                sauce poulet)
              </p>
            </div>
          </div>

          <div className="text-[#808080] space-y-4">
            <div className="w-[400px] ">
              <div className="flex justify-between items-center">
                <p className="font-medium text-2xl font-bernier  text-[#0F1622]">
                  EMINCE DE POULET
                </p>
                <p className=" text-primary">------------------------------</p>

                <h3 className="text-[#F09804E5] font-bold font-bernier text-2xl ">
                  55 dh
                </h3>
              </div>
              <p className="text-[#808080] font-500 text-[14px] leading-[27px] font-poppins ">
                Poulet rôti (accompagné de riz, frites sauce tomate cdrise et
                sauce poulet)
              </p>
            </div>
          </div>
          <div className="text-[#808080] space-y-4">
            <div className="w-[400px] ">
              <div className="flex justify-between items-center">
                <p className="font-medium text-2xl font-bernier  text-[#0F1622]">
                  BROUCHETTES DE POULET
                </p>
                <p className=" text-primary">---------------------</p>

                <h3 className="text-[#F09804E5] font-bold font-bernier text-2xl ">
                  55 dh
                </h3>
              </div>
              <p className="text-[#808080] font-500 text-[14px] leading-[27px] font-poppins ">
                accompagné salade marocaine sauce tomate et frites
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu3;
