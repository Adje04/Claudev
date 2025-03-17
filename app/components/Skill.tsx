import React, { ReactNode } from 'react';
import { skillsData } from '../constants';
import { FaCode, FaServer, FaDatabase, FaPaintBrush } from 'react-icons/fa';
import { IconBaseProps, IconType } from 'react-icons';

interface Skill {
    name: string;
    icon: IconType;
}


const Skill = () => {
    return (

        <section className="padding-container mx-auto py-12 px-4">
            <div className="text-center mb-16" data-aos="fade-up">
                <h1 className="text-4xl font-bold mb-4">Skills</h1>
                <div className="h-1 w-20 bg-purple mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-6xl mx-auto">
                {skillsData.map((category, index) => (
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

const CardSkill = ({ title, icon, skills }: CardSkillProps) => {
    return (
        <div className="bg-white/5 rounded-lg p-4 relative w-72 h-auto transition-transform duration-300 hover:scale-110 hover:shadow-[5px_5px_0_#4f46e5] border border-purple">
            <h3 className="text-purple text-xl mb-4 flex items-center gap-2">
            {icon ? React.createElement(icon) : null} {title}
            </h3>
            <ul className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className="flex flex-col items-center justify-end cursor-pointer relative transition-transform duration-300 hover:scale-105"
                    >
                        <div className="group relative">
                            <div className="text-4xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:text-red-500">
                            {skill.icon && <skill.icon />}
                            </div>
                            <span className="absolute -bottom-8 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-6 text-accent">
                                {skill.name}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skill;