import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiRedux,
} from "@icons-pack/react-simple-icons";


export const SITE_CONFIG = {
  name: "Rahul Chourasia",
  url: "https://rahulchourasia.in",
  title: "Website & Mobile Developer",
  description:
    "I build responsive, user-focused web and mobile applications using React, Next.js and React Native.",
} as const;

export const NAV_ITEMS = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Contact",
    href: "#contact",
  },
] as const;

export const technologies = [
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "React Native",
    icon: SiReact,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Redux",
    icon: SiRedux,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "Express.js",
    icon: SiExpress,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
] as const;

export const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart, checkout and secure authentication.",
    image: "/images/projects/ecommerce.webp",
    technologies: ["React.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://pureshop-ecommerce.onrender.com",
    codeUrl: "https://github.com/rahul0105/PureShop---Ecommerce",
  },
  {
    title: "Project Management Dashboard",
    description:
      "A business dashboard to manage projects and tasks with authentication and analytics.",
    image: "/images/projects/project-management.webp",
    technologies: ["Next.js", "TypeScript", "Chart.js"],
    liveUrl: null,
    codeUrl: "https://github.com/rahul0105/client-flow",
  },
  {
    title: "Expense Tracker App",
    description:
      "A cross-platform mobile app to track expenses, manage invoices and view insights.",
    image: "/images/projects/expense-tracker.webp",
    technologies: ["React Native", "TypeScript", "Expo"],
    liveUrl: null,
    codeUrl: null,
  },
] as const;

export const services = [
  {
    title: "Web Development",
    description:
      "Responsive websites and web applications using Next.js and React.",
    icon: "monitor",
    features: [
      "Landing Pages",
      "Business Websites",
      "Dashboard & Web Apps",
      "Existing Website Improvements",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications using React Native.",
    icon: "smartphone",
    features: [
      "MVP Development",
      "App UI Implementation",
      "API Integration",
      "Existing App Improvements",
    ],
  },
  {
    title: "Frontend Development",
    description:
      "Clean, responsive and performant user interfaces.",
    icon: "code",
    features: [
      "UI Implementation",
      "API Integration",
      "Bug Fixing & Optimization",
      "Component Development",
    ],
  },
] as const;

export const contactInfo = {
  email: "contact@rahulchourasia.in",
  linkedin: "https://www.linkedin.com/in/rahul--chourasia/",
  github: "https://github.com/rahul0105",
} as const;

export const projectTypes = [
  "Web Development",
  "Mobile App Development",
  "Frontend Development",
  "Other",
] as const;