'use client';

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";
import { SERVICES } from "../constants";
import { fadeIn, textVariant } from "./utils/motion";
import Button from "./Button";
import { useI18n, useScopedI18n } from "@/locales/client";


interface ServiceCardProps {
  index: number;
  title: typeof SERVICES[number]['title'];
  icon: string;
}

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => { 
  const t = useScopedI18n('services')
  return (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full purple-yellow-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <Image
          src={icon}
          alt='service-type'
          width={64}
          height={64}
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {t(title as keyof typeof t)}
        </h3>
      </div>
    </motion.div>
  </Tilt> )
};

const About = () => {
  const scopedT = useScopedI18n('about')
  const t = useScopedI18n('services')
  return (
    <section className="padding-container max-container mt-[2.5rem]" id='about'>
      <div className="flex flex-col flex-center gap-5 md:flex-row">
        <motion.div >
          <motion.div variants={textVariant()}>
            <p className="section-sub-text">{scopedT('title')}</p>
            <h2 className="section-head-text">{scopedT('overview')}</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="my-4 text-secondary text-[17px]  max-w-3xl leading-[30px]"
          >
           {scopedT('bio')}
          </motion.p>

          <a href="/utils/adje_claude_resume.pdf" download>
            <Button
              type={'button'} title={scopedT('cv')}
              variant="btn_yellow" />
          </a>

        </motion.div>

        <Image src='/me.png' alt='myself' width={360} height={360} className="my_photo" />
      </div>

      <div className="mt-20 flex-center flex-wrap gap-10">
        {SERVICES.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            title={(service.title)}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default About;