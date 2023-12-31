import React from 'react'
import Image from 'next/image'

const Menu2 = () => {
    return (
        <section className='bg-[#0D1518]   py-20'>
            <div className='container relative  flex justify-between items-center'>
                <div className='bg-white  py-10 px-8 z-50 space-y-4'>
                    <h3 className='text-[#F09804E5] pb-[20px] text-4xl font-bernier font-semibold'>POULET BRAISÉ GRILLÉ</h3>
                    <div className='text-[#808080] space-y-4'>
                        <div className='w-[400px] space-y-3'>
                            <div className='flex justify-between items-center'>
                                <p className='font-medium text-2xl font-bernier  text-[#0F1622]'>1/4 Poulet</p>
                                <p className=' text-primary'>---------------------------------------</p>

                                <h3 className='text-[#F09804E5] font-bold font-bernier text-2xl '>40 DH</h3>
                            </div>

                        </div>
                    </div>

                    <div className='text-[#808080] space-y-4'>
                        <div className='w-[400px] space-y-3'>
                            <div className='flex justify-between items-center'>
                                <p className='font-medium text-2xl font-bernier  text-[#0F1622]'>1/2 POULET</p>
                                <p className=' text-primary'>---------------------------------------</p>

                                <h3 className='text-[#F09804E5] font-bold font-bernier text-2xl '>80 DH</h3>
                            </div>

                        </div>
                    </div>

                    <div className='text-[#808080] space-y-4'>
                        <div className='w-[400px] space-y-3'>
                            <div className='flex justify-between items-center'>
                                <p className='font-medium text-2xl font-bernier  text-[#0F1622]'>POULET ENTIER</p>
                                <p className=' text-primary'>--------------------------------</p>

                                <h3 className='text-[#F09804E5] font-bold font-bernier text-2xl '>145 dh</h3>
                            </div>

                        </div>
                    </div>




                    <h3 className='text-[#F09804E5]  pt-[20px]  text-2xl font-bernier'>Servi avec salade marocaine sauce, rizet frites</h3>


                </div>
                <div className=' relative right-32  space-y-6'>
                    <Image alt='ll' src='/_DSC4816.jpg' width={400} height={400}
                        className='w-[700px] clipo3 ' />
                    <Image alt='ll' src='/_DSC4793.jpg' width={400} height={400}
                        className='w-[700px] clipo4' />
                </div>
                <div className='relative right-[102px] py-10  z-10'>
                    <Image alt='ll' src='/Group 5.png' width={500} height={500}
                        className='w-[250px] h-[140px] z-20 absolute rotate-[45deg] top-[38%] -left-[170px] ' />

                    <div className='h-[600px] w-[500px]  mt-10 clipo '>
                        <Image alt='ll' src='/0a057e698af57a6c452b0d5003044b0c.jpg' fill
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

export default Menu2