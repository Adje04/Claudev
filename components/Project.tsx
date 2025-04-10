'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { PROJECTS } from "../constants";
import Button from "./Button";

interface Project {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
  website_link?: string;
}


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link,
}: Project) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Tilt
        tiltMaxAngleX={45}
        perspective={1000}
        scale={1}
        transitionSpeed={450}
        glareEnable={false}
        className='bg-white/5 border border-purple p-4 rounded-2xl sm:w-[340px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <Image
            src={image}
            alt={name}
            width={320}
            height={320}
            className='w-full h-full flex-center object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3'>
            <div className='black-gradient w-10 h-10 rounded-full flex-center cursor-pointer'>
              <Link href={source_code_link} target="_blank">
                <Image
                  src={'/social/github.svg'}
                  alt='source code'
                  width={36}
                  height={36}
                  className='object-contain'
                />
              </Link>
            </div>
          </div>
        </div>

        <div className='mt-5'>
        <div className="flex-between">
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
         {website_link &&
           <div className="relative">
             <Link href={website_link} target="_blank">
               <Button
                 type="button"
                 icon="/arrow.svg"
                 variant="border border-1 border-white rounded-full p-1 hover:bg-purple hover:border-0" 
               />
             </Link>
           </div>
         }
        </div>
           <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};


const Works = () => {
  return (
    <section className="padding-container max-container mt-[2.5rem]" id='projects'>
      <div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-sub-text">Mes travaux</p>
          <h2 className="section-head-text">Projets.</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Les projets suivants mettent en valeur mes compétences et mon expérience à travers des exemples concrets de réalisations.
        </motion.p>
      </div>

      <div className='mt-20 flex-center gap-5 xsl:justify-evenly flex-wrap'>
        {PROJECTS.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;