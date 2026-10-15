export const personalInfo = {
  name: "G HARSHA VARDHAN REDDY",
  shortName: "Harsha",
  role: "Frontend Developer & CS Engineer",
  tagline: "Building high-performance, responsive web interfaces and solving complex algorithmic challenges.",
  bio: "Highly motivated Computer Science student at Sri Venkateswara University (8.6 CGPA) with hands-on experience in modern frontend engineering (React, Tailwind CSS, JavaScript) and backend/data workflows (Python, Django, Firebase). Passionate about crafting fluid user experiences, modular design systems, and scalable digital solutions.",
  email: "harshagundre2806@gmail.com",
  phone: "+91 9032102806",
  location: "Tirupati, Andhra Pradesh, India",
  timezone: "Asia/Kolkata",
  gmt: "GMT +5:30",
  available: true,
  statusMessage: "Available for Internships & Projects",
  avatarUrl: "/pic.png", // Will automatically load pic.png when placed in public/
  socials: [
    {
      name: "GitHub",
      username: "harsha-gundre2806",
      url: "https://github.com/harsha-gundre2806",
      secondaryUrl: "https://github.com/HarshaGundre",
      icon: "Github"
    },
    {
      name: "LinkedIn",
      username: "G Harsha Vardhan Reddy",
      url: "https://www.linkedin.com/in/g-harsha-vardhan-reddy-23176b333/",
      icon: "Linkedin"
    },
    {
      name: "Email",
      username: "harshagundre2806@gmail.com",
      url: "mailto:harshagundre2806@gmail.com",
      icon: "Mail"
    },
    {
      name: "Phone",
      username: "+91 9032102806",
      url: "tel:+919032102806",
      icon: "Phone"
    }
  ],
  stats: [
    { label: "Students Impacted", value: "1,000+", detail: "via SVUCE Learn Portal" },
    { label: "B.Tech CGPA", value: "8.6", detail: "Sri Venkateswara University" },
    { label: "Intermediate MPC", value: "95.4%", detail: "Viswasai Jr College" },
    { label: "CodeChef Badges", value: "Diamond & Gold", detail: "Problem Solver Badges" },
    { label: "Industry Credentials", value: "7+", detail: "IBM, IIT, Microsoft, IIM" }
  ]
};

export const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Ceeras IT Services",
    period: "May 2025 – Sep 2025",
    type: "Internship",
    location: "Remote / Hybrid",
    highlights: [
      "Built responsive, accessible UI components using React and JavaScript, ensuring cross-browser compatibility and sub-second load times.",
      "Developed dynamic frontend views integrated with Django Templates and URL routing for smooth, uninterrupted data flow.",
      "Streamlined styling workflows with Tailwind CSS, establishing a consistent component design system.",
      "Collaborated in Agile sprints, conducted code reviews, and managed version control workflows on GitHub."
    ],
    skills: ["React", "JavaScript", "Tailwind CSS", "Django", "Git", "Agile"]
  },
  {
    role: "Data Science Intern",
    company: "Edu-Versity",
    period: "Oct 2024 – Nov 2024",
    type: "Internship",
    location: "Remote",
    highlights: [
      "Analyzed multidimensional datasets using Python (Pandas, NumPy) to uncover actionable data trends and business insights.",
      "Engineered data visualization plots and machine learning models with Matplotlib, Seaborn, and Scikit-learn.",
      "Automated data cleaning and processing workflows within interactive Jupyter Notebooks.",
      "Maintained structured technical documentation and shared code repositories across team Git workflows."
    ],
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Jupyter Notebook"]
  }
];

