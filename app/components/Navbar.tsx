'use client'

import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '../constants'
import Button from './Button'
import { useState } from 'react';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);


  return (
    <nav className="bg-primary border-b-2 border-purple flex-between max-container padding-container w-full fixed z-30 py-3">

      <Link href="/">
        <div className='flex-center gap-2'>
          <Image src="/logo.svg" alt='logo' width={36} height={36} />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Adje <span className='text-yellow-50'>.</span>Dev
          </p>
        </div>
      </Link>

      <div className="flex-center gap-4 lg:hidden ">

        <button
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? (
            <Image src="/close.svg" width={32} height={32} alt="close"
              className='inline-block bg-black' />
          ) : (
            <Image src="menu.svg" alt="menu" height={32} width={32}
              className='inline-block  dark:invert' />
          )}
        </button>
      </div>


      <div className={`absolute top-full left-0 h-screen lg:h-auto  dark:bg-black   bg-green-100 shadow-md lg:static  w-[250px] lg:w-auto lg:bg-transparent lg:shadow-none lg:flex ${navbar ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col lg:flex-row lg:space-x-6 p-4 lg:p-0">

          {NAV_LINKS.map((link) => (

            <li className="text-2xl lg:text-[14px] pb-3 lg:pb-0 text-white lg:px-2  lg:border-b-0 ">
              <Link key={link.slug}
                href={link.href}
                className='regular-16 text-gray-50 dark:text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-50'
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








//  import React, { useEffect, useState } from "react";
//  import { Link } from "react-router-dom";


//  import { navLinks } from "../constants";
//  import { logo, menu, close } from "../assets";

//  const Navbar = () => {
//    const [active, setActive] = useState("");
//    const [toggle, setToggle] = useState(false);
//    const [scrolled, setScrolled] = useState(false);

//    useEffect(() => {
//      const handleScroll = () => {
//        const scrollTop = window.scrollY;
//        if (scrollTop > 100) {
//          setScrolled(true);
//        } else {
//          setScrolled(false);
//        }
//      };

//      window.addEventListener("scroll", handleScroll);

//      return () => window.removeEventListener("scroll", handleScroll);
//    }, []);

//    return (
//      <nav
//        className={`
//          padding-x w-full h-auto border-b-2 border-purple flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
//          }`}
//      >
//        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
//          <Link
//            to='/'
//            className='flex items-center gap-2'
//            onClick={() => {
//              setActive("");
//              window.scrollTo(0, 0);
//            }}
//          >
//            <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
//            <p className='text-white text-[18px] font-bold cursor-pointer flex '>
//              Adje <span className='text-yellow-50'>.</span>Dev
//            </p>
//          </Link>

//          <ul className='list-none hidden sm:flex flex-row gap-10'>
//            {navLinks.map((nav) => (
//              <li
//                key={nav.id}
//                className={`${active === nav.title ? "text-white" : "text-secondary"
//                  } hover:text-white text-[18px] font-medium cursor-pointer`}
//                onClick={() => setActive(nav.title)}
//              >
//                <a href={`#${nav.id}`}>{nav.title}</a>
//              </li>
//            ))}
//          </ul>

//          <div className='sm:hidden flex flex-1 justify-end items-center'>
//            <img
//              src={toggle ? close : menu}
//              alt='menu'
//              className='w-[28px] h-[28px] object-contain'
//              onClick={() => setToggle(!toggle)}
//            />

//            <div
//              className={`${!toggle ? "hidden" : "flex"
//                } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
//            >
//              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
//                {navLinks.map((nav) => (
//                  <li
//                    key={nav.id}
//                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
//                      }`}
//                    onClick={() => {
//                      setToggle(!toggle);
//                      setActive(nav.title);
//                    }}
//                  >
//                    <a href={`#${nav.id}`}>{nav.title}</a>
//                  </li>
//                ))}
//              </ul>
//            </div>
//          </div>
//        </div>
//      </nav>
//    );
//  };

//  export default Navbar;

