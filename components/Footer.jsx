'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    const [active, setactive] = useState('')
    return (
        <footer className='container  lg:space-y-16 px-4 py-10'>
            <div className='container space-y-4 font-poppins lg:grid grid-cols-12 py-10  items-start'>
                <div className=" col-span-6 space-y-2 lg:space-y-6">
                    <Image src='/logo.png' alt="logo" width={70} height={70} />
                    <p className='w-[360px] leading-9 font-poppins text-[#A1A1A1]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Sed ut perspiciatis unde omnis iste </p>
                    <ul className='flex items-center gap-4'>
                        <li>
                            <a className='divv' href="">
                                <svg className='m-auto w-[21px]   ' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path className='duration-500' d="M44.165 4.16687H5.83171C4.90983 4.16687 4.16504 4.91166 4.16504 5.83354V44.1669C4.16504 45.0887 4.90983 45.8335 5.83171 45.8335H44.165C45.0869 45.8335 45.8317 45.0887 45.8317 44.1669V5.83354C45.8317 4.91166 45.0869 4.16687 44.165 4.16687ZM39.3525 16.3283H36.0244C33.415 16.3283 32.9098 17.5679 32.9098 19.3908V23.4065H39.139L38.3265 29.6929H32.9098V45.8335H26.415V29.6981H20.9827V23.4065H26.415V18.771C26.415 13.3908 29.7015 10.4585 34.5036 10.4585C36.8057 10.4585 38.7796 10.6304 39.3577 10.7085V16.3283H39.3525Z" fill="#AAAAAA" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className='divv' href="">
                                <svg className='m-auto w-[21px] ' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path className='duration-500' d="M44.165 4.16699H5.83171C4.90983 4.16699 4.16504 4.91178 4.16504 5.83366V44.167C4.16504 45.0889 4.90983 45.8337 5.83171 45.8337H44.165C45.0869 45.8337 45.8317 45.0889 45.8317 44.167V5.83366C45.8317 4.91178 45.0869 4.16699 44.165 4.16699ZM36.2119 19.2555C36.2275 19.5003 36.2275 19.7555 36.2275 20.0055C36.2275 27.6514 30.4046 36.4587 19.764 36.4587C16.4827 36.4587 13.4411 35.5055 10.8786 33.8649C11.3473 33.917 11.7952 33.9378 12.2744 33.9378C14.9827 33.9378 17.4723 33.0212 19.4567 31.4691C16.915 31.417 14.7796 29.7503 14.0505 27.4587C14.9411 27.5889 15.7432 27.5889 16.6598 27.3545C15.3511 27.0886 14.1748 26.3778 13.3307 25.3429C12.4867 24.3081 12.0269 23.0129 12.0296 21.6774V21.6045C12.7952 22.0368 13.6963 22.3024 14.639 22.3389C13.8465 21.8107 13.1966 21.0952 12.7469 20.2557C12.2971 19.4162 12.0615 18.4787 12.0609 17.5264C12.0609 16.4482 12.3421 15.4639 12.8473 14.6097C14.2999 16.3979 16.1126 17.8604 18.1675 18.9022C20.2223 19.944 22.4734 20.5418 24.7744 20.6566C23.9567 16.7243 26.8942 13.542 30.4255 13.542C32.0921 13.542 33.5921 14.2399 34.6494 15.3649C35.9567 15.1201 37.2067 14.6305 38.3213 13.9743C37.889 15.3128 36.9827 16.443 35.7796 17.1566C36.9463 17.0316 38.0713 16.7087 39.113 16.2555C38.3265 17.4118 37.3421 18.4378 36.2119 19.2555Z" fill="#AAAAAA" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className='divv' href="">
                                <svg className='m-auto w-[21px] ' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path className='duration-500' d="M24.9934 18.0529C21.1679 18.0529 18.046 21.1748 18.046 25.0003C18.046 28.8258 21.1679 31.9477 24.9934 31.9477C28.8189 31.9477 31.9408 28.8258 31.9408 25.0003C31.9408 21.1748 28.8189 18.0529 24.9934 18.0529ZM45.8304 25.0003C45.8304 22.1234 45.8565 19.2725 45.6949 16.4008C45.5333 13.0652 44.7724 10.1048 42.3332 7.6657C39.8889 5.22134 36.9338 4.46562 33.5982 4.30405C30.7212 4.14248 27.8703 4.16854 24.9986 4.16854C22.1217 4.16854 19.2708 4.14248 16.3991 4.30405C13.0635 4.46562 10.1031 5.22655 7.66399 7.6657C5.21963 10.1101 4.46391 13.0652 4.30234 16.4008C4.14077 19.2777 4.16683 22.1286 4.16683 25.0003C4.16683 27.8721 4.14077 30.7282 4.30234 33.5999C4.46391 36.9355 5.22484 39.8958 7.66399 42.335C10.1083 44.7793 13.0635 45.535 16.3991 45.6966C19.276 45.8582 22.1269 45.8321 24.9986 45.8321C27.8756 45.8321 30.7264 45.8582 33.5982 45.6966C36.9338 45.535 39.8941 44.7741 42.3332 42.335C44.7776 39.8906 45.5333 36.9355 45.6949 33.5999C45.8617 30.7282 45.8304 27.8773 45.8304 25.0003ZM24.9934 35.6898C19.0779 35.6898 14.3039 30.9158 14.3039 25.0003C14.3039 19.0849 19.0779 14.3108 24.9934 14.3108C30.9089 14.3108 35.6829 19.0849 35.6829 25.0003C35.6829 30.9158 30.9089 35.6898 24.9934 35.6898ZM36.1207 16.3695C34.7396 16.3695 33.6242 15.2542 33.6242 13.873C33.6242 12.4919 34.7396 11.3765 36.1207 11.3765C37.5019 11.3765 38.6172 12.4919 38.6172 13.873C38.6176 14.201 38.5533 14.5258 38.428 14.8289C38.3027 15.1319 38.1188 15.4073 37.8869 15.6392C37.655 15.8711 37.3796 16.055 37.0766 16.1803C36.7735 16.3056 36.4487 16.3699 36.1207 16.3695Z" fill="#AAAAAA" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className='divv' href="">
                                <svg className='m-auto w-[21px] ' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path className='duration-500' d="M44.9628 15.2984C44.7256 14.3532 44.2606 13.4911 43.6142 12.7986C42.9679 12.1061 42.1629 11.6074 41.2798 11.3524C38.0292 10.4169 24.9991 10.4169 24.9991 10.4169C24.9991 10.4169 11.969 10.4169 8.71841 11.3474C7.83495 11.6016 7.02954 12.1 6.38306 12.7927C5.73658 13.4853 5.27179 14.3478 5.03538 15.2935C4.16577 18.7767 4.16577 26.0419 4.16577 26.0419C4.16577 26.0419 4.16577 33.307 5.03538 36.7853C5.51436 38.7061 6.92805 40.2188 8.71841 40.7314C11.969 41.6669 24.9991 41.6669 24.9991 41.6669C24.9991 41.6669 38.0292 41.6669 41.2798 40.7314C43.0748 40.2188 44.4838 38.7061 44.9628 36.7853C45.8324 33.307 45.8324 26.0419 45.8324 26.0419C45.8324 26.0419 45.8324 18.7767 44.9628 15.2984ZM20.8603 32.7099V19.3739L31.649 25.9921L20.8603 32.7099Z" fill="#AAAAAA" />
                                </svg>
                            </a>
                        </li>

                    </ul>
                </div>
                <div className='col-span-2 flex flex-col space-y-4 lg:space-y-5'>
                    <h3 className='text-3xl font-semibold'>Menu</h3>
                    <div className='border-t border-[#F09804E5] px-6 border-2  transition-all duration-100  w-fit' />
                    <ul className=" space-y-3">
                        <li>
                            <Link onClick={() => setactive('home')} className={`${active === 'home' ? 'text-white' : 'text-[#A1A1A1]'}`}
                                href='/'>Home</Link>
                        </li>
                        <li>
                            <Link onClick={() => setactive('menu')} className={`${active === 'menu' ? 'text-white' : 'text-[#A1A1A1]'}`}
                                href='/menu'>Our Menu</Link>
                        </li>
                        <li>
                            <Link onClick={() => setactive('contact')} className={`${active === 'contact' ? 'text-white' : 'text-[#A1A1A1]'}`}
                                href='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='col-span-3 flex flex-col space-y-4 lg:space-y-5'>
                    <h3 className='text-3xl font-semibold'>Find Us</h3>
                    <div className='border-t border-[#F09804E5] px-6 border-2 transition-all duration-100  w-fit' />
                    <ul className=" space-y-3 lg:space-y-5 text-[#A1A1A1]">
                        <li className=' flex gap-3 '>
                            <span className='font-bold text-2xl text-white '>L.</span>
                            <p> Braga Street 28, Bandung, West Java, Indonesia
                            </p>
                        </li>
                        <li className=' flex gap-3 items-center'>
                            <span className='font-bold text-2xl text-white'>P.</span>
                            <p>+62 863812123</p>
                        </li>
                        <li className=' flex gap-3 items-center'>
                            <span className='font-bold text-2xl text-white'>E.</span>
                            <p>lezzatos@restaurant.com</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='text-[#A1A1A1] border-t w-2/3 pt-10 border-[#a1a1a144]'>
                © Copyright Dar d’jaj 2023, All right reserved.
            </div>
        </footer>
    )
}

export default Footer
