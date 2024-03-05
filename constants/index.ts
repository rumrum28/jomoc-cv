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

const services = [
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

const technologies = [
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

const experiences = [
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

const testimonials = [
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

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: '/assets/carrent.png',
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: '/assets/jobit.png',
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: '/assets/tripguide.png',
    source_code_link: 'https://github.com/',
  },
]

export { services, technologies, experiences, testimonials, projects }

const products = [
  {
    id: 1,
    name: '11kg LPG',
    types: [
      {
        name: '11kg Content',
        pricebook_id: '01s2v00000LYBvGAAX',
        pricebook_entry_id: '01u2v00000DHPasAAH',
        product_id: '01t2v00000BYYa7AAH',
        product_code: 'LPG11C',
        unit_price: 1190,
      },
      {
        name: '11kg Cylinder',
        pricebook_id: '01s2v00000LYBvGAAX',
        pricebook_entry_id: '01u2j000000V4eYAAS',
        product_id: '01t2j000000BeL8AAK',
        product_code: 'CYL11',
        unit_price: 1600,
      },
    ],
  },
  {
    id: 2,
    name: '2.7kg LPG',
    types: [
      {
        name: '2.7kg Content',
        pricebook_id: '01s2v00000LYBvGAAX',
        pricebook_entry_id: '01u2v00000EqISSAA3',
        product_id: '01t2v00000CwlXPAAZ',
        product_code: 'LPG2.7C',
        unit_price: 350,
      },
      {
        name: '2.7kg Cylinder',
        pricebook_id: '01s2v00000LYBvGAAX',
        pricebook_entry_id: '01uBB000000qVMCYA2',
        product_id: '01tBB0000014dQsYAI',
        product_code: 'CYL2.7',
        unit_price: 750,
      },
      {
        name: '2.7kg Powerkalan Set',
        pricebook_id: '01s2v00000LYBvGAAX',
        pricebook_entry_id: '01u2v00000EqIVBAA3',
        product_id: '01t2v00000CwlcYAAR',
        product_code: 'LPG2.7CCPK',
        unit_price: 1200,
      },
      {
        name: 'Power Kalan Burner',
        pricebook_id: '01s2v00000LYBvGAAX',
        pricebook_entry_id: '01uBB000000zOW5YAM',
        product_id: '01tBB0000014dboYAA',
        product_code: 'ACCPKB',
        unit_price: 450,
      },
    ],
  },
]
