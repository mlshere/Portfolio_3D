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
  berlin,
  code,
  groningen,
  hamburg,
  madrid,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Software Developer",
    description: 'Skilled in both functional and OOP: JavaScript and TypeScript',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" className="mr-4">
        <path d="M18,34.111l-1.667,6.667L14.111,43H31.889l-2.222-2.222L28,34.111M3,25.222H43M7.444,34.111H38.556A4.444,4.444,0,0,0,43,29.667V7.444A4.444,4.444,0,0,0,38.556,3H7.444A4.444,4.444,0,0,0,3,7.444V29.667A4.444,4.444,0,0,0,7.444,34.111Z" transform="translate(-2 -2)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </svg>
    ),
  },
  {
    title: "Front End Developer",
    description: 'Pasionate about Design and skilled in HTML, CSS, JS and React frameworks',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="44.964" viewBox="0 0 40 44.964" className="mr-4">
        <path d="M21.087,20.97a4.015,4.015,0,1,0,5.485,1.469A4.015,4.015,0,0,0,21.087,20.97Zm18,4.356q-.4-.452-.834-.906.307-.322.594-.644c3.61-4.056,5.134-8.124,3.722-10.57-1.354-2.345-5.381-3.044-10.422-2.063q-.745.146-1.482.329-.141-.486-.3-.967C28.65,5.351,25.887,2,23.064,2c-2.708,0-5.325,3.141-6.994,8q-.246.719-.456,1.449-.493-.121-.989-.223c-5.319-1.092-9.6-.373-11.013,2.074-1.351,2.347.062,6.182,3.436,10.054q.5.575,1.032,1.124c-.417.429-.812.859-1.18,1.285-3.293,3.817-4.625,7.59-3.276,9.927,1.393,2.413,5.617,3.2,10.758,2.191q.625-.124,1.243-.279.226.79.5,1.567c1.662,4.76,4.264,7.8,6.963,7.8,2.786,0,5.58-3.266,7.272-8.226.134-.392.26-.8.38-1.218q.8.2,1.607.353c4.954.937,8.886.2,10.232-2.138,1.39-2.415-.043-6.466-3.495-10.408ZM5.276,14.257c.867-1.506,4.369-2.094,8.961-1.151q.44.091.9.2a46.005,46.005,0,0,0-.947,6.02,46.956,46.956,0,0,0-4.73,3.807q-.493-.51-.96-1.045h0C5.6,18.773,4.462,15.671,5.276,14.257Zm8.738,12.878c-1.148-.869-2.215-1.76-3.183-2.655.968-.89,2.035-1.777,3.18-2.644q-.062,1.325-.061,2.651t.064,2.648Zm0,8.859a16.269,16.269,0,0,1-5.935.209,3.97,3.97,0,0,1-2.79-1.476c-.818-1.418.251-4.447,3.067-7.712q.531-.614,1.1-1.2a46.066,46.066,0,0,0,4.737,3.822,46.768,46.768,0,0,0,.958,6.1q-.564.141-1.135.254ZM29.977,17.92q-1.131-.713-2.29-1.38-1.141-.656-2.308-1.264c1.333-.561,2.644-1.039,3.909-1.429a40.955,40.955,0,0,1,.69,4.073Zm-12.092-7.3c1.43-4.162,3.547-6.7,5.179-6.7,1.738,0,4,2.739,5.473,7.189q.144.435.272.875a46.038,46.038,0,0,0-5.681,2.183,45.1,45.1,0,0,0-5.663-2.208Q17.659,11.286,17.886,10.622Zm-.9,3.2a41.159,41.159,0,0,1,3.889,1.443q-2.362,1.219-4.6,2.656C16.452,16.488,16.692,15.114,16.986,13.823Zm-.711,17.223q1.117.715,2.267,1.378,1.173.675,2.377,1.294A40.909,40.909,0,0,1,17,35.212C16.7,33.9,16.457,32.505,16.275,31.046ZM28.54,38.117a16.267,16.267,0,0,1-2.783,5.245h0a3.97,3.97,0,0,1-2.672,1.679c-1.637,0-3.727-2.439-5.148-6.509q-.251-.722-.462-1.457a45.207,45.207,0,0,0,5.686-2.27,46.762,46.762,0,0,0,5.727,2.2q-.16.56-.347,1.111Zm.814-2.977c-1.28-.4-2.609-.882-3.962-1.451q1.144-.6,2.3-1.271,1.191-.687,2.32-1.409a40.811,40.811,0,0,1-.663,4.132Zm1-10.662q0,2.048-.128,4.093c-1.108.75-2.277,1.482-3.494,2.184s-2.412,1.342-3.59,1.924q-1.859-.891-3.646-1.92T16.028,28.58q-.155-2.044-.156-4.1h0q0-2.05.153-4.1c1.107-.756,2.268-1.488,3.468-2.181s2.421-1.336,3.63-1.917q1.836.892,3.606,1.912t3.482,2.155q.147,2.056.147,4.118Zm2.151-11.45c4.319-.84,7.576-.275,8.392,1.138.869,1.505-.377,4.83-3.493,8.333h0q-.258.29-.536.582a45.1,45.1,0,0,0-4.82-3.795,45.055,45.055,0,0,0-.912-5.955q.7-.172,1.369-.3Zm-.292,8.733a40.837,40.837,0,0,1,3.285,2.67,40.735,40.735,0,0,1-3.275,2.716q.052-1.335.051-2.672,0-1.358-.062-2.715Zm8.7,13.014c-.817,1.419-3.974,2.011-8.211,1.209q-.728-.137-1.494-.327a45.12,45.12,0,0,0,.871-6.029,44.826,44.826,0,0,0,4.8-3.858q.4.412.755.82h0a16.264,16.264,0,0,1,3.154,5.031,3.969,3.969,0,0,1,.121,3.153Z" transform="translate(-3.104 -2)" fill="#fff"/>
      </svg>
    ),
  },
  {
    title: "UX/UI Design",
    description: 'Pasionate about UI/UX. Experience in Wireframing, Research and Prototyping. Skilled in Figma.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="46.769" viewBox="0 0 38 46.769" className="mr-4">
        <path d="M39.275,46.769h-13.7a.972.972,0,0,1-.69-.286L12.86,34.4a.976.976,0,0,1,0-1.376L24.886,20.964a.981.981,0,0,1,.692-.288h13.7a.974.974,0,0,1,.692,1.66L28.645,33.712,39.967,45.1a.977.977,0,0,1-.692,1.664Zm-13.3-1.949H36.932L26.579,34.4a.974.974,0,0,1,0-1.374l10.351-10.4H25.981L14.926,33.712ZM10.1,31.269a.972.972,0,0,1-.69-.286l-6.875-6.91a.976.976,0,0,1,0-1.376L24.86.286a.977.977,0,0,1,.894-.265H39.246a.974.974,0,0,1,.692,1.66l-29.147,29.3A.976.976,0,0,1,10.1,31.269ZM4.6,23.384l5.5,5.528L36.9,1.97H25.932Z" transform="translate(-2.25 0)" fill="#fff"/>
      </svg>
    ),
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
    title: "University Studies & Internships", 
    city_name: "Madrid", 
    icon: madrid, 
    iconBg: "#383E56",  
    points: [
      "Studied Media Studies and Communication.",
      "Completed internships in radio as a moderator and producer.",
      "Worked for a local TV station as a camera operator, managing digital archiving projects.",
      "Worked as an English teacher while specializing in radio production and hosting cultural and musical shows in local radios."
    ]
  },
  { 
    title: "Film History Specialization", 
    city_name: "Groningen", 
    icon: groningen, 
    iconBg: "#E6DEDD", 
    points: [
      "Studied Film History at Rijksuniversiteit Groningen.",
      "Participated in a project to catalog and digitize a valuable film and document collection from a donor.",
      "Developed expertise in film preservation and media archiving."
    ]
  },
  { 
    title: "Gastronomy Studies", 
    city_name: "Hamburg", 
    icon: hamburg, 
    iconBg: "#383E56",  
    points: [
      "Studied Gastronomy at Hotel Le Meridiem.",
      "Gained expertise in five-star hotel kitchen operations and team management.",
      "Learned budget management and team leadership.",
      "Led a team of chefs post-graduation and assisted other chefs with high-end cuisine."
    ]
  },
  { 
    title: "Transition to Web Development", 
    city_name: "Berlin", 
    icon: berlin, 
    iconBg: "#E6DEDD",  
    points: [
      "Worked in several high-end hotels optimizing kitchen procedures.",
      "Joined an art collective, contributing to kitchen design while transitioning to web development.",
      "Began learning web development, bridging my gastronomic expertise with formal education."
    ]
  },
  { 
    title: "The Next Step: Future in Web Development", 
    city_name: "",
    icon: code, 
    iconBg: "#383E56", 
    points: [
      "Passionate about the knowledge gained in web development this year.",
      "Excited for future growth in this new and exciting field.",
      "Aspire to integrate creativity with technical skills to build innovative web applications.",
      "Committed to continuous learning, particularly in front-end frameworks, UX/UI design, and modern web technologies.",
      "Looking forward to collaborating with talented teams to develop user-centered solutions."
    ]
  }
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
    category: ["web development", "all"],
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
    category: ["web development", "all"],
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
    image: tripguide,
    source_code_link: "https://github.com/",
    category: ["data analytics", "all"],
  },
];

const filters = [
  {
    id: "all",
    title: "All",
  },
  {
    id: "web development",
    title: "Web Development",
  }, 
  {
  id: "data analytics",
  title: "Data Analytics",
  },
]

export { services, technologies, experiences, testimonials, projects, filters };