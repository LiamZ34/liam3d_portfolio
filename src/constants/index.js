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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    kellerW,
    teamgenerator
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
      title: "Front-End Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Back-End Developer",
      icon: backend,
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
      name: "React JS",
      icon: reactjs,
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
  ];
  
  const experiences = [
    {
      title: "Waiter/Foodrunner/Setup",
      company_name: "Mountain Ridge Country Club",
      icon: starbucks,
      iconBg: "#383E56",
      date: "October 2017 - February 2019",
      points: [
        "Setup rooms for parties & events ",
        "Made sure food was going out of the kitchen correctly/Delivered food to the guests/members",
        "Attained to the members & guests every needs",
        "Took orders of the Members ",
      ],
    },
    {
      title: "Sales Consultant",
      company_name: "Garden State Honda",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "February 2019 - December 2021",
      points: [
        "Be patient with clients whether they are or aren't ready to purchase ",
        "Learn all the product information to be able to answer any and every customer question ",
        "Follow up with past customers and make sure they are still happy with the purchase of the product",
        "Adapt to certain situations such as a taking over other positions such as, Finance Department , Desk management",
      ],
    },
    {
      title: "Realtor",
      company_name: "Keller Williams Prosperity",
      icon: kellerW,
      iconBg: "#383E56",
      date: "August 2021 - Present",
      points: [
        "Have great networking and marketing skills to build your clientele",
        "Have great customer service and understanding",
        "Have written communication skills",
        "Be able to adapt to changes in systems and locations",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
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
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Team Profile Generator",
      description:
        "This is an App that can be used to generate an html file with members of a software engineering team.",
      tags: [
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "html",
          color: "orange-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
      ],
      image: teamgenerator,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };