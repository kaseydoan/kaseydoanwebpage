export const profileData = {
  personal: {
    name: "Kasey Doan",
    title: "Aspiring Full Stack Engineer",
    email: "kaseydoan@gmail.com",
    phone: "(408) 931-4099",
    location: "Bay Area | San Jose, CA | Riverside, CA",
    linkedin: "https://linkedin.com/in/kaseydoan",
    github: "https://github.com/kaseydoan",
    description: "Passionate about using technology to bridge opportunity gaps and serve underrepresented communities.",
    personalValues: [
      "Community-First Approach: Committed to using technology to empower underserved communities",
      "Cultural Pride: Active leader in Vietnamese Student Association, promoting mentorship and cultural awareness",
      "Problem-Solving: 15+ years of Taekwondo discipline applied to engineering challenges",
      "Bilingual Communication: Native fluency in Vietnamese and English",
      "Continuous Growth: Pursuing Master's degree to build more inclusive technologies"
    ],
    background: "Growing up as a Vietnamese-American, I learned early how technology can bridge gaps in opportunity. My journey from teaching Taekwondo to 40+ students to developing Olympic-grade software reflects my commitment to excellence and community service.",
  },
  
  experience: [
    {
      id: 1,
      title: "Full Stack Engineering Intern",
      company: "TrueScore/Cnowire Incorporated",
      location: "San Jose, CA",
      period: "August 2024 - Present",
      description: "Developed cutting-edge software for DaeDo taekwondo gear for the 2028 Summer Olympics. Built robust interfaces using ReactJS and NextJS, scaled backend systems with NodeJS and MongoDB to handle thousands of simultaneous connections.",
      technologies: ["ReactJS", "NextJS", "NodeJS", "MongoDB"],
      highlight: "Olympic Project",
      icon: "medal"
    },
    {
      id: 2,
      title: "Software Engineering Intern",
      company: "Dasion",
      location: "Claremont, CA",
      period: "June 2024 - Present",
      description: "Led front-end development of AI-powered telehealth platform. Improved user interaction speed by 120% and enabled seamless real-time communication between patients and AI agents, contributing to better healthcare outcomes.",
      technologies: ["ReactJS", "Healthcare AI", "Real-time"],
      highlight: "Healthcare Innovation",
      icon: "heartbeat"
    },
    {
      id: 3,
      title: "Software Engineering Intern",
      company: "Intuit",
      location: "San Jose, CA",
      period: "June 2022 - July 2022",
      description: "Developed scheduling and task management application for 1,000+ students at East Side Union High School District. Implemented backend database with AWS and SQL for seamless data management.",
      technologies: ["AWS", "SQL", "Education"],
      highlight: "",
      icon: ""
    },
    {
      id: 4,
      title: "Technical Support Specialist",
      company: "San Jose Digital Inclusion Program",
      location: "San Jose, CA",
      period: "June 2021 - November 2021",
      description: "Provided technical assistance to 500+ residents including those with disabilities and non-English speakers. Played vital role in empowering underserved communities during COVID-19 pandemic.",
      technologies: ["Community Service", "Digital Inclusion", "Accessibility"],
      highlight: "Community Impact",
      icon: "hands-helping"
    }
  ],

  education: [
    {
      institution: "University of California, Riverside",
      degree: "M.S. in Computer Science",
      period: "Sep. 2025 – Dec. 2026"
    },
    {
      institution: "University of California, Riverside",
      degree: "B.S. in Computer Science",
      period: "Sep. 2022 – Jun. 2025"
    }
  ],

  skills: {
    languages: [
      { name: "JavaScript/TypeScript", proficiency: 95 },
      { name: "React/Next.js", proficiency: 90 },
      { name: "Node.js/Express", proficiency: 85 },
      { name: "Python", proficiency: 80 },
      { name: "Java/C++", proficiency: 75 }
    ],
    tools: [
      { name: "AWS/Cloud Services", proficiency: 85 },
      { name: "MongoDB/Databases", proficiency: 80 },
      { name: "Docker/DevOps", proficiency: 75 },
      { name: "Git/GitHub", proficiency: 90 }
    ]
  },

  projects: [
    {
      id: 1,
      title: "NYC Taxi Explorer",
      category: "Big Data Analytics",
      description: "Full-stack data visualization application processing 2024 NYC taxi data using Apache Spark. Features interactive maps, demand heatmaps, fare anomaly detection, and trip analytics with Google Cloud MySQL backend.",
      technologies: ["Apache Spark", "PySpark", "FastAPI", "React", "TypeScript", "MySQL", "Docker"],
      icon: "graduation-cap",
      link: "https://github.com/kaseydoan/nyctaxiapp"
    },
          {
        id: 2,
        title: "Medical Diagnostic Platform",
        category: "Award Winner",
        description: "Best Innovation Award winner at CutieHack 2022. Web application streamlining medication diagnosis built in 24 hours with React and GitHub workflows.",
        technologies: ["React", "GitHub", "Hackathon", "Medical"],
        icon: "medal",
        link: "https://github.com/kaseydoan/MedMe"
      },
          {
        id: 3,
        title: "Digital Inclusion Program",
        category: "Community Impact",
        description: "Provided technical support to 500+ residents including those with disabilities and non-English speakers during COVID-19 pandemic. City of San José initiative.",
        technologies: ["Community", "Accessibility", "Support", "Impact"],
        icon: "hands-helping",
        link: "https://www.sanjoseca.gov/Home/Components/News/News/3128/4699#:~:text=%E2%80%9CBy%20providing%20free%20technical%20support,(408)%20753%2D0822."
      }
  ],

  leadership: [
    {
      id: 1,
      title: "Executive Board Member & Secretary",
      organization: "Vietnamese Student Association at UC Riverside",
      location: "Riverside, CA",
      period: "September 2022 - Present",
      description: "Organized events for the largest cultural club on campus with 500+ members, promoting Vietnamese culture and community engagement. Led backstage technical operations as Head Coordinator for the annual Vietnamese Cultural Show.",
      achievements: [
        "Led technical operations for annual Vietnamese Cultural Show",
        "Coordinated AV setups and team logistics for campus events",
        "Assisted with fundraising and local outreach events",
        "Strengthened ties with the Vietnamese-American community"
      ],
      icon: "users"
    },
    {
      id: 2,
      title: "Best Innovation Award Winner",
      organization: "CutieHack at UC Riverside",
      location: "Riverside, CA",
      period: "November 2022",
      description: "Awarded Best Innovation Award for developing a web application that streamlines the diagnosis of medication using React and GitHub workflows.",
      achievements: [
        "Best Innovation Award winner at CutieHack 2022",
        "Built functioning medical diagnostic platform in 24 hours",
        "Led front-end interface development and UI/UX design",
        "Collaborated with 3-person team under tight deadline"
      ],
      icon: "trophy"
    },
    {
      id: 3,
      title: "Head Instructor",
      organization: "America Taekwondo Center",
      location: "Morgan Hill, CA", 
      period: "June 2018 - December 2021",
      description: "Taught and mentored classes of 20-30 students, ranging from beginners to advanced black belts. Served as lead instructor with 15+ years of experience.",
      achievements: [
        "Mentored 20-30 students per class across all skill levels",
        "15+ years of competitive and instructional experience",
        "Oversaw student progression and testing protocols",
        "Organized curriculum for diverse age groups"
      ],
      icon: "star"
    }
  ],

  stats: [
    {}
  ]
};
