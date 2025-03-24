import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Luis Balbás — Software Engineer",
  author: "Luis Balbás",
  description:
    "Highly motivated and results-oriented Software Engineer with a strong foundation in Web Development, specializing in JavaScript. Recent graduate eager to contribute to challenging projects and collaborate with talented teams.",
  lang: "en",
  siteLogo: "/luis-small.jpg",
  navLinks: [
    { text: "Relevant Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/luis-balbas" },
    { text: "Github", href: "https://github.com/lbalbas" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://luisbalbas.netlify.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Luis Balbás",
    specialty: "Fullstack Engineer",
    summary: "A passionate Software Engineer, specializing in FullStack Web Development.",
    email: "luis.balbas@outlook.com",
  },
  experience: [
    {
      company: "Bolivar State's Systems and IT Directorate",
      position: "Academic Project",
      startDate: "Nov 2023",
      endDate: "May 2024",
      summary: [
        "Spearheaded the development of a comprehensive web application using the XAMPP stack, streamlining the national asset management processes within the Directorate. This initiative streamlined operations and significantly enhanced the Directorate's ability to monitor and manage assets across multiple departments.",
        "Achieved a substantial increase in inventory management efficiency, leading to improved user satisfaction. By providing real-time data access and information retrieval, I facilitated daily asset management and inventory control operations, empowering staff to make informed decisions quickly.",
        "Improved the accuracy and efficiency of material asset assignment and transfer processes, significantly enhancing asset tracking and movement across the Directorate's offices.",
      ],
    },
    {
      company: "Urban Ambulatory Petra Emilia",
      position: "Academic Project",
      startDate: "Nov 2021",
      endDate: "May 2022",
      summary: [
        "Developed an innovative web application making use of the XAMPP stack to enhance vaccination tracking and improve the overall patient experience within the ambulatory healthcare setting. This project was instrumental in modernizing vaccination management and patient relations.",
        "Integrated critical features such as immediate access to patient vaccination records, comprehensive vaccination histories, and accurate vaccine supply tracking. These enhancements support healthcare professionals in delivering timely and effective patient care.",
        "Contributed to improved patient compliance rates, reduced vaccine waste, and facilitated informed decision-making by healthcare personnel leading to improved community health.",
      ],
    }
  ],
  projects: [
    {
      name: "Ecommerce Site",
      summary: "A mockup Ecommerce Site built with NextJS, Typescript, TailwindCSS, Prisma, TRPC, Supabase and the Stripe Checkout API. Includes a persisting cart using LocalStorage and search functionality.",
      linkPreview: "https://ecommerce-site-orpin.vercel.app",
      linkSource: "https://github.com/lbalbas/ecommerce-site",
      image: "/ecommerce.jpg",
    },
    {
      name: "YelpCamp",
      summary: "Fullstack WebApp using NextJS, Typescript, TailwindCSS, MongoDB, and TRPC where users can create, read, update and delete campgrounds and reviews. From Codewell's YelpCamp challenge",
      linkPreview: "https://t3-yelp-camp.vercel.app",
      linkSource: "https://github.com/lbalbas/t3-yelp-camp",
      image: "/yelpcamp.jpg",
    },
    {
      name: "Country Data",
      summary: "WebApp implemented using NextJS, and the REST Countries API to fetch data to show relevant information about countries all over the world, includes dark mode and light mode and country search.",
      linkPreview: "https://magnificent-fenglisu-e905bd.netlify.app",
      linkSource: "https://github.com/lbalbas/rest-countries-api-with-color-theme-switcher",
      image: "/country-data.jpg",
    }
  ],
  about: {
    description: `
      Hi, I’m Luis Balbás, a Software Engineer based in Ciudad Bolivar, Venezuela. 
      I'm passionate about crafting robust and user-friendly web applications. 
      My toolkit includes Typescript, React, Node.js, SQL databases, and MongoDB, allowing me to build everything from dynamic front-end experiences to scalable back-end systems.  
      <br>  
      <br>
      I'm a firm believer in continuous learning and actively seek opportunities to expand my skillset.  
      I'm excited to connect and explore opportunities where I can make a real difference.
    `,
    image: "/luis-big.jpg",
  },
};

// #5755ff
