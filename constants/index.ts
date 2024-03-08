type SkillProps = {
  imageUrl: string
  name: string
  type: string
}

type ExperienceProps = {
  title: string
  company_name: string
  icon: string
  iconBg: string
  date: string
  points: string[]
}

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

export const skills: SkillProps[] = [
  {
    imageUrl: '/assets/tech/css.png',
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: '/assets/icons/express.svg',
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: '/assets/tech/git.png',
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: '/assets/icons/github.svg',
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: '/assets/tech/html.png',
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: '/assets/tech/javascript.png',
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: '/assets/tech/mongodb.png',
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl: '/assets/icons/motion.svg',
    name: 'Motion',
    type: 'Animation',
  },
  {
    imageUrl: '/assets/icons/mui.svg',
    name: 'Material-UI',
    type: 'Frontend',
  },
  {
    imageUrl: '/assets/icons/nextjs.svg',
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    imageUrl: '/assets/tech/nodejs.png',
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: '/assets/tech/reactjs.png',
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: '/assets/tech/redux.png',
    name: 'Redux',
    type: 'State Management',
  },
  {
    imageUrl: '/assets/icons/sass.svg',
    name: 'Sass',
    type: 'Frontend',
  },
  {
    imageUrl: '/assets/tech/tailwind.png',
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: '/assets/tech/typescript.png',
    name: 'TypeScript',
    type: 'Frontend',
  },
]

export const services = [
  {
    title: 'Web Developer',
    icon: '/assets/web.png',
  },
  {
    title: 'React Native Developer',
    icon: '/assets/mobile.png',
  },
  {
    title: 'Backend Developer',
    icon: '/assets/backend.png',
  },
  {
    title: 'Content Creator',
    icon: '/assets/creator.png',
  },
]

export const technologies = [
  {
    name: 'HTML 5',
    icon: '/assets/tech/html.png',
  },
  {
    name: 'CSS 3',
    icon: '/assets/tech/css.png',
  },
  {
    name: 'JavaScript',
    icon: '/assets/tech/javascript.png',
  },
  {
    name: 'TypeScript',
    icon: '/assets/tech/typescript.png',
  },
  {
    name: 'React JS',
    icon: '/assets/tech/react.png',
  },
  {
    name: 'Redux Toolkit',
    icon: '/assets/tech/redux.png',
  },
  {
    name: 'Tailwind CSS',
    icon: '/assets/tech/tailwind.png',
  },
  {
    name: 'Node JS',
    icon: '/assets/tech/node.png',
  },
  {
    name: 'MongoDB',
    icon: '/assets/tech/mongodb.png',
  },
  {
    name: 'Three JS',
    icon: '/assets/tech/three.svg',
  },
  {
    name: 'git',
    icon: '/assets/tech/git.png',
  },
  {
    name: 'figma',
    icon: '/assets/tech/figma.png',
  },
  {
    name: 'docker',
    icon: '/assets/tech/docker.png',
  },
]

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: '/assets/icons/contact.svg',
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: '/assets/icons/github.svg',
    link: 'https://github.com/YourGitHubUsername',
  },
  {
    name: 'LinkedIn',
    iconUrl: '/assets/icons/linkedin.svg',
    link: 'https://www.linkedin.com/in/YourLinkedInUsername',
  },
]

export const experiences: ExperienceProps[] = [
  {
    title: 'React.js Developer',
    company_name: 'Starbucks',
    icon: '/assets/company/starbucks.png',
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Native Developer',
    company_name: 'Tesla',
    icon: '/assets/company/tesla.png',
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    icon: '/assets/company/shopify.png',
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    icon: '/assets/company/meta.png',
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
]

export const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

export const projects = [
  {
    iconUrl: '/assets/icons/pricewise.svg',
    theme: 'btn-back-red',
    name: 'Amazon Price Tracker',
    description:
      'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    link: 'https://github.com/adrianhajdin/pricewise',
  },
  {
    iconUrl: '/assets/icons/threads.svg',
    theme: 'btn-back-green',
    name: 'Full Stack Threads Clone',
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: 'https://github.com/adrianhajdin/threads',
  },
  {
    iconUrl: '/assets/icons/car.svg',
    theme: 'btn-back-blue',
    name: 'Car Finding App',
    description:
      'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
  },
  {
    iconUrl: '/assets/icons/snapgram.svg',
    theme: 'btn-back-pink',
    name: 'Full Stack Instagram Clone',
    description:
      'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    link: 'https://github.com/adrianhajdin/social_media_app',
  },
  {
    iconUrl: '/assets/icons/estate.svg',
    theme: 'btn-back-black',
    name: 'Real-Estate Application',
    description:
      'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    link: 'https://github.com/adrianhajdin/projects_realestate',
  },
  {
    iconUrl: '/assets/icons/summiz.svg',
    theme: 'btn-back-yellow',
    name: 'AI Summarizer Application',
    description:
      'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    link: 'https://github.com/adrianhajdin/project_ai_summarizer',
  },
]
