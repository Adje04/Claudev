'use client'

import React from 'react';
import { SKILL_DATA } from '../constants';
import { IconType } from 'react-icons';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { textVariant } from './utils/motion';
// Importations corrigées des icônes
import { FaCode, FaServer, FaPaintBrush } from 'react-icons/fa';
import { SiDatabricks } from 'react-icons/si';

interface Skill {
    name: string;
    tech: string;
}

const Skills = () => {
    return (
        <section className="padding-container max-container mt-10">
            <motion.div variants={textVariant()}>
                <p className="section-sub-text">Competences</p>
                <div className='flex-center gap-4'>
                    <h2 className="section-head-text">Technologies.</h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-yellow-50 to-blue-50 mx-auto" />
                </div>
            </motion.div>

            <div className="flex flex-row flex-wrap justify-center gap-10">
                {SKILL_DATA.map((category, index) => (
                    <CardSkill
                        key={index}
                        title={category.title}
                        icon={category.icon}
                        skills={category.skills}
                    />
                ))}
            </div>
        </section>
    );
}

interface CardSkillProps {
    title: string;
    icon: IconType;
    skills: Skill[];
}

const CardSkill = ({ title, icon: Icon, skills }: CardSkillProps) => {
    return (
        <div className="bg-white/5 rounded-lg px-6 pt-3 pb-3 relative xs:w-72 w-full h-auto transition-transform duration-300 hover:scale-110 hover:shadow-[4px_4px_0_#4f46e5] border border-purple">
            <h3 className="text-purple text-xl mb-4 flex items-center gap-2">
                {Icon && <Icon />} {/* Rendu sécurisé de l'icône */}
                {title}
            </h3>
            <ul className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                    <li
                        key={`${skill.name}-${index}`}
                        className="flex flex-col items-center justify-end cursor-pointer relative transition-transform duration-300 hover:scale-105"
                    >
                        <div className="group relative flex-center flex-col">
                            <div className="text-4xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:text-yellow-50">
                                <Image 
                                    src={skill.tech} 
                                    alt={skill.name}
                                    width={32}
                                    height={32}
                                    className="hover:drop-shadow-[0_0_4mm_#4f46e5] hover:border-0" 
                                />
                            </div>
                            <span className="absolute -bottom-6 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-1 text-xs text-purple-300 hover:text-yellow-50">
                                {skill.name}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;