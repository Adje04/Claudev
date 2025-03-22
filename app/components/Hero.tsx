'use client';

import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import { SOCIALS_WORKS } from "../constants";
import {ComputersCanvas }from "./canvas";


const Hero = () => {
  return (
    <section className='padding-container mx-auto pt-[75px]'>

      <div className="max- flex-center gap-8 flex-col md:flex-row mb-8">
        <div className=' w-full h-auto  flex flex-row items-start gap-5' >

          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-purple' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <div>
            <h1 className={` text-gray-20`}>
              <span className="hero-sub-text"> Salut, je suis </span>  <span className='hero-head-text text-purple'>Adjé</span>
            </h1>
            <p className='hero-sub-text my-2 text-gray-20'>
              Developpeur d'applications <br /><span className=' text-purple'> web <span className=' text-gray-20'>&</span> mobiles</span>
            </p>
            <div className="flex-start gap-4" >
              <Link href={'tel: +22893674548'}>
                <Button
                  type={'button'} title={'contact'}
                  variant="btn_yellow" />
              </Link>
            </div>
            <div className="flex-start gap-4 mt-4" >
              {SOCIALS_WORKS.map((social) => (
                social.links.map((link) => (
                  <Link key={link.id} href={link.href} target="_blank">
                    <Image src={link.icon} alt={'link'}
                      width={36}
                      height={36}
                      className="rounded-full" />
                  </Link>
                ))))}

            </div>
          </div>

        </div>
        <div className='flex-1 h-auto'>
        
          <ComputersCanvas />
        </div>
      </div>
      <br className='sm:block hidden' /><br className='sm:block hidden' />

    </section>
  );
};

export default Hero;







// const Hero = () => {
//   return (
//     <section className='padding-container mx-auto pt-[75px]'>

// <div className="flex xl:flex-row flex-col gap-8">
//     <div className='flex-[0.75] h-auto flex flex-row items-start gap-5' >

//       <div className='flex flex-col justify-center items-center mt-5'>
//         <div className='w-5 h-5 rounded-full bg-purple' />
//         <div className='w-1 sm:h-80 h-40 violet-gradient' />
//       </div>

//       <div>
//         <h1 className={` text-gray-20`}>
//           <span className="hero-sub-text"> Salut, je suis </span>  <span className='hero-head-text text-purple'>Adjé</span>
//         </h1>
//         <p className='hero-sub-text my-2 text-gray-20'>
//           Developpeur d'applications <br /><span className=' text-purple'> web <span className=' text-gray-20'>&</span> mobiles</span>
//         </p>
//         <div className="flex-start gap-4" >
//           <Link href={'tel: +22893674548'}>
//             <Button
//               type={'button'} title={'contact'}
//               variant="btn_yellow" />
//           </Link>
//         </div>
//         <div className="flex-start gap-4 mt-4" >
//           {SOCIALS_WORKS.map((social) => (
//             social.links.map((link) => (
//               <Link key={link.id} href={link.href} target="_blank">
//                 <Image src={link.icon} alt={'link'}
//                   width={36}
//                   height={36}
//                   className="rounded-full" />
//               </Link>
//             ))))}

//         </div>
//       </div>

//     </div>
//     <div className='xl:flex-1 xl:h-auto md:h-[500px] h-[350px]'>
//       {<ComputersCanvas />}
//     </div>
//   </div>
//       <br className='sm:block hidden' /><br className='sm:block hidden' />

//     </section>


//   );
// };










