import { FaCode, FaServer, FaPaintBrush } from 'react-icons/fa';
import {  SiDatabricks} from 'react-icons/si';

// NAVIGATION
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
      { name: 'HTML5', tech: "/tech-skill/logos--html-5.svg"/*FaHtml5 */ },
      { name: 'CSS3', tech: "/tech-skill/logos--css-3.svg"/*FaCss3Alt*/ },
      { name: 'JavaScript', tech: "/tech-skill/skill-icons--javascript.svg"/*SiJavascript*/ },
      { name: 'React', tech: "/tech-skill/skill-icons--react-dark.svg"/*FaReact*/ },
      { name: 'Tailwindcss', tech: "/tech-skill/skill-icons--tailwindcss-dark.svg"/*FaReact*/ },
    ]
  },
  {
    title: 'Backend',
    icon: FaServer,
    skills: [

      { name: 'PHP', tech: "/tech-skill/skill-icons--php-dark.svg"/*SiPhp*/ },
      { name: 'Java', tech: "/tech-skill/skill-icons--java-light.svg"/*FaJava*/ },
      { name: 'Javascript', tech: "/tech-skill/skill-icons--javascript.svg"/*SiJavascript*/ },
      { name: 'Node.js', tech: "/tech-skill/skill-icons--nodejs-dark.svg"/*SiNodedotjs*/ },
      { name: 'Nextjs', tech: "/tech-skill/skill-icons--nextjs-light.svg"/*SiNodedotjs*/ },
      { name: 'Laravel', tech: "/tech-skill/skill-icons--laravel-light.svg"/*SiLaravel*/ },
    ]
  },
  {
    title: 'Bases de données',
    icon: SiDatabricks,
    skills: [
      { name: 'MySQL', tech: "/tech-skill/skill-icons--mysql-dark.svg"/*SiMysql*/ },
      { name: 'MongoDB', tech: "/tech-skill/skill-icons--mongodb.svg"/*SiMongodb*/ },
      { name: 'PostgreSQL', tech: "/tech-skill/skill-icons--postgresql-dark.svg"/*SiPostgresql*/ },
      { name: 'SQLite', tech: "/tech-skill/skill-icons--sqlite.svg"/*SiPostgresql*/ },
    ]
  },
  {
    title: 'Design',
    icon: FaPaintBrush,
    skills: [
      { name: 'Figma', tech: "/tech-skill/skill-icons--figma-dark.svg"/*SiFigma*/ },
      { name: 'Photoshop', tech: "/tech-skill/logos--adobe-photoshop.svg"/*SiAdobephotoshop*/ },
      { name: 'Illustator', tech: "/tech-skill/logos--adobe-illustrator.svg"/*SiAdobephotoshop*/ },
    ]
  }
];


export const SERVICES = [
  {
    title: "Developpeur Frontend ",
    icon: '/globe.svg',
  },
  {
    title: "Developpeur Kotlin",
    icon: '/globe.svg',
  },
  {
    title: "Backend Developer",
    icon: '/globe.svg',
  },
  {
    title: "graphic designer",
    icon: '/globe.svg',
  },
];

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

export const PROJECTS = [
  {
    name: "Trip Camp",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    image: '/image.png',
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: '/herobg.png',
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: '/herobg.png',
    source_code_link: "https://github.com/",
  },
];

// export {  experiences, testimonials };





// CAMP SECTION (LES URLS RESTENT IDENTIQUES)
export const PEOPLE_URL = [
  { id: 1, img: '/person-1.png' },
  { id: 2, img: '/person-2.png' },
  { id: 3, img: '/person-3.png' },
  { id: 4, img: '/person-4.png' },
];

// SECTION CARACTÉRISTIQUES
export const FEATURES = [
  {
    title: 'Cartes réelles hors ligne',
    icon: '/map.svg',
    variant: 'green',
    description: 'Nous fournissons une solution pour utiliser notre application en randonnée sans réseau - les cartes hors ligne sont disponibles en permanence',
  },
  {
    title: 'Planifiez votre aventure',
    icon: '/calendar.svg',
    variant: 'green',
    description: "Organisez des aventures entre amis. Hilink propose de nombreuses offres spéciales pour les vacances - plus besoin de débats interminables",
  },
  {
    title: 'Technologie de réalité augmentée',
    icon: '/tech.svg',
    variant: 'green',
    description: 'Notre technologie utilise la réalité augmentée pour guider votre parcours en forêt jusqu\'au sommet - fonctionne sans connexion internet',
  },
  {
    title: 'Nouvelles destinations mensuelles',
    icon: '/location.svg',
    variant: 'green',
    description: 'Des dizaines de nouveaux lieux ajoutés chaque mois grâce à notre communauté mondiale de randonneurs qui partagent leurs meilleures expériences',
  },
];

// PIED DE PAGE
export const FOOTER_LINKS = [
  {
    title: 'En savoir plus',
    links: [

      { id: 1, menu: 'À propos de Hilink' },
      { id: 2, menu: 'Communiqués de presse' },
      { id: 3, menu: 'Environnement' },
      { id: 4, menu: 'Emplois' },
      { id: 5, menu: 'Politique de confidentialité' },
      { id: 6, menu: 'Nous contacter' },

    ],
  },
  {
    title: 'Notre communauté',
    links: [
      { id: 7, menu: 'Randonnée' },
      { id: 8, menu: 'Escalade Hilink' },
      { id: 9, menu: 'Hilink kinthill' },
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contactez-Nous',
  links: [
    { label: 'Administrateur', value: '123-456-7890' },
    { label: 'Email Officiel', value: 'hilink@inf0.com' },
  ],
};

export const SOCIALS_WORKS = [
  {
    title: 'Suivez-nous',
    links: [
      { id: 2, icon: '/tech/github.png', href: 'https://github.com/Adje04' },
      { id: 3, icon: '/social/linkedin_White.svg', href: 'https://linkedin.com/in/adj%C3%A9-claude-kponon-eklou-468b16289/' },
      { id: 1, icon: '/social/Whatsapp_White.svg', href: 'https://wa.me/93674548' },
    ],
  }
];