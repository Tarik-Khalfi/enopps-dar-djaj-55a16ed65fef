import React from 'react'
import Image from 'next/image'

const Menu1 = () => {
    return (
        <section className='bg-[#0D1518]   py-[140px]'>
            <div className='container relative  flex justify-between items-center'>
                <div className='bg-white  py-10 px-10 z-50 space-y-4 '>
                    <h3 className='text-[#F09804E5]  text-6xl font-bernier font-semibold'>Salade</h3>
                    <div className='text-[#808080] space-y-4'>
                        <div className='w-[400px] '>
                            <div className='flex justify-between items-center'>
                                <p className='font-medium text-2xl font-bernier  text-[#0F1622]'>Salade dar d’jaj</p>
                                <p className=' text-primary'>-----------------------------</p>

                                <h3 className='text-[#F09804E5] font-bold font-bernier text-2xl '>35 DH</h3>
                            </div>

                            <p className='text-[#808080] font-semibold   font-poppins '>Poulet rôti, riz, mais</p>
                        </div>
                    </div>

                    <div className='text-[#808080] space-y-4'>
                        <div className='w-[400px] '>
                            <div className='flex justify-between items-center'>
                                <p className='font-medium text-2xl font-bernier  text-[#0F1622]'>Salade niçoise</p>
                                <p className=' text-primary'>--------------------------------</p>

                                <h3 className='text-[#F09804E5] font-bold font-bernier text-2xl '>35 DH</h3>
                            </div>

                            <p className='text-[#808080]  font-semibold  leading-7  font-poppins '>Pomme de terre, bettrave, carotte, riz, thon, oeuf , concombre, olive</p>
                        </div>
                    </div>

                    <div className='text-[#808080] space-y-4'>
                        <div className='w-[400px] '>
                            <div className='flex justify-between items-center'>
                                <p className='font-medium text-2xl font-bernier  text-[#0F1622]'>Salade de thon</p>
                                <p className=' text-primary'>--------------------------------</p>
                                <h3 className='text-[#F09804E5] font-bold font-bernier text-2xl '>22 DH</h3>
                            </div>

                            <p className='text-[#808080] font-semibold  font-poppins '>Tomate, Oignon, thon</p>
                        </div>
                    </div>

                    <div className='text-[#808080] space-y-4'>
                        <div className='w-[400px] '>
                            <div className='flex justify-between items-center'>
                                <p className='font-medium text-2xl font-bernier  text-[#0F1622]'>Salade Marocaine</p>
                                <p className=' text-primary'>----------------------------</p>

                                <h3 className='text-[#F09804E5] font-bold font-bernier text-2xl '>19 DH</h3>
                            </div>
                        </div>
                    </div>


                    <h3 className='text-[#F09804E5] pt-[20px]  text-2xl font-bernier '>composez votre salade 45 dh</h3>


                </div>
                <div className=' relative right-32  space-y-6'>
                    <Image alt='ll' src='/_DSC4668.jpg' width={400} height={400}
                        className='w-[700px] clipo3 ' />
                    <Image alt='ll' src='/_DSC4694.jpg' width={400} height={400}
                        className='w-[700px] clipo4' />
                </div>
                <div className='relative right-[102px] py-10  z-10'>
                    <Image alt='ll' src='/Group 5.png' width={400} height={400}
                        className='w-[300px] h-[100px] z-20 absolute rotate-[35deg] top-[45%] -left-[140px] ' />
                    <div className='h-[600px] w-[450px] mt-5 clipo '>
                        <Image alt='ll' src='/_DSC4688.jpg' fill
                            className=' overflow-hidden'
                            objectFit='contain' objectPosition='center' />
                    </div>
                    <Image src='/Group 284.png' width={250} height={300}
                        className=' absolute -right-20 -bottom-10 rotate-[270deg]   ' alt='img' />
                </div>
            </div>
        </section>
    )
}

export default Menu1