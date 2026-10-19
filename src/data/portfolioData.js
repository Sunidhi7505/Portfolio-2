/**
 * Central content file — edit text, links, projects, skills and achievements HERE.
 * No UI component contains hard-coded personal content.
 *
 * Sources (accessed 19 Oct 2026):
 *  - Resume PDF (Google Drive)      → primary source of truth
 *  - GitHub profile + repo READMEs  → project enrichment
 *  - Codolio / LeetCode public pages→ coding statistics (static snapshots, NOT live)
 *  - LinkedIn                       → blocks automated access; nothing was taken from it
 *
 * Anything that could not be verified is omitted rather than invented.
 * Fields named `tech`/`logo` refer to keys in src/utils/icons.js.
 */

const RESUME_FILE_ID = '1N0QRHPtnh7McFYR2KakXqByrp0sNPd2l'

export const profile = {
  name: 'Sunidhi Goyal',
  firstName: 'Sunidhi',
  monogram: 'SG',
  headline: 'I build secure, full-stack web applications with Java and Spring Boot.',
  roles: ['Software Developer', 'Java & Spring Boot Developer', 'Full-Stack Developer', 'DSA Problem Solver'],
  intro:
    'Computer Science graduate from Chandigarh University. I recently completed an SDE internship at Intellect Design Arena, where I built a visitor management system with QR check-in and role-based access control.',
  // Shown as the hero status pill — only verified facts.
  status: 'Completed SDE Internship · Intellect Design Arena',
  location: 'Agra, Uttar Pradesh, India',
  tagline: 'Java · Spring Boot · REST APIs · Full-stack projects',
  avatarAlt:
    'Portrait of Sunidhi Goyal, standing in a navy business suit and white shirt.',
}

export const links = {
  linkedin: 'https://www.linkedin.com/in/sunidhi-goyal-444835251/',
  github: 'https://github.com/Sunidhi7505',
  leetcode: 'https://leetcode.com/u/Sunidhi_24/',
  codolio: 'https://codolio.com/profile/Sunidhi7505',
  email: 'sunidhigoyal7505@gmail.com', // publicly listed on the resume
  resumeView: `https://drive.google.com/file/d/${RESUME_FILE_ID}/view`,
  // Direct-download form of the same Drive file. Falls back to the viewer if Drive refuses.
  resumeDownload: `https://drive.google.com/uc?export=download&id=${RESUME_FILE_ID}`,
}

/** Navigation. `ids` are the section ids that should highlight the item. */
export const navItems = [
  { label: 'Home', href: '#home', ids: ['home'] },
  { label: 'About', href: '#about', ids: ['about'] },
  { label: 'Experience', href: '#experience', ids: ['experience'] },
  { label: 'Skills', href: '#skills', ids: ['skills'] },
  { label: 'Projects', href: '#projects', ids: ['projects'] },
  { label: 'Education', href: '#education', ids: ['education'] },
  { label: 'Certs & Awards', href: '#certifications', ids: ['certifications', 'achievements', 'coding'], title: 'Certifications & Achievements' },
  { label: 'Contact', href: '#contact', ids: ['contact'] },
]

/** Extra links shown only in the mobile menu / footer. */
export const extraNav = [
  { label: 'Coding Profiles', href: '#coding' },
]

export const about = {
  summary: [
    'Java backend developer (B.E. CSE, Chandigarh University, 2026) who builds secure REST APIs with Spring Boot, JWT and role-based access control.',
    'Recently interned at Intellect Design Arena, shipping a QR-based visitor management system — and I sharpen my problem solving in C++ with 593 DSA problems solved.',
  ],
  interests: [
    { title: 'Backend & REST APIs', text: 'Layered Spring Boot services with clear request/response contracts.' },
    { title: 'Application security', text: 'JWT authentication, Spring Security and role-based access control.' },
    { title: 'Data structures & algorithms', text: 'Regular problem solving in C++ and Java on LeetCode and Codolio.' },
    { title: 'Full-stack delivery', text: 'Taking features from database to UI — and deploying them.' },
  ],
  philosophy:
    'I like code that is easy to reason about: OOP-driven layering, explicit permissions, and AI-assisted development used as a tool — not a shortcut — on real projects.',
  highlights: [
    { value: 8.13, decimals: 2, label: 'CGPA · B.E. Computer Science' },
    { value: 20, suffix: '+', label: 'REST APIs in Foody' },
    { value: 593, label: 'Problems solved (Codolio)' },
    { value: 3, suffix: '+', label: 'User roles with RBAC (internship)' },
  ],
}

