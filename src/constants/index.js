import {
    backend,
    frontend,
    reactnative,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    bookengine,
    
    threejs,
    kellerW,
    honda,
    mountain,
    teamgenerator,
    jate,
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
      icon: frontend,
    },
    {
      title: "React Native Developer",
      icon: reactnative,
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
      icon: mountain,
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
      icon: honda,
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
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Book Engine Search",
      description:
        "This is a web-based app which allows you to search for books, and save them to your favorites when you've created an account",
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
          name: "bootstrap",
          color: "purple-text-gradient",
        },
      ],
      image: bookengine,
      source_code_link: "https://github.com/LiamZ34/book-engine-search",
    },
    {
      name: "Just Another Text Editor",
      description:
        "Just Another Text Editor (JATE) is a Progressive Web Application that runs in the browser and functions offline. It gets and stores data to an indexedDB database. ",
      tags: [
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "npm",
          color: "pink-text-gradient",
        },
        {
          name: "expressjs",
          color: "",
        }
      ],
      image: jate,
      source_code_link: "https://github.com/LiamZ34/text-editor",
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
      source_code_link: "https://github.com/LiamZ34/team-profile-generator",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };