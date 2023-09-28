'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Nav = () => {
    const pathName = usePathname()
    console.log(pathName)


    return (

        <header className="navbg z-50  font-poppins">
            <div className="flex container justify-between  py-8 items-center   px-5">
                <Image src='/logo.png' alt="logo" width={60} height={60} />
                <nav className="text-white">
                    <ul className="flex gap-10 font-medium transition-all duration-300 ">
                        <li className=" space-y-2">
                            <Link
                                className={` ${pathName === '/' ? ' text-white  ' : 'text-[#D1D1D1]'} `}
                                href='/'>Home</Link>
                            <div className={`${pathName === '/' ? 'w-10 m-auto     border-primary  border-b-2' : 'border-none '} `} />

                        </li>
                        <li className=" space-y-2">
                            <Link
                                className={` ${pathName === '/menu' ? ' text-white  ' : 'text-[#D1D1D1]'} `}
                                href='/menu'>Our Menu</Link>
                            <div className={`${pathName === '/menu' ? 'w-10 m-auto     border-primary  border-b-2' : 'border-none '} `} />

                        </li>
                        <li className=" space-y-2">
                            <Link
                                className={` ${pathName === '/contact' ? ' text-white  ' : 'text-[#D1D1D1]'} `}
                                href='/contact'>Contact</Link>
                            <div className={`${pathName === '/contact' ? 'w-10 m-auto     border-primary  border-b-2' : 'border-none '} `} />
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    )
}

export default Nav