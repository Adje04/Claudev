

 const Hero = () => {
   return (
     <section className='relative w-full h-screen mx-auto'>
       <div className={`absolute inset-0 top-[100px]  max-w-7xl mx-auto padding-x flex flex-row items-start gap-5 mb-8`} >

         <div className='flex flex-col justify-center items-center mt-5'>
           <div className='w-5 h-5 rounded-full bg-purple' />
           <div className='w-1 sm:h-80 h-40 violet-gradient' />
         </div>

         <div>
           <h1 className={` text-white`}>
             <span className="hero-sub-text"> Salut, je suis </span>  <span className='hero-head-text text-purple'>Adje</span>
           </h1>
           <p className={`hero-sub-text my-2 text-white-100`}>
             Developpeur d'applications <br className='sm:block hidden' /><span className=' text-purple'> web <span className=' text-white'>&</span> mobiles</span>
           </p>
           <div className="flex-start gap-4" >
             <button className="btn_yellow regular-14 flex-center rounded-2xl">contact</button>
             <button className="btn_yellow regular-14 flex-center rounded-2xl">Telecharger CV</button>
           </div>
         </div>

       </div><br className='sm:block hidden' /><br className='sm:block hidden' />

     
     </section>
   );
 };

 export default Hero;




// import { FaLocationArrow } from "react-icons/fa6";

// import MagicButton from "./MagicButton";
// import { Spotlight } from "./ui/Spotlight";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";

// const Hero = () => {
//   return (
//     <div className="pb-20 pt-36">
//       {/**
//        *  UI: Spotlights
//        *  Link: https:ui.aceternity.com/components/spotlight
//        */}
//       <div>
//         <Spotlight
//           className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
//           fill="yellow"
//         />
//         <Spotlight
//           className="h-[80vh] w-[50vw] top-10 left-full"
//           fill="purple"
//         />
//         <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
//       </div>

//       {/**
//        *  UI: grid
//        *  change bg color to bg-black-100 and reduce grid color from
//        *  0.2 to 0.03
//        */}
//       <div
//         className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
//        absolute top-0 left-0 flex items-center justify-center"
//       >
//         {/* Radial gradient for the container to give a faded look */}
//         <div
//            chnage the bg to bg-black-100, so it matches the bg color and will blend in
//           className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
//          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
//         />
//       </div>

//       <div className="flex justify-center relative my-20 z-10">
//         <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
//           <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
//             Dynamic Web Magic with Next.js
//           </p>

//           {/**
//            *  Link: https:ui.aceternity.com/components/text-generate-effect
//            *
//            *  change md:text-6xl, add more responsive code
//            */}
//           <TextGenerateEffect
//             words="Transforming Concepts into Seamless User Experiences"
//             className="text-center text-[40px] md:text-5xl lg:text-6xl"
//           />

//           <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
//             Hi! I&apos;m Adrian, a Next.js Developer based in Croatia.
//           </p>

//           <a href="#about">
//             <MagicButton
//               title="Show my work"
//               icon={<FaLocationArrow />}
//               position="right"
//             />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
