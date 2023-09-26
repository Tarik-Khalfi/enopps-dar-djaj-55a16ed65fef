import { HeaderProp, Nav } from "@/components"
import { Menu1, Menu2, Menu3 } from "@/components/AllMenu"
import Image from "next/image"



const page = () => {
    return (
        <main>
            <section className='bg-[url("/Rectangle2.png")] space-y-[100px] bg-cover bg-no-repeat'>
                <Nav />
                <HeaderProp fontt='font-bold text-7xl' font='font-bernier' text='Our Menu' />
            </section>
            <Menu1 />
            <Menu3 />
            <Menu2 />
            <div className=" h-[908px] bg-[#0D1518] ">
                <div className="flex flex-row container mx-auto px-5 ">
                    <div className="h-[690px] w-[442px] bg-white z-50 p-10 space-y-3     relative top-24 mt-20">
                        <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804]">
                            SANDWICH
                        </h1>
                        <div className="flex justify-between align-baseline">
                            <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                SANDWICH POULET
                            </p>
                            <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                            <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                35 DH
                            </p>
                        </div>
                        <div className="flex justify-between align-baseline">
                            <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                TACOS DAR DJAJ
                            </p>
                            <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                            <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                30DH
                            </p>
                        </div>
                        <div className="flex justify-between align-baseline">
                            <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                SANDWICH TANDORI
                            </p>
                            <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                            <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                30DH
                            </p>
                        </div>
                        <div className="flex justify-between align-baseline">
                            <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                SANDWICH CURRY
                            </p>

                            <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                            <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                30DH
                            </p>
                        </div>
                        <div className="flex justify-between align-baseline">
                            <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                SANDWiCH PARIKA
                            </p>
                            <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                            <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                30DH
                            </p>
                        </div>
                        <div className="flex justify-between align-baseline">
                            <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                SANDWICH VAINDE HACHEE
                            </p>
                            <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                            <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                30DH
                            </p>
                        </div>
                        <div className="flex justify-between align-baseline">
                            <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                SANDWICH MERGUEZ POULET
                            </p>
                            <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                            <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                30DH
                            </p>
                        </div>
                        <div className="flex justify-between align-baseline">
                            <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                SANDWICH MERGUEZ VIANDE
                            </p>
                            <Image
                                src="/Vector 24.svg"
                                width={170}
                                height={5}
                                alt=""
                                className=""
                            />
                            <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                {" "}
                                30DH
                            </p>
                        </div>
                        <div className="flex justify-between align-baseline">
                            <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                SANDWICH DAR D’JAJ
                            </p>
                            <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                            <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                30DH
                            </p>
                        </div>

                        <p className="text-[#F09804] text-[22px] leading-[25px] fon       t-400">
                            TACOS DAR DJAJ SERVI AVEC SAUCE ET FRITE
                        </p>
                    </div>
                    <div className="flex flex-col relative right-32 space-y-10 mt-10">
                        <div className="z-10">
                            <Image
                                src="/_DSC4739.jpg"
                                width={415}
                                height={337}
                                alt=""
                                className="w-[415px] h-[337px] shapeMenu"
                            />
                        </div>
                        <div className="z-10">
                            <Image
                                src="/_DSC4744.jpg"
                                width={415}
                                height={337}
                                alt=""
                                className="w-[415px] h-[337px] shapeMenu2 "
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="h-[560px] w-[442px] bg-white z-50 p-10 space-y-3 relative top-0 left-[12%]">
                            <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804]">
                                BUCKETS
                            </h1>
                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    DAR DJAJ
                                </p>

                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    30 DH
                                </p>
                            </div>
                            <p className="text-[#808080] font-poppins text-[14px] font-500 leading-[26px]">
                                1 cuisse
                            </p>
                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    BUCKET MIX
                                </p>
                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    47 DH
                                </p>
                            </div>
                            <p className="text-[#808080] font-poppins text-[14px] font-500 leading-[26px]">
                                1 Cuisse, 6 Wings{" "}
                            </p>
                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    BUCKET XL
                                </p>
                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    95 DH
                                </p>
                            </div>
                            <p className="text-[#808080] font-poppins text-[14px] font-500 leading-[26px]">
                                1 Cuisse, 6 Wings, 4 Tenders{" "}
                            </p>
                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    BUCKET XXL
                                </p>
                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    110DH
                                </p>
                            </div>
                            <p className="text-[#808080] font-poppins text-[14px] font-500 leading-[26px]">
                                1 Cuisse, 12 Wings (6 spicy +6 classic) , 4 Tenders{" "}
                            </p>
                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    BUCKET XXXL
                                </p>
                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    199DH
                                </p>
                            </div>
                            <p className="text-[#808080] font-poppins text-[14px] font-500 leading-[26px]">
                                1 Cuisse, 18 Wings (6 spicy +6 classic ), 6 Tenders, 4 nuggets{" "}
                            </p>
                        </div>
                        <div className="relative z-10 bottom-[30%] right-[10%]">
                            <Image
                                src="/_DSC4783.jpg"
                                width={563}
                                height={533}
                                className="h-[563px] w-[564px] shapeMenu3"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className=" h-[908px] bg-[#0D1518] ">
                    <div className="flex flex-row container mx-auto px-5 ">
                        <div className="h-[500px] w-[442px] bg-white z-50 p-10 space-y-3     relative bottom-[-320px] mt-20">
                            <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804]">
                                WINGS
                            </h1>
                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    WINGS CLASSIC
                                </p>
                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    25 DH
                                </p>
                            </div>
                            <p>base chaplure</p>
                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    WINGS 6 PC BUFFALO{" "}
                                </p>
                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    30DH
                                </p>
                            </div>
                            <p>ACCOMPAGNÉ SAUCE AMÉRICAINE</p>
                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    WINGS MENU{" "}
                                </p>
                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    30DH
                                </p>
                            </div>
                            <p>ACCOMPAGNÉ SAUCE BBQ OU SPICY</p>
                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    WINGS BUFFALO MENU{" "}
                                </p>

                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    30DH
                                </p>
                            </div>
                            ACCOMPAGNÉ SAUCE BBQ OU SPICY
                            <p className="text-[#F09804] text-[22px] leading-[25px] font-400">
                                FRiTES CLASSIC 12 DH
                            </p>
                        </div>
                        <div className="flex flex-col relative right-[280px] space-y-10 mt-10">
                            <div className="z-10">
                                <Image
                                    src="/0a057e698af57a6c452b0d5003044b0c.jpg"
                                    width={509}
                                    height={700}
                                    alt=""
                                    className="w-[509px] h-[700px] shapeMenu4 "
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="h-[560px] w-[442px] bg-white z-50 p-10 space-y-3 relative top-20 left-[12%]">
                                <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804]">
                                    TENDERS
                                </h1>
                                <div className="flex justify-between align-baseline">
                                    <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                        TENDERS SPICY
                                    </p>

                                    <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                    <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                        25 DH
                                    </p>
                                </div>
                                <p className="text-[#808080] font-poppins text-[14px] font-500 leading-[26px]">
                                    base chaplure
                                </p>
                                <div className="flex justify-between align-baseline">
                                    <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                        TENDERS BARBECUE
                                    </p>
                                    <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                    <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                        25 DH
                                    </p>
                                </div>
                                <p className="text-[#808080] font-poppins text-[14px] font-500 leading-[26px]">
                                    ACCOMPAGNÉ PAELLA, SALADE MAROCAINE SAUCE TOMATE, SAUCE
                                    POULET, FRITES
                                </p>
                                <div className="flex justify-between align-baseline">
                                    <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                        TENDERS MIEL
                                    </p>
                                    <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                    <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                        25 DH
                                    </p>
                                </div>
                                <p className="text-[#808080] font-poppins text-[14px] font-500 leading-[26px]">
                                    ACCOMPAGNÉ PAELLA, SALADE MAROCAINE SAUCE TOMATE, SAUCE
                                    POULET, FRITES
                                </p>
                            </div>
                            <div className="relative z-10 bottom-[30%] right-[40%]">
                                <Image
                                    src="/_DSC4783.jpg"
                                    width={563}
                                    height={533}
                                    className="h-[563px] w-[564px] shapeMenu5"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" h-[1508px] bg-[#0D1518] ">
                <div className="flex flex-row container mx-auto px-5 ">
                    {/* menu1 */}
                    <div className="h-[840px] w-[1900px] bg-[#FFF] relative space-y-2 space-x-5 z-20 p-6 top-40">
                        <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804]">
                            JUS DE FRUITS
                        </h1>
                        <div className="flex justify-between align-baseline">
                            <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                ORANGE
                            </p>
                            <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                            <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                35 DH
                            </p>
                        </div>
                        <div className="flex justify-between align-baseline">
                            <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                FRAISE
                            </p>
                            <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                            <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                30DH
                            </p>
                        </div>
                        <div className="flex justify-between align-baseline">
                            <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                POMME{" "}
                            </p>
                            <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                            <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                30DH
                            </p>
                        </div>
                        <div className="flex justify-between align-baseline">
                            <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                BANANE{" "}
                            </p>

                            <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                            <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                30DH
                            </p>
                        </div>
                        <div className="flex justify-between align-baseline">
                            <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                FRAMBOISE{" "}
                            </p>
                            <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                            <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                30DH
                            </p>
                        </div>
                        <div className="flex justify-between align-baseline">
                            <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                KAKI{" "}
                            </p>
                            <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                            <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                30DH
                            </p>
                        </div>
                        <div className="flex justify-between align-baseline">
                            <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                AVOCAT{" "}
                            </p>
                            <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                            <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                30DH
                            </p>
                        </div>
                        <div className="flex justify-between align-baseline">
                            <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                MANGUE
                            </p>
                            <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                            <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                {" "}
                                30DH
                            </p>
                        </div>
                        <div className="flex justify-between align-baseline">
                            <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                PAPAYE
                            </p>
                            <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                            <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                30DH
                            </p>
                        </div>
                        <div className="flex justify-between align-baseline">
                            <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                PECHE
                            </p>
                            <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                            <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                30DH
                            </p>
                        </div>
                        <div className="flex justify-between align-baseline">
                            <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                <div className="flex justify-between align-baseline">
                                    <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                        PANACHE
                                    </p>
                                    <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                </div>
                            </p>
                            <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                            <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                30DH
                            </p>
                        </div>
                        <div className="flex justify-between align-baseline">
                            <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                <div className="flex justify-between align-baseline">
                                    <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                        KIWI
                                    </p>
                                    <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                </div>
                            </p>
                            <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                            <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                30DH
                            </p>
                        </div>
                        <div className="flex justify-between align-baseline">
                            <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                <div className="flex justify-between align-baseline">
                                    <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                        CITRON
                                    </p>
                                    <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                </div>
                            </p>
                            <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                            <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                30DH
                            </p>
                        </div>
                        <div className="flex justify-between align-baseline">
                            <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                <div className="flex justify-between align-baseline">
                                    <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                        ZE3ZE3
                                    </p>
                                    <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                </div>
                            </p>
                            <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                            <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                30DH
                            </p>
                        </div>
                        <div className="flex justify-between align-baseline">
                            <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                <div className="flex justify-between align-baseline">
                                    <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                        FRUITS SECS
                                    </p>
                                    <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                </div>
                            </p>
                            <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                            <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                30DH
                            </p>
                        </div>
                        <div className="flex justify-between align-baseline">
                            <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                <div className="flex justify-between align-baseline">
                                    <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                        SALADE DE FRUITS
                                    </p>
                                    <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                </div>
                            </p>
                            <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                            <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                30DH
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="z-10 relative">
                            <Image
                                src="/_DSC4663.jpg"
                                width={698}
                                height={323}
                                className=" w-[2900px] h-[323px] relative right-[30px] z-10"
                                alt=""
                            />
                        </div>
                        <div>
                            <Image
                                src="/_DSC4773.jpg"
                                width={343}
                                height={252}
                                className=" mt-10 w-[550px] relative right-[10px] z-10 shapeMenu2"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        {/* menu2 */}
                        <div className="h-[820px] w-[400px] bg-[#FFF] relative right-[10%]  bottom-24 space-y-2 space-x-5 z-50 p-6">
                            <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804]">
                                JUS DE LEGUMES
                            </h1>
                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    SANDWICH POULET
                                </p>
                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    35 DH
                                </p>
                            </div>
                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    CONCOMBRE{" "}
                                </p>
                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    30DH
                                </p>
                            </div>
                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    CITROUILLE
                                </p>
                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    30DH
                                </p>
                            </div>
                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    DETOX
                                </p>

                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    30DH
                                </p>
                            </div>
                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    CAROTTE
                                </p>
                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    30DH
                                </p>
                            </div>
                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    COURGETTE
                                </p>
                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    30DH
                                </p>
                            </div>
                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    BETTERAVE
                                </p>
                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    30DH
                                </p>
                            </div>
                            <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804]">
                                MILKSHAKE{" "}
                            </h1>
                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    FRAISE
                                </p>
                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    {" "}
                                    30DH
                                </p>
                            </div>
                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    CAFE
                                </p>
                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    {" "}
                                    30DH
                                </p>
                            </div>
                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    VANILLE
                                </p>
                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    {" "}
                                    30DH
                                </p>
                            </div>
                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    CARAMEL
                                </p>
                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    {" "}
                                    30DH
                                </p>
                            </div>
                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    CHOCOLAT
                                </p>
                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    {" "}
                                    30DH
                                </p>
                            </div>
                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    PISTACHE
                                </p>
                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    {" "}
                                    30DH
                                </p>
                            </div>
                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    NOUGAT
                                </p>
                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    30DH
                                </p>
                            </div>
                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    OREO{" "}
                                </p>
                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    30DH
                                </p>
                            </div>
                        </div>

                        <div>
                            <Image
                                src="/_DSC4672.jpg"
                                width={425}
                                height={310}
                                className="w-[850px] h-[400px]   relative bottom-20 right-32 shapeMenu5"
                                alt=""
                            />
                        </div>
                        {/* menu3 */}
                        <div className="h-[476px] w-[430px] bg-[#FFF] relative  bottom-[390px] right-[80px] space-y-2 space-x-5 z-20 p-6">
                            <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804]">
                                THÉ
                            </h1>
                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    THÉ
                                </p>
                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    10 DH
                                </p>
                            </div>
                            <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804]">
                                GLACES
                            </h1>
                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    BOUCLE DE GLACE AU CHOIX{" "}
                                </p>
                                Fraise, Chocolat, Pistache, Vanille, Café, Caramel, Oreo
                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    30DH
                                </p>
                            </div>
                            <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804]">
                                SUNDAE
                            </h1>

                            <div className="flex justify-between align-baseline">
                                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                                    CHocolat, fraise, caramel
                                </p>
                                <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                                    30DH
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page