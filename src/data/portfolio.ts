import { Project, Experience, Skill, Service } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "AssemblyLine Tracker",
    description: "Web API for tracking items from production to stores",
    longDescription:
      "A comprehensive web API built with C# that tracks items through the production, quality control, and storage workflow. Features real-time status updates and inventory management.",
    technologies: ["C#", ".NET", "API", "Production Management"],
    image: "/projects/assembly-line.jpg",
    github: "https://github.com/Lindokuhle1/AssemblyLineTracker",
    featured: true,
  },
  {
    id: "2",
    title: "Expense Tracker Clean Architecture",
    description: "Expense tracking application using clean architecture principles",
    longDescription:
      "A robust expense tracking system built with C# and clean architecture patterns. Demonstrates best practices in software design with separation of concerns and maintainable code structure.",
    technologies: ["C#", ".NET", "Clean Architecture", "SQL Server"],
    image: "/projects/expense-tracker.jpg",
    github: "https://github.com/Lindokuhle1/ExpenseTrackerCleanArch",
    featured: true,
  },
  {
    id: "3",
    title: "Funeral Services Management",
    description: "Management system for funeral services operations",
    longDescription:
      "A complete management system for funeral services built with C# and .NET. Handles scheduling, client management, and service operations with a professional dashboard.",
    technologies: ["C#", ".NET", "SQL Server", "Web API"],
    image: "/projects/funeral-services.jpg",
    github: "https://github.com/Lindokuhle1/funeral-Services-Management",
    featured: true,
  },
  {
    id: "4",
    title: "Data Export App",
    description: "Clean architecture application for data export and management",
    longDescription:
      "A sophisticated data export application demonstrating clean architecture principles in .NET 8. Includes in-memory data processing and comprehensive application layering.",
    technologies: ["C#", ".NET 8", "Clean Architecture", "In-Memory Database"],
    image: "/projects/data-export.jpg",
    github: "https://github.com/Lindokuhle1/DataExportApp-Clean-Architecture-In-Memory-.NET-8-",
    featured: false,
  },
  {
    id: "5",
    title: "Canteen Ordering System",
    description: "Django-based ordering system with payment integration",
    longDescription:
      "A full-featured canteen ordering system built with Django that supports order management and PayPal payment integration. Perfect for managing food service operations.",
    technologies: ["Python", "Django", "PayPal", "HTML/CSS"],
    image: "/projects/canteen-system.jpg",
    github: "https://github.com/Lindokuhle1/canteen_ordering_system",
    featured: false,
  },
  {
    id: "6",
    title: "Fraud Detection App",
    description: "Machine learning application for detecting fraudulent transactions",
    longDescription:
      "An intelligent fraud detection system built with C# that analyzes transaction patterns to identify potentially fraudulent activities. Uses advanced algorithms for real-time detection.",
    technologies: ["C#", ".NET", "Machine Learning", "Data Analysis"],
    image: "/projects/fraud-detection.jpg",
    github: "https://github.com/Lindokuhle1/FraudDetectionApp",
    featured: false,
  },
  {
    id: "7",
    title: "Battery Health Analyzer",
    description: "System for analyzing and monitoring battery health metrics",
    longDescription:
      "A comprehensive battery monitoring and analysis system built with C#. Tracks battery health, performance metrics, and provides insights on device battery usage.",
    technologies: ["C#", ".NET", "IoT", "Data Analysis"],
    image: "/projects/battery-analyzer.jpg",
    github: "https://github.com/Lindokuhle1/BatteryHealthAnalyzer",
    featured: false,
  },
  {
    id: "8",
    title: "Colleague Rating System",
    description: "Performance evaluation system for colleague feedback",
    longDescription:
      "A professional rating and feedback system built with C# that enables organizations to collect and manage colleague performance evaluations and feedback.",
    technologies: ["C#", ".NET", "SQL Server", "Web Application"],
    image: "/projects/rating-system.jpg",
    github: "https://github.com/Lindokuhle1/ColleagueRatingSystem",
    featured: false,
  },
  {
    id: "9",
    title: "Kidreads",
    description: "Children's book discovery app using Open Library API",
    longDescription:
      "An interactive web application for discovering children's books. Built with JavaScript and integrates with the Open Library API to provide access to thousands of children's titles.",
    technologies: ["JavaScript", "React", "Open Library API", "HTML/CSS"],
    image: "/projects/kidreads.jpg",
    github: "https://github.com/Lindokuhle1/Kidreads",
    featured: false,
  },
  {
    id: "10",
    title: "Battery API",
    description: "RESTful API for battery monitoring and management",
    longDescription:
      "A lightweight API built with C# for monitoring battery status and metrics. Provides endpoints for real-time battery data retrieval and historical analysis.",
    technologies: ["C#", ".NET", "REST API", "IoT"],
    image: "/projects/battery-api.jpg",
    github: "https://github.com/Lindokuhle1/BatteryApi",
    featured: false,
  },
  {
    id: "11",
    title: "CRUD with Database",
    description: "Simple CRUD operations web API with database integration",
    longDescription:
      "A foundational CRUD web API demonstrating basic database operations with C# and .NET. Perfect learning resource for API development with complete database integration.",
    technologies: ["C#", ".NET", "SQL Server", "API"],
    image: "/projects/crud-api.jpg",
    github: "https://github.com/Lindokuhle1/CRUD-with-Database",
    featured: false,
  },
  {
    id: "12",
    title: "Invoice App Frontend",
    description: "Desktop application for invoice management using Tkinter",
    longDescription:
      "A professional desktop application built with Python Tkinter for managing company invoices, stock inventory, and business operations. Features a clean, user-friendly interface.",
    technologies: ["Python", "Tkinter", "Database", "Desktop App"],
    image: "/projects/invoice-app.jpg",
    github: "https://github.com/Lindokuhle1/invoice-app-only-front-end",
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Telemetry Support Analyst / Junior Developer",
    company: "Maxwell and Spark",
    period: "2024 - Present",
    description:
      "I provision and commission telemetry systems for lithium-ion batteries, ensure BMS firmware and telemetry are correctly configured, and monitor battery performance using telemetry data. I analyze field data, generate technical reports for customers, support the Insight.li platform, build dashboards and user interfaces, troubleshoot IoT and telemetry issues, and assist with backend and full-stack development using .NET, React, and cloud tools.",
    technologies: [".NET", "React", "AWS", "Docker", "Kubernetes"],
   },
  // {
  //   id: "2",
  //   title: "Full-Stack Developer & IoT Engineer",
  //   company: "Connected Systems Inc",
  //   period: "2020 - 2022",
  //   description:
  //     "Developed IoT applications and telemetry systems. Built real-time data processing pipelines and created monitoring dashboards for industrial solutions.",
  //   technologies: ["Node.js", "Python", "IoT", "MongoDB", "Azure"],
  // },
  // {
  //   id: "3",
  //   title: "Backend Developer",
  //   company: "Digital Solutions Co",
  //   period: "2018 - 2020",
  //   description:
  //     "Developed REST APIs and database solutions. Collaborated with frontend teams to deliver scalable web applications.",
  //   technologies: ["C#", ".NET", "SQL Server", "Docker"],
  // },
];

