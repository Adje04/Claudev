import { FaCode, FaServer, FaPaintBrush, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { SiDatabricks } from 'react-icons/si';


export const NAV_LINKS = [
  { id: 1, href: '/', label: 'home' },
  { id: 2, href: '/#about', label: 'about' },
  { id: 3, href: '/#projects', label: 'projects' },
  { id: 4, href: '/#tech', label: 'tech' },
  { id: 5, href: '/#contact', label: 'contact' },
];


export const SKILL_DATA = [
  {
    title: 'frontend',
    icon: FaCode,
    skills: [
      { name: 'HTML5', tech: "/tech-skill/logos--html-5.svg" },
      { name: 'CSS3', tech: "/tech-skill/logos--css-3.svg" },
      { name: 'JavaScript', tech: "/tech-skill/skill-icons--javascript.svg" },
      { name: 'React', tech: "/tech-skill/skill-icons--react-dark.svg" },
      { name: 'Tailwindcss', tech: "/tech-skill/skill-icons--tailwindcss-dark.svg" },
    ]
  },
  {
    title: 'backend',
    icon: FaServer,
    skills: [

      { name: 'PHP', tech: "/tech-skill/skill-icons--php-dark.svg"},
      { name: 'Java', tech: "/tech-skill/skill-icons--java-light.svg" },
      { name: 'Node.js', tech: "/tech-skill/skill-icons--nodejs-dark.svg" },
      { name: 'Nextjs', tech: "/tech-skill/skill-icons--nextjs-light.svg"},
      { name: 'Laravel', tech: "/tech-skill/skill-icons--laravel-light.svg" },
    ]
  },
  {
    title: 'database',
    icon: SiDatabricks,
    skills: [
      { name: 'MySQL', tech: "/tech-skill/skill-icons--mysql-dark.svg" },
      { name: 'MongoDB', tech: "/tech-skill/skill-icons--mongodb.svg" },
      { name: 'PostgreSQL', tech: "/tech-skill/skill-icons--postgresql-dark.svg"},
      { name: 'SQLite', tech: "/tech-skill/skill-icons--sqlite.svg" },
    ]
  },
  {
    title: 'design',
    icon: FaPaintBrush,
    skills: [
      { name: 'Figma', tech: "/tech-skill/skill-icons--figma-dark.svg" },
      { name: 'Photoshop', tech: "/tech-skill/logos--adobe-photoshop.svg" },
      { name: 'Illustator', tech: "/tech-skill/logos--adobe-illustrator.svg" },
    ]
  }
];


export const SERVICES = [
  {
    title: "frontend",
    icon: '/tech/client.svg',
  },
  {
    title: "mobile",
    icon: '/tech/mobile.svg',
  },
  {
    title: "backend",
    icon: '/tech/server.svg',
  },
  {
    title: "design",
    icon: '/tech/design.svg',
  },
];

export const PROJECTS = [
  {
    name: "tripcamp.name",
    description: "tripcamp.description",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
    ],
    image: "/trip-camp.png",
    source_code_link: "https://github.com/Adje04/trip-camp.git",
    website_link: "https://trip-camp.vercel.app/"
  },
  {
    name: "foracademy.name",
    description: "foracademy.description",
    tags: [
      { name: "php", color: "green-text-gradient" },
      { name: 'Laravel/php', color: "orange-text-gradient" },
      { name: "js", color: "yellow-text-gradient" },
    ],
    image: "/hero section.svg",
    source_code_link: "https://github.com/Adje04/forAcademy.git",
    website_link: ""
  },
  {
    name: "forchat.name",
    description: "forchat.description",
    tags: [
      { name: "Nodejs", color: "blue-text-gradient" },
      { name: "Rest API", color: "yellow-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
    ],
    image: "/discussions.svg",
    source_code_link: "https://github.com/Adje04/foruma-server-part.git",
    website_link: ""
  },
];

export const SOCIALS_WORKS = [
  {
    title: 'me suivre',
    links: [
      { id: 2, icon: FaGithub, href: 'https://github.com/Adje04' },
      { id: 3, icon: FaLinkedin, href: 'https://linkedin.com/in/adj%C3%A9-claude-kponon-eklou-468b16289/' },
      { id: 1, icon: FaWhatsapp, href: 'https://wa.me/93674548' },
    ],
  }
];