export const projects = [
  {
    id: "svuce-learn",
    title: "SVUCE Learn",
    category: "Web Application / Academic Portal",
    badge: "1,000+ Users",
    description: "A centralized student resource portal built to eliminate academic material fragmentation. Provides effortless access to engineering syllabus, lecture notes, timetable updates, and academic resources in one unified hub.",
    liveUrl: "https://svucelearn.vercel.app",
    githubUrl: "https://github.com/harsha-gundre2806/svu-app",
    tech: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    impact: [
      "Designed an intuitive mobile-first UI/UX improving resource accessibility for 1,000+ SVUCE engineering students.",
      "Engineered modular, reusable UI components for seamless semester switching and fast search.",
      "Integrated fast client routing with minimal latency on modern CDN infrastructure."
    ],
    color: "from-emerald-500/20 to-teal-500/10"
  },
  {
    id: "campus-order-guard",
    title: "Campus Order Guard",
    category: "Full-Stack Web App / Team Project",
    badge: "Real-Time Tracking",
    description: "A secure hostel parcel management system that manages student deliveries when recipients are unavailable. Features automated delivery notifications, tracking logs, and safe custody handovers.",
    liveUrl: "https://campus-order-guard.vercel.app",
    githubUrl: "https://github.com/harsha-gundre2806/campus-order-guard",
    tech: ["React", "JavaScript", "Tailwind CSS", "Firebase", "Realtime DB"],
    impact: [
      "Built real-time parcel arrival and pickup tracking workflows utilizing Firebase Realtime Database.",
      "Automated alerts and notifications to students, reducing package misplacement and eliminating paper logs.",
      "Delivered a polished team project implementing role-based authentication and intuitive dashboard views."
    ],
    color: "from-blue-500/20 to-indigo-500/10"
  },
  {
    id: "flipkart-webscraper",
    title: "E-Commerce Web Scraper",
    category: "Python & Data Extraction",
    badge: "Data Pipeline",
    description: "An automated web scraping application architected to extract, sanitize, and analyze e-commerce product listings, competitive pricing, customer ratings, and discount trends from Flipkart.",
    liveUrl: null,
    githubUrl: "https://github.com/HarshaGundre/flipkart-webscraping",
    tech: ["Python", "BeautifulSoup4", "Requests", "Pandas"],
    impact: [
      "Architected Python web scraper utilizing BeautifulSoup4 and Requests with custom request headers and resilient error recovery.",
      "Cleaned and structured extracted raw product metrics into analytical Pandas DataFrames.",
      "Exported structured CSV reports enabling automated market trend comparisons."
    ],
    color: "from-amber-500/20 to-orange-500/10"
  }
];

export const skillCategories = [
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React.js", level: "Advanced", tag: "Primary" },
      { name: "JavaScript (ES6+)", level: "Advanced", tag: "Core" },
      { name: "Tailwind CSS", level: "Advanced", tag: "Primary" },
      { name: "HTML5 & CSS3", level: "Proficient", tag: "Standard" },
      { name: "Responsive UI/UX", level: "Advanced", tag: "Design" },
      { name: "Component Architecture", level: "Proficient", tag: "Clean Code" }
    ]
  },
  {
    category: "Languages & Core CS",
    icon: "Code2",
    skills: [
      { name: "Python", level: "Proficient", tag: "Backend/Data" },
      { name: "C Programming", level: "Solid Foundation", tag: "Systems" },
      { name: "C++", level: "Problem Solving", tag: "Core" },
      { name: "Data Structures (DSA)", level: "Problem Solving", tag: "Algorithms" },
      { name: "Object-Oriented Programming", level: "Proficient", tag: "Concepts" }
    ]
  },
  {
    category: "Frameworks, Data & Backend",
    icon: "Database",
    skills: [
      { name: "Django (Templates & Views)", level: "Basics / Integration", tag: "Backend" },
      { name: "Firebase (Auth & Realtime DB)", level: "Proficient", tag: "Cloud" },
      { name: "Pandas & NumPy", level: "Data Analytics", tag: "Python" },
      { name: "Matplotlib & Scikit-learn", level: "Visualization/ML", tag: "Analytics" },
      { name: "BeautifulSoup & Requests", level: "Web Scraping", tag: "Automation" }
    ]
  },
  {
    category: "Developer Tools & Workflow",
    icon: "Terminal",
    skills: [
      { name: "Git & GitHub", level: "Collaborative Agile", tag: "Essential" },
      { name: "Jupyter Notebook", level: "Data Analysis", tag: "Workflow" },
      { name: "Vercel Deployment", level: "CI/CD & Hosting", tag: "DevOps" },
      { name: "Vite Build Tool", level: "Modern Bundler", tag: "Build" },
    ]
  }
];

