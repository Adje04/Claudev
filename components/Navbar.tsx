'use client'

import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '../constants'
import { useEffect, useState } from 'react';
import { BiMenu } from "react-icons/bi";
import { GrClose } from "react-icons/gr";



const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isScrolling, setIsCrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsCrolling(true);
      } else {
        setIsCrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, [])



  return (
    <nav className={` sticky top-0 flex-between max-container padding-container  w-full z-30 py-3
    ${isScrolling ? 'bg-primary/40 backdrop-blur-md' : 'bg-transparent'}`}>

      <Link href="/">
        <div className='flex-center gap-2'>
          <Image src="/logo.svg" alt='logo' width={48} height={48} />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
          </p>
        </div>
      </Link>

      <div className="flex-center gap-4 lg:hidden ">

        <button
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? (
            <GrClose className='inline-block text-white w-6 h-6' />
          ) : (
            <BiMenu className='inline-block text-white w-8 h-8' />
          )}
        </button>
      </div>

      <div className={`absolute top-full left-0 h-screen lg:h-auto bg-primary/50 backdrop-blur-md  shadow-md lg:static  w-[18.75rem] lg:w-auto lg:bg-transparent lg:shadow-none lg:flex ${navbar ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col lg:flex-row lg:space-x-6 p-4 lg:p-0">

          {NAV_LINKS.map((link) => (

            <li key={link.id} className="text-4xl text-center  lg:text-[14px] pb-3 lg:pb-0 lg:px-2 ">
              <Link
                href={link.href}
                className='regular-16 text-gray-10 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-purple '
                onClick={() => setNavbar(!navbar)}
              >
                {link.label}

              </Link>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  )

}

export default Navbar