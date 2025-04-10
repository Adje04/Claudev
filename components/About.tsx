'use client';

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";
import { SERVICES } from "../constants";
import { fadeIn, textVariant } from "./utils/motion";
import Button from "./Button";


interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => (
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
          alt={title}
          width={64}
          height={64}
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section className="padding-container max-container mt-[2.5rem]" id='about'>
      <div className="flex flex-col flex-center gap-5 md:flex-row">
        <motion.div >
          <motion.div variants={textVariant()}>
            <p className="section-sub-text">Introduction</p>
            <h2 className="section-head-text">Aperçu.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="my-4 text-secondary text-[17px]  max-w-3xl leading-[30px]"
          >
            Je suis Développeur de logiciels qualifié avec de l'expérience en PhP,
            TypeScript et JavaScript, et une expertise dans des frameworks comme
            Laravel, Node.js et Nextjs.
            J'apprends rapidement et je collabore étroitement avec les clients pour
            créer des solutions efficaces, évolutives et conviviales qui résolvent
            les problèmes du monde réel. Travaillons ensemble pour donner vie à vos
            idées !
          </motion.p>

          <a href="/utils/Adjé Claude CV.pdf" download>
            <Button
              type={'button'} title={'Telecharger CV'}
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
            title={service.title}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default About;