export const certifications = [
  {
    title: "Web Development Certificate",
    issuer: "IBM",
    date: "21 May 2025",
    skills: ["JavaScript", "HTML5", "CSS3", "Responsive Web Design"],
    verifyUrl: "https://www.credly.com/badges/99bc4e1f-5f14-480c-876b-fb81627d9f4d",
    badgeType: "Credly Badge"
  },
  {
    title: "Data Analytics with Python",
    issuer: "IIT Roorkee (NPTEL)",
    date: "Jan – Apr 2025",
    skills: ["Python", "Jupyter Notebook", "Pandas", "Matplotlib", "Data Analysis"],
    verifyUrl: null,
    badgeType: "Premier Institute Certificate"
  },
  {
    title: "Fundamental AI Concepts",
    issuer: "Microsoft",
    date: "24 May 2025",
    skills: ["Artificial Intelligence", "Machine Learning Basics", "Azure AI Concepts"],
    verifyUrl: null,
    badgeType: "Industry Recognition"
  },
  {
    title: "JavaScript Practicals",
    issuer: "Udemy (PROPER DOT INSTITUTE)",
    date: "02 Sep 2025",
    skills: ["Advanced JavaScript", "DOM Manipulation", "Asynchronous JS", "Event Loop"],
    verifyUrl: "https://www.udemy.com/certificate/UC-c6030bdb-1f78-4ca0-ae52-65d272d2fbc7/",
    badgeType: "Course Credential"
  },
  {
    title: "The General Management Quiz",
    issuer: "Indian Institute of Management (IIM) Calcutta",
    date: "21 May 2025",
    skills: ["Business Acumen", "Analytical Thinking", "Strategic Problem Solving"],
    verifyUrl: "https://unstop.com/certificate-preview/37a14ae9-f540-49d2-8f43-519c45c2c016",
    badgeType: "National Level Event"
  },
  {
    title: "Data Analytics with Python",
    issuer: "Edu-Versity",
    date: "2024",
    skills: ["Python", "Exploratory Data Analysis", "Scikit-learn"],
    verifyUrl: null,
    badgeType: "Training Certificate"
  },
  {
    title: "Life Skills",
    issuer: "Wadhwani Foundation",
    date: "2024",
    skills: ["Leadership", "Interpersonal Communication", "Professional Ethics"],
    verifyUrl: null,
    badgeType: "Foundation Certificate"
  }
];

export const badges = [
  {
    title: "Problem Solver Diamond Badge",
    issuer: "CodeChef",
    detail: "Demonstrated diamond-tier proficiency in competitive algorithmic problem solving and data structures.",
    icon: "Gem",
    color: "from-cyan-400 to-blue-500"
  },
  {
    title: "Problem Solver Gold Badge",
    issuer: "CodeChef",
    detail: "Gold recognition for consistency and speed in resolving rigorous coding challenges.",
    icon: "Award",
    color: "from-amber-400 to-yellow-600"
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    detail: "Official badge of completion for Large Language Model fundamentals and GenAI architecture.",
    icon: "Sparkles",
    color: "from-emerald-400 to-teal-500"
  }
];

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Sri Venkateswara University (SVU / SVUCE)",
    location: "Tirupati, Andhra Pradesh",
    period: "2024 – 2028",
    score: "8.6 CGPA",
    highlights: "Core coursework: Data Structures, Algorithms, Object Oriented Systems, Database Engineering, Web Development."
  },
  {
    degree: "Intermediate MPC (Mathematics, Physics, Chemistry)",
    institution: "Viswasai Junior College",
    location: "Tirupati, Andhra Pradesh",
    period: "2022 – 2024",
    score: "95.4 %",
    highlights: "Top percentile in regional state board with high distinction in Mathematics and Physics."
  }
];

export const leadership = [
  {
    title: "Cadet",
    organization: "National Cadet Corps (NCC)",
    description: "Led squad drills, directed group dynamics under stringent protocols, and completed rigorous high-pressure training modules and field exercises emphasizing discipline, teamwork, and resilience."
  },
  {
    title: "High Commendation Award",
    organization: "Ignite MUN (Model United Nations)",
    description: "Recognized for diplomatic negotiation, persuasive public speaking, and analytical research on international policy resolutions."
  }
];

export const workshops = [
  { title: "Business Analytics", organizer: "pregrad" },
  { title: "What is Procrastination? & Peak Focus", organizer: "Ceeras IT Services" },
  { title: "Data Analytics Masterclass", organizer: "Edu-Versity" }
];

export const languages = [
  { language: "Telugu", proficiency: "Native Speaker" },
  { language: "English", proficiency: "Professional Working Proficiency" },
  { language: "Hindi", proficiency: "Proficient" }
];
