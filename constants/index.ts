import { FaCode, FaServer, FaPaintBrush, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { SiDatabricks } from 'react-icons/si';


export const NAV_LINKS = [
  { id: 1, href: '/', label: 'Accueil' },
  { id: 2, href: '/#about', label: 'A propos' },
  { id: 3, href: '/#projects', label: 'Projets' },
  { id: 4, href: '/#tech', label: 'Tech' },
  { id: 5, href: '/#contact', label: 'Contact' },
];


export const SKILL_DATA = [
  {
    title: 'Frontend',
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
    title: 'Backend',
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
    title: 'Bases de données',
    icon: SiDatabricks,
    skills: [
      { name: 'MySQL', tech: "/tech-skill/skill-icons--mysql-dark.svg" },
      { name: 'MongoDB', tech: "/tech-skill/skill-icons--mongodb.svg" },
      { name: 'PostgreSQL', tech: "/tech-skill/skill-icons--postgresql-dark.svg"},
      { name: 'SQLite', tech: "/tech-skill/skill-icons--sqlite.svg" },
    ]
  },
  {
    title: 'Design',
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
    title: "Développement Frontend ",
    icon: '/tech/client.svg',
  },
  {
    title: "Développement mobile",
    icon: '/tech/mobile.svg',
  },
  {
    title: "Développement backend",
    icon: '/tech/server.svg',
  },
  {
    title: "Web design",
    icon: '/tech/design.svg',
  },
];


export const PROJECTS = [
  {
    name: "Trip Camp",
    description:
      "Plateforme en ligne qui permet aux utilisateurs de planifier et réserver des randonnées, du camping et d'autres aventures en plein air, avec la possibilité d'engager un guide et de tout organiser depuis le site.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: "/trip-camp.png",
    source_code_link: "https://github.com/Adje04/trip-camp.git",
    website_link: "https://trip-camp.vercel.app/"
  },
  {
    name: "ForAcademy",
    description:
      "ForAcademy est le site vitrine en frontend d'une académie fictive de formation professionnelle. Il permet de découvrir les programmes offerts et de poser sa candidature en ligne facilement.",
    tags: [
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: 'Laravel/php',
        color: "orange-text-gradient",
      },
      {
        name: "js",
        color: "yellow-text-gradient",
      },
    ],
    image: "/hero section.svg",
    source_code_link: "https://github.com/Adje04/forAcademy.git",
    website_link: ""
  },
  {
    name: "Nezon",
    description:
      "Site vitrine de restaurant permettant aux utilisateurs de réserver une table, commander des plats en ligne et découvrir l’offre culinaire du restaurant grâce à une interface moderne et intuitive.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: 'css',
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: "/resto-nezon.png",
    source_code_link: "https://github.com/Adje04/restoNezon.git",
    website_link: "https://adje04.github.io/restoNezon"
  },
  {
    name: "ForChat",
    description:
      "Plateforme de discussion et de messagerie privée permettant aux utilisateurs de créer ou rejoindre des communautés partageant leurs centres d’intérêt et d’échanger en toute simplicité.",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "Rest API",
        color: "yellow-text-gradient",
      },

      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
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