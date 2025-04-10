'use client';

import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import { SOCIALS_WORKS } from "../constants";


const Hero = () => {
  return (
    <section className="padding-container max-container md:pt-[75px] pt-[30px] pb-8 bg-[url(/footer-grid.svg)] bg-center bg-cover">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div className="flex-center gap-5 max-xs:gap-0 lg:gap-8 md:flex-row mb-8">
          <div className='flex flex-col justify-center items-center mt-5  max-xs:hidden'>
            <div className='w-5 h-5 rounded-full bg-purple' />
            <div className='w-1 sm:h-80 h-[45vh] violet-gradient' />
          </div>
          <div className="max-xs:text-center">
            <h1 className='text-secondary'>
              <span className="bold-32"> Salut! Je suis </span>  <span className='hero-head-text text-purple'><br/>Adjé Claude</span>
            </h1>
            <p className=' regular-18 leading-8 max-xs:regular-16 my-2 text-secondary'>
               {/* Développeur d'applications <br  className="max-md:hidden"/>
              <span className=' text-purple'> web <span className=' text-gray-10'>&</span> mobiles</span>  */}
              <span className=' text-gray-10 max-xs:regular-18'>Développeur d’applications, </span>
              je transforme des idées en  <span className=' text-purple'>solutions numériques</span> percutantes
            </p>
            <div className="flex-start max-xs:flex-center gap-4" >
              <Link href={'tel: +22893674548'}>
                <Button
                  type={'button'} title={'contact'}
                  variant="btn_yellow" />
              </Link>
            </div>
            <div className="flex-start max-xs:flex-center gap-4 mt-4" >
              {SOCIALS_WORKS.map((social) => (
                social.links.map((link) => (
                  <Link key={link.id} href={link.href} className="cursor-pointer" target="_blank">
                    {link.icon && <link.icon className="w-9 h-9 text-secondary hover:p-1 hover:rounded-lg hover:bg-purple hover:text-primary" />}
                  </Link>
                ))))}

            </div>
          </div>
        </div>
        <div className="max-sm:w-full min-h-auto self-center ">
          <img src={'/code.svg'} alt={'code-image'} />
        </div>

      </div>
      <br className='sm:block hidden' /><br className='sm:block hidden' />

    </section>
  );
};

export default Hero;