export const skills: Skill[] = [
  {
    category: "Backend",
    skills: [
      ".NET Core",
      "C#",
      "Node.js",
      "Python",
      "Java",
      "API Design",
      "Clean Architecture",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "IoT & Telemetry",
    skills: [
      "MQTT",
      "IoT Protocols",
      "Telemetry Systems",
      "Real-time Data Processing",
      "Sensor Integration",
      "Edge Computing",
    ],
  },
  {
    category: "Database",
    skills: [
      "SQL Server",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Database Design",
      "Query Optimization",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Terraform",
      "CloudFormation",
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      "Git",
      "Linux",
      "Agile/Scrum",
      "System Design",
      "Microservices",
      "REST APIs",
    ],
  },
];

export const services: Service[] = [
  {
    id: "1",
    title: "University Research",
    description: "Comprehensive research assistance for academic studies",
    icon: "Lightbulb",
    features: [
      "Literature review & analysis",
      "Research methodology guidance",
      "Data analysis & interpretation",
      "Academic writing support",
    ],
  },
  {
    id: "2",
    title: "Project Essay Writing",
    description: "High-quality essay writing for academic projects",
    icon: "Code",
    features: [
      "Original content creation",
      "Proper citation formats",
      "Plagiarism-free guaranteed",
      "Revision & refinement",
    ],
  },
  {
    id: "3",
    title: "Coding Projects",
    description: "Complete coding solutions for university assignments",
    icon: "Code",
    features: [
      "Custom code development",
      "Multiple programming languages",
      "Documentation included",
      "Code explanation & support",
    ],
  },
  {
    id: "4",
    title: "3D Printing Services",
    description: "Design and printing of 3D prototypes and models",
    icon: "Zap",
    features: [
      "3D model preparation",
      "High-quality printing",
      "Multiple material options",
      "Post-processing available",
    ],
  },
  {
    id: "5",
    title: "3D Drawing & Design",
    description: "Professional 3D design and rendering services",
    icon: "Globe",
    features: [
      "CAD modeling",
      "3D visualization",
      "Technical drawings",
      "Product design",
    ],
  },
  {
    id: "6",
    title: "Application Development",
    description: "Full-stack custom application development",
    icon: "Code",
    features: [
      "Mobile & web applications",
      "Custom solutions",
      "User-friendly interface",
      "Post-launch support",
    ],
  },
  {
    id: "7",
    title: "University Applications",
    description: "Complete guidance for university application process",
    icon: "Globe",
    features: [
      "Application strategy",
      "Essay review & editing",
      "Document preparation",
      "Interview coaching",
    ],
  },
  {
    id: "8",
    title: "NSFAS Application",
    description: "Expert assistance with NSFAS funding applications",
    icon: "Lightbulb",
    features: [
      "Application completion",
      "Document verification",
      "Deadline tracking",
      "Appeal support",
    ],
  },
  {
    id: "9",
    title: "Unisa Application",
    description: "Specialized support for Unisa (University of South Africa)",
    icon: "Globe",
    features: [
      "Registration assistance",
      "Course selection guidance",
      "Document preparation",
      "Technical support",
    ],
  },
  {
    id: "10",
    title: "CAO Applications",
    description: "Complete Central Applications Office application support",
    icon: "Globe",
    features: [
      "Application form guidance",
      "Course ranking strategy",
      "Document compilation",
      "Status tracking",
    ],
  },
  {
    id: "11",
    title: "iPhone Sales & Support",
    description: "Quality refurbished and new iPhones with warranty",
    icon: "Zap",
    features: [
      "Genuine devices only",
      "Competitive pricing",
      "Full warranty included",
      "After-sales support",
    ],
  },
];

export const education = [
  {
    id: "1",
    degree: "Diploma in ICT: App Dev",
    institution: "Durban University of Technology",
    year: "2023",
    details: "Specialized in Software Engineering and Distributed Systems",
  },
  {
    id: "2",
    degree: "AZ 900",
    institution: "Azure",
    year: "2025",
    details: "Professional level certification",
  },
  {
    id: "3",
    degree: "Advanced Diploma: ICT",
    institution: "Durban University of Technology",
    year: "2026",
    details: "Professional certification",
  },
];

export const blogPosts = [
  {
    id: "1",
    title: "Building Scalable IoT Applications",
    excerpt: "Best practices for designing IoT systems that scale to millions of devices",
    content: "",
    date: "2024-01-15",
    tags: ["IoT", "Architecture", "Scalability"],
    author: "Lindokuhle Ngcongo",
  },
  {
    id: "2",
    title: "Clean Architecture in .NET",
    excerpt: "A comprehensive guide to implementing clean architecture principles",
    content: "",
    date: "2024-01-10",
    tags: ["C#", ".NET", "Architecture"],
    author: "Lindokuhle Ngcongo",
  },
  {
    id: "3",
    title: "Real-time Data Processing with Kafka",
    excerpt: "Processing millions of events in real-time using Apache Kafka",
    content: "",
    date: "2024-01-05",
    tags: ["Kafka", "Data Processing", "Streaming"],
    author: "Lindokuhle Ngcongo",
  },
];
