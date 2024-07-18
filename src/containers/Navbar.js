import Link from 'next/link'
import Image from 'next/image'
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon'
import Navlinks from './Navlinks'
import { useEffect, useState } from 'react'
import NavProfileLinks from './NavProfileLinks'
import assets from 'public/res/assets'

function Navbar() {
    return (
        <div className="w-full flex justify-center  shadow-lg">
            <div className="navbar py-2 bg-base-100 max-w-6xl">
                <div className="navbar-start ">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <Bars3Icon className="h-5 inline-block w-5" />
                        </label>
                    </div>
                    <div>
                        <Link href="/">
                            <span className='font-bold text-xl'>
                                <Image
                                    width={assets.mediaSize.navbar_logo}
                                    height={assets.mediaSize.navbar_logo}
                                    src={assets.common.navbar_logo}
                                    className="mask inline-block mr-2 mask-circle w-12" />
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal custom-menu">
                        <Navlinks />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar