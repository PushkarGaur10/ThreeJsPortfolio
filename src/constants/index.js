import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  apriori,
  bookventures,
  threejs,
  Hyperglot,
  estate,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front-end Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Hyperglot Review",
    icon: Hyperglot,
    iconBg: "#383E56",
    date: "Dec 2022 -  Feb 2023",
    points: [
      "Created websites and web applications using programming languages such as HTML, CSS, and JavaScript",
      "Improvised visual aspects of the websites.",
      "Maintained existing websites, fixed bugs, and implemented updates.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "Front end Developer",
    company_name: "Hyperglot Review",
    icon: Hyperglot,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - July 2023",
    points: [
      "Developed and maintained web applications using React.js and other related technologies.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implemented responsive design and ensure cross-browser compatibility.",
      "Participated in code reviews and provided constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Hyperglot Review",
    icon: Hyperglot,
    iconBg: "#383E56",
    date: "July 2023 - present",
    points: [
      "Developing and maintaining front end using React.js and NextJS.",
      "Worked on backend and created RESTful API's to interact with the responses coming from front-end.",
      "Writing clean and readable code with best practices.",
      "Implemented complex functionalities while working on multiple websites.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Apriori Educations",
    description:
      "Education platform for providing info about the Brand which is Apriori education and contacting with appointing information for different courses",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "MERN",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: apriori,
    source_code_link: "https://www.github.com/Apriori-Akshara/AprioriConsultants",
    hosted_link:"https://www.aprioriconsultants.org/",
  },
  {
    name: "Bookventures",
    description:
      "A virtual bookclub where you can book an appointment for bookclubs to happen, and provide other perks of joining the bookclubs",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "MERN",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: bookventures,
    source_code_link: "https://www.github.com/Apriori-Akshara/bookventures",
    hosted_link:"https://www.bookventures.org",
  },
  {
    name: "Estate Dekho",
    description:
      "A estate business site, which lets you buy and sell you property with authentication and other functionalities attached",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "MERN",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: estate,
    source_code_link: "https://www.github.com/PushkarGaur11/estatedekho",
    hosted_link:"https://estatedekho.onrender.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