export const experience = [
  {
    id: 'intellect',
    company: 'Intellect Design Arena',
    role: 'Associate Consultant — SDE Internship',
    type: 'Internship',
    period: 'June 2026 – August 2026',
    location: 'Chennai, Tamil Nadu',
    summary:
      'Two-month software development internship combining structured training with building a production-style application.',
    points: [
      'Strengthened core software development skills through hands-on training across 6+ areas — Java, OOP, DSA, SQL, Spring Boot and security fundamentals — applying AI-assisted development practices to real projects.',
      'Developed a Smart Visitor Management System using Java, Spring Boot and MySQL, supporting 2 visitor categories (regular and occasional) with end-to-end check-in workflows, including QR-code-based check-in and pre-registration via invite links.',
      'Designed and implemented Role-Based Access Control (RBAC) across 3+ user roles (e.g. admin, security staff, visitor), applying Spring Security and OOP principles to enforce permission-based access across the system.',
    ],
    tech: ['java', 'springboot', 'mysql', 'springsecurity'],
  },
]

/**
 * Only categories with verified skills are rendered.
 * `note` is shown on hover; keep it factual. `source` marks skills not on the resume.
 * No proficiency percentages are shown because none are documented.
 */
export const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    icon: 'Code2',
    skills: [
      { name: 'Java', logo: 'java', note: 'Backend services, OOP design and DSA practice.' },
      { name: 'C++', logo: 'cpp', note: 'Primary language for DSA problem solving.' },
      { name: 'SQL', logo: 'sql', note: 'Relational queries; MySQL practice on LeetCode.' },
      { name: 'JavaScript', logo: 'javascript', note: 'Used in SortVision and Foody front ends.' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Spring Boot', logo: 'springboot', note: 'Foody API, Student Management backend and the internship visitor system.' },
      { name: 'REST APIs', logo: 'rest', note: '20+ endpoints designed for Foody.' },
      { name: 'Spring Security', logo: 'springsecurity', note: 'Role-based access control across 3+ roles.' },
      { name: 'JWT', logo: 'jwt', note: 'Token-based authentication in Foody.' },
      { name: 'Hibernate', logo: 'hibernate', note: 'ORM layer for relational persistence.' },
      { name: 'Spring Data JPA', logo: 'spring', note: 'Repository layer for the Student Management backend.' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: 'Layout',
    skills: [
      { name: 'HTML', logo: 'html5', note: 'Semantic markup for all web projects.' },
      { name: 'CSS', logo: 'css3', note: 'Responsive layouts for Foody and SortVision.' },
      { name: 'JavaScript', logo: 'javascript', note: 'DOM, async code and interactive visualisation.' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: 'Database',
    skills: [
      { name: 'MySQL', logo: 'mysql', note: 'Relational storage for the visitor management system.' },
      { name: 'MongoDB', logo: 'mongodb', note: 'Document storage listed for Foody.' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & APIs',
    icon: 'Wrench',
    skills: [
      { name: 'Git', logo: 'git', note: 'Version control.' },
      { name: 'GitHub', logo: 'github', note: 'Source hosting for every project.' },
      { name: 'Maven', logo: 'maven', note: 'Build tool for Java projects.' },
      { name: 'Postman', logo: 'postman', note: 'API testing.' },
      { name: 'IntelliJ IDEA', logo: 'intellij', note: 'Primary Java IDE.' },
      { name: 'VS Code', logo: 'vscode', note: 'Front-end and general editing.' },
      { name: 'Leaflet.js', logo: 'leaflet', note: 'Live delivery map in Foody.' },
      { name: 'Razorpay', logo: 'razorpay', note: 'Payment integration in Foody (test mode per README).' },
    ],
  },
  {
    id: 'cs',
    label: 'Core CS',
    icon: 'Cpu',
    skills: [
      { name: 'Data Structures & Algorithms', logo: 'dsa', note: '593 problems solved across platforms (Codolio snapshot).' },
      { name: 'OOP', logo: 'oop', note: 'Layered design used throughout the Java projects.' },
      { name: 'DBMS', logo: 'dbms', note: 'University coursework.' },
      { name: 'Operating Systems', logo: 'os', note: 'University coursework.' },
      { name: 'Computer Networks', logo: 'networks', note: 'University coursework.' },
    ],
  },
]

/** Skills orbiting the hero avatar / the Skills constellation (keys from icons.js). */
export const orbitSkills = ['java', 'springboot', 'cpp', 'mysql', 'mongodb', 'javascript', 'git', 'springsecurity']

export const projects = [
  {
    id: 'foody',
    featured: true,
    title: 'Foody',
    subtitle: 'Full-stack food delivery website',
    period: 'Nov 2025 – Jan 2026',
    art: 'food',
    problem:
      'Ordering food online involves a lot of moving parts — catalogue, cart, coupons, payments, delivery status and support. Foody brings them together in one role-aware application for customers and admins.',
    description:
      'A full-stack food store and delivery platform with 20+ RESTful APIs, JWT-secured customer/admin roles, Razorpay payments and live delivery tracking on a map.',
    highlights: [
      'Architected 20+ RESTful APIs with JWT authentication and layered OOP design covering cart, order and coupon management.',
      'Razorpay payment integration (test mode) and a review & rating system across 4+ core modules: cart, orders, coupons, reviews.',
      'Real-time delivery tracking with Leaflet.js and the Geolocation API, plus automated email notifications, chatbot support and PDF bill download.',
      'Admin dashboard for products, coupons, inventory, order status and users; customer search, filter, sort, cart and wishlist (per README).',
    ],
    tech: ['springboot', 'springsecurity', 'jwt', 'mongodb', 'javascript', 'html5', 'css3', 'leaflet', 'razorpay'],
    github: 'https://github.com/Sunidhi7505/Food-Delivery-Website-Updated-Version',
    live: 'https://food-store-management.vercel.app/register.html',
  },
  {
    id: 'sortvision',
    featured: true,
    title: 'SortVision',
    subtitle: 'Interactive sorting algorithm visualizer',
    period: 'Jun 2024 – Jul 2024',
    art: 'sort',
    problem:
      'Sorting algorithms are easier to understand when you can watch them work. SortVision animates each step so the differences between algorithms are visible.',
    description:
      'A browser-based visualizer that animates sorting algorithms on bars, with ascending/descending control, time-complexity display and audio feedback.',
    highlights: [
      'Implements 6 sorting algorithms (Bubble, Selection, Insertion, Merge, Quick and Heap sort) with real-time animated bars.',
      'Dynamic array generation up to 50 elements and ascending / descending sorting controls.',
      'Shows the time complexity of each algorithm and plays audio cues for 2 events: element swaps and sort completion.',
    ],
    tech: ['html5', 'css3', 'javascript', 'dsa'],
    github: 'https://github.com/Sunidhi7505/SortingVisualizer',
    live: 'https://sortiing-visualizer-tg8d.vercel.app/',
  },
  {
    id: 'sweet-shop',
    featured: false,
    title: 'Sweet Shop Management',
    subtitle: 'MERN-stack inventory & sales app',
    art: 'shop',
    problem: 'Small shops need a simple way to track stock and revenue while letting customers browse what is available.',
    description:
      'Customers can search, filter and buy sweets; admins add, edit, delete and restock items and view revenue per sweet in a chart.',
    highlights: [
      'JWT authentication with USER / ADMIN role-based access.',
      'Search by name, category and price; purchase is disabled when an item is out of stock.',
      'Admin revenue-per-sweet bar chart built with Chart.js.',
    ],
    tech: ['react', 'nodejs', 'express', 'mongodb', 'jwt'],
    github: 'https://github.com/Sunidhi7505/Sweet-Shop-Management',
    // A Vercel frontend exists, but its Render backend could not be confirmed as responding, so no live-demo button is shown.
    live: null,
  },
  {
    id: 'student-management',
    featured: false,
    title: 'Student Management Backend',
    subtitle: 'Spring Boot REST API',
    art: 'api',
    problem: 'A clean, validated backend for managing student records.',
    description:
      'Spring Boot REST backend for student records with DTOs, request validation, global exception handling and MySQL via Spring Data JPA.',
    highlights: [
      'DTO-based request/response models with input validation.',
      'Global exception handling for consistent error responses.',
      'MySQL persistence through Spring Data JPA; endpoints exercised with Postman.',
    ],
    tech: ['springboot', 'spring', 'mysql', 'postman', 'java'],
    github: 'https://github.com/Sunidhi7505/StudentManagementApplication',
    live: null,
  },
]

/** Smaller front-end repositories from the GitHub profile (links only). */
export const moreRepos = [
  { name: 'NetflixFrontendClone', text: 'Responsive recreation of the Netflix landing page.', url: 'https://github.com/Sunidhi7505/NetflixFrontendClone' },
  { name: 'HeadphoneEcommerse', text: 'Responsive headphone store with product listings and add-to-cart.', url: 'https://github.com/Sunidhi7505/HeadphoneEcommerse' },
  { name: 'NewsWebsite', text: 'Real-time headlines from a news API using async/await.', url: 'https://github.com/Sunidhi7505/NewsWebsite' },
]

export const education = [
  {
    id: 'cu',
    degree: 'Bachelor of Engineering — Computer Science',
    institution: 'Chandigarh University',
    location: 'Mohali, Punjab',
    period: '2022 – 2026',
    score: '8.13 CGPA',
    highlights: ['Coursework: Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks'],
  },
  {
    id: 'class12',
    degree: 'Class XII — C.B.S.E.',
    institution: 'Sachdeva Millennium School',
    location: 'Agra, Uttar Pradesh',
    period: '2020 – 2021',
    score: '75.4%',
    highlights: [],
  },
  {
    id: 'class10',
    degree: 'Class X — C.B.S.E.',
    institution: 'J.R.M. International School',
    location: 'Agra, Uttar Pradesh',
    period: '2018 – 2019',
    score: '70.83%',
    highlights: [],
  },
]

// Credential IDs are not publicly documented, so none are shown.
export const certifications = [
  {
    id: 'coursera-java-fs',
    name: 'Java Full Stack Development',
    issuer: 'Coursera',
    year: '2025',
    url: 'https://drive.google.com/file/d/1SyOte3gDGCI1ecWQ_vf1fjvPcVWDcdVk/view?usp=sharing',
  },
  {
    id: 'nptel-elite-silver',
    name: 'Elite Silver Certification — Foundation of Cloud, IoT, Edge and ML',
    issuer: 'NPTEL',
    year: '2025',
    url: 'https://drive.google.com/file/d/1zjsia2WGM_yX0gTdl4bB1TeQJyjKL-Tt/view?usp=sharing',
  },
]

export const achievements = {
  featured: {
    title: 'Flipkart Grid 7.0 — National Semi-Finalist',
    text: 'Reached the national semi-finals of Flipkart’s Grid 7.0 engineering campus challenge.',
    year: '2025',
    url: 'https://drive.google.com/file/d/1l7TqYEDjkV-L9tEobSnfZ7AsWftzknHc/view?usp=sharing',
  },
  /** Static snapshot of Codolio — taken 19 Oct 2026. Not a live feed. */
  snapshotDate: '19 Oct 2026',
  counters: [
    { value: 593, label: 'Questions solved', note: 'Across platforms, per Codolio' },
    { value: 404, label: 'Active days', note: 'Codolio' },
    { value: 35, label: 'Longest streak (days)', note: 'Codolio' },
    { value: 8, label: 'Awards on Codolio', note: 'As shown on the profile' },
  ],
  difficulty: { easy: 310, medium: 242, hard: 16, note: '568 DSA problems on Codolio, plus 25 GFG fundamentals' },
  badges: [
    { name: '200 Days Badge 2025', platform: 'LeetCode' },
    { name: '100 Days Badge 2026', platform: 'LeetCode' },
    { name: '50 Days Badge 2026', platform: 'LeetCode' },
  ],
  badgeNote: 'LeetCode lists 5 badges in total; 3 are displayed publicly.',
}

export const codingProfiles = [
  {
    id: 'leetcode',
    name: 'LeetCode',
    handle: 'Sunidhi_24',
    logo: 'leetcode',
    url: links.leetcode,
    description: 'Problem solving in C++, Java and MySQL, with consistency badges.',
    stats: [
      { label: 'Solved in C++', value: '349' },
      { label: 'Solved in Java', value: '36' },
      { label: 'Solved in MySQL', value: '13' },
      { label: 'Global ranking', value: '380,921' },
    ],
    footnote: 'Counts are per language, so they overlap. Snapshot of the public profile, 19 Oct 2026.',
  },
  {
    id: 'codolio',
    name: 'Codolio',
    handle: 'Sunidhi7505',
    logo: null, // no official logo is bundled; a neutral monogram tile is used instead
    monogram: 'C',
    url: links.codolio,
    description: 'One dashboard across GeeksforGeeks, CodeStudio and LeetCode.',
    stats: [
      { label: 'Questions solved', value: '593' },
      { label: 'Active days', value: '404' },
      { label: 'Max streak', value: '35 days' },
      { label: 'Global rank (C-Score)', value: '31,202' },
    ],
    footnote: 'Snapshot of the public profile, 19 Oct 2026 — not live data.',
  },
  {
    id: 'github',
    name: 'GitHub',
    handle: 'Sunidhi7505',
    logo: 'github',
    url: links.github,
    description: 'Source code for every project featured here — Java, Spring Boot, MERN and front-end work.',
    stats: [],
    footnote: 'Open the profile for the full, current repository list.',
  },
]

export const socials = [
  { id: 'linkedin', label: 'LinkedIn', logo: 'linkedin', url: links.linkedin },
  { id: 'github', label: 'GitHub', logo: 'github', url: links.github },
  { id: 'leetcode', label: 'LeetCode', logo: 'leetcode', url: links.leetcode },
  { id: 'codolio', label: 'Codolio', logo: null, monogram: 'C', url: links.codolio },
]

export const contact = {
  heading: 'Let’s build something reliable together.',
  text: 'I’m always happy to talk about backend engineering, internship and entry-level opportunities, or a project that needs a careful Java developer. The quickest way to reach me is email or LinkedIn.',
}

export const footer = {
  tagline: 'Secure, well-structured software — one clean API at a time.',
}
