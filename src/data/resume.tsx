import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Virat Singh Bhadauriya",
  initials: "VSB",
  url: "https://viratsinghbhadauriya.vercel.app/",
  location: "India",
  description:
    "Frontend Engineer who loves learning new tech and building clean, responsive, user-friendly web applications.",
  opentowork: "Open to work and available to join immediately.",
  avatarUrl: "/me2.jpg",
  skills: [
    "Generative AI",
    "Groq SDK",
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Next.js",
    "TypeScript",
    "Redux Toolkit",
    "Zustand",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Supabase",
    "Git",
    "GitHub",
    "Docker",
    "Postman",
    "Socket.IO",
    "WebRTC",
    "CPP",
  ],

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/virat-singh-bhadauriya-b94971242/",
        icon: Icons.linkedin,
        navbar: true,
      },
      
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Virat0925",
        icon: Icons.github,
        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@greatvirat0925",
        icon: Icons.medium,
        navbar: true,
      },

      Leetcode: {
        name: "Leetcode",
        url: "https://leetcode.com/u/virat0925/",
        icon: Icons.leetcode,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Mindage Solutions",
      href: "https://mindotec.com/",
      badges: [],
      location: "Pune",
      title: "SDE-UI",
      logoUrl: "/mindage.png",
      start: "Aug 2024",
      end: "Present",
      description: "Collaborated with the team to develop the frontend, focusing on creating a responsive, user-friendly UI with smooth animations and an intuitive layout.",
    },
   
    {
      company: "Wipro Technologies",
      href: "https://www.wipro.com/",
      badges: [],
      location: "Greater Noida",
      title: "Associate",
      logoUrl: "/wipro.png",
      start: "Aug 2022",
      end: "Sep 2023",
      description:
        "Contributed to the development of 'WiLearn,' Wipro's in-house Learning Management System (LMS), implementing key features like a customizable dashboard, interactive course catalog, and dynamic quiz module. Enhanced UI/UX and reduced page load times by 25%, boosting user engagement by 20%.",
    },
  ],
  education: [
    {
      school: "Chandigarh University",
      href: "https://www.cuchd.in/",
      degree: "Master's in Computer Applications (MCA)",
      logoUrl: "/cuchd.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "Chhatrapati Shahu Ji Maharaj University",
      href: "https://csjmu.ac.in/",
      degree: "Bachelor's in Computer Applications (BCA)",
      logoUrl: "/csjmu.png",
      start: "2018",
      end: "2021",
    },
  ],
  certificates: [
    {
      title: "Meta Front-end Developer",
      issuer: "Meta-Coursera",
      url: "https://www.coursera.org/account/accomplishments/professional-cert/T8BYHG2APJKG",
      date: "Aug 2024",
      logoUrl: "/meta.png",
    },
    {
      title: "Programming with Javascript",
      issuer: "Meta-Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/NYRFIL0EU0MS",
      date: "Aug 2024",
      logoUrl: "/coursera.jpg", // Add AWS logo image here
    },
    {
      title: "Python 3 Programming",
      issuer: "University of Michigan-Coursera",
      url: "https://drive.google.com/file/d/1AC80tnVc6TD8Q_Jwuw2LEGm_vY4h04Gt/view?usp=drive_link",
      date: "Sep 2023",
      logoUrl: "/michigan.png", // Add AWS logo image here
    },
    {
      title: "ReactJS",
      issuer: "Infosys Springboard",
      url: "https://drive.google.com/file/d/1ij_Szhk8uRH4gSvB8N44cM1XbA5zWl7E/view?usp=drive_link",
      date: "Nov 2023",
      logoUrl: "/infosys.jpg", // Add AWS logo image here
    },
    {
      title: "AngularJS",
      issuer: "Infosys Springboard",
      url: "https://drive.google.com/file/d/1USN2BHkyIEGX07GTST2_FwIL2G7HVJ64/view?usp=drive_link",
      date: "Feb 2025",
      logoUrl: "/infosys.jpg", // Add company logo image here
    },
    

    
    
  ],
  projects: [
    {
      title: "Linkify",
      href: "https://linkifylive.netlify.app/",
      dates: "Feb 2024 - Present",
      active: true,
      description:
        "Linklytics is a URL shortener with built-in analytics and Google authentication. Shorten links effortlessly while gaining insights on click data, user locations, and device types all in one streamlined platform.",
      technologies: [
        "React.js",
        "Context API",
        "Javascript",
        "TailwindCSS",
        "Supabase",
        "Shadcn UI",
        "Recharts",
      ],
      links: [
        {
          type: "Live",
          href: "https://linkifylive.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Virat0925/Linkify",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Linkify.png",
    },
     {
      title: "ByteWrite",
      href: "https://github.com/Virat0925/ByteWrite",
      dates: "Dec 2024 - Present",
      active: true,
      description:
        "ByteWrite is a modern, full-stack MERN blog application designed for tech enthusiasts, developers, and writers to share their thoughts, tutorials, and news about technology.",
      technologies: [
        "React.js",
        "TypeScript",
        "Redux",
        "TailwindCSS",
        "Shadcn UI",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Multer",
        "Cloudinary",
        "JWT",
        "Axios",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Virat0925/ByteWrite",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ByteWrite.jpg",
    },
    {
      title: "Bot-Cheet",
      href: "https://bot-cheet-mo5d.onrender.com/",
      dates: "Aug 2025 - Present",
      active: true,
      description:
        "BotCheet is an AI chatbot using Groq for high-speed model inference and Tavily for real-time web access. It supports tool calling, threaded conversations, and Markdown-formatted replies, delivering fast, context-aware, and interactive AI responses",
      technologies: ["Tailwind CSS", "JavaScript", "Gen-AI", "Tavily", "Groq", "Node.js", "Express.js", "Render"],
      links: [
        {
          type: "Live",
          href: "https://bot-cheet-mo5d.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Virat0925/bot-cheet",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Botcheet.png",
    },
    
    {
      title: "Bhojanam",
      href: "https://bhojnam-e3fca.web.app/",
      dates: "July 2024 - Present",
      active: true,
      description:
        "Implemented user authentication with Firebase, built a dynamic shopping cart with Redux state management, designed a responsive UI using Tailwind CSS, and integrated RESTful API requests for efficient data handling.",
      technologies: [
        "React.js",
        "Javascript", 
        "Redux Toolkit",
        "Auth0",
        "SCSS",
        "Firebase"
      ],
      links: [
        {
          type: "Live",
          href: "https://bhojnam-e3fca.web.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Virat0925/bhojanam",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Bhojanam.png",
    },
    {
      title: "MyYoutube",
      href: "https://youtube-clone-delta-lime.vercel.app/",
      dates: "May 2024 - Present",
      active: true,
      description:
        "MyYoutube is an intuitive video streaming platform offering smooth playback, voice search, and secure payments for premium content. With AI assistance, responsive design, and organized channel browsing.",
      technologies: [
        "React.js",
        "Javascript",
        "TailwindCSS",
        "Material UI",
        "RapidAPI",
      ],
      links: [
        {
          type: "Live",
          href: "https://youtube-clone-delta-lime.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Virat0925/youtube-clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/MyYT.png",
    },
  ],
} as const;
