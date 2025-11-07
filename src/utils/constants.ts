// Application constants

export const SITE_NAME = "Outseek";
export const BRAND_NAME = "Outseek";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://outseek.net";
export const DOMAIN = "outseek.net";
export const INDUSTRY = "IT/Software";
export const DOMAIN_REGISTERED = "2002-09-24";
export const ESTABLISHED_YEAR = 2001; // 1 year before domain registration

export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@outseek.net";

// Services - Modern AI/ML/Cloud + Standard IT Services
export const SERVICES = [
  {
    id: "ai-machine-learning",
    title: "Artificial Intelligence & Machine Learning",
    slug: "ai-machine-learning",
    description: "Intelligent solutions that help your business make smarter decisions and automate complex processes.",
    icon: "ai-machine-learning",
    features: [
      "Custom AI model development",
      "Machine learning pipeline automation",
      "Predictive analytics solutions",
      "Natural language processing",
      "Computer vision applications",
      "AI strategy consulting"
    ],
    category: "modern"
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing Solutions",
    slug: "cloud-computing",
    description: "Move your business to the cloud with confidence. We handle everything from planning to ongoing management.",
    icon: "cloud-computing",
    features: [
      "Cloud migration and strategy",
      "AWS, Azure, GCP implementation",
      "Cloud infrastructure management",
      "Serverless architecture",
      "Cloud security and compliance",
      "Cost optimization services"
    ],
    category: "modern"
  },
  {
    id: "natural-language-processing",
    title: "Natural Language Processing",
    slug: "natural-language-processing",
    description: "Transform how you understand and interact with text data through advanced language processing capabilities.",
    icon: "natural-language-processing",
    features: [
      "Chatbot development",
      "Sentiment analysis",
      "Text classification and extraction",
      "Language translation systems",
      "Document processing automation",
      "Voice recognition integration"
    ],
    category: "modern"
  },
  {
    id: "software-development",
    title: "Software Development",
    slug: "software-development",
    description: "We build software that fits your business perfectly. From apps to enterprise systems, we've got you covered.",
    icon: "software-development",
    features: [
      "Custom application development",
      "Enterprise software solutions",
      "API development and integration",
      "Microservices architecture",
      "Legacy system modernization",
      "Quality assurance and testing"
    ],
    category: "standard"
  },
  {
    id: "web-development",
    title: "Web Development",
    slug: "web-development",
    description: "Beautiful, fast websites that work great on any device. Whether it's a simple site or complex web app, we deliver.",
    icon: "web-development",
    features: [
      "Responsive web design",
      "E-commerce solutions",
      "Progressive Web Apps (PWA)",
      "Content Management Systems",
      "Single Page Applications (SPA)",
      "Performance optimization"
    ],
    category: "standard"
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    slug: "mobile-development",
    description: "Mobile apps that your users will love. We create native and cross-platform solutions for iOS and Android.",
    icon: "mobile-development",
    features: [
      "iOS app development",
      "Android app development",
      "React Native solutions",
      "Flutter applications",
      "Mobile app UI/UX design",
      "App store optimization"
    ],
    category: "standard"
  },
  {
    id: "devops",
    title: "DevOps & CI/CD",
    slug: "devops",
    description: "Make your development process smoother and faster. We set up automation that saves time and reduces errors.",
    icon: "devops",
    features: [
      "CI/CD pipeline setup",
      "Docker containerization",
      "Kubernetes orchestration",
      "Infrastructure as Code (IaC)",
      "Monitoring and logging",
      "Automated testing integration"
    ],
    category: "standard"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    slug: "cybersecurity",
    description: "Keep your business safe from cyber threats. We provide security solutions that protect your data and meet compliance requirements.",
    icon: "cybersecurity",
    features: [
      "Security assessment and auditing",
      "Penetration testing",
      "Vulnerability management",
      "Security monitoring and SIEM",
      "Compliance consulting (GDPR, HIPAA)",
      "Incident response planning"
    ],
    category: "standard"
  },
  {
    id: "data-analytics",
    title: "Data Analytics & BI",
    slug: "data-analytics",
    description: "Turn your data into insights that drive decisions. We help you understand what your numbers mean and what to do next.",
    icon: "data-analytics",
    features: [
      "Data warehousing solutions",
      "Business intelligence dashboards",
      "Data visualization",
      "Predictive analytics",
      "ETL pipeline development",
      "Real-time data processing"
    ],
    category: "standard"
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    slug: "it-consulting",
    description: "Get expert advice on how technology can help your business grow. We'll help you choose the right tech and make it work.",
    icon: "it-consulting",
    features: [
      "IT strategy and planning",
      "Digital transformation consulting",
      "Technology stack evaluation",
      "Architecture design and review",
      "Project management",
      "IT governance and compliance"
    ],
    category: "standard"
  }
];

// Social media links
export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/outseek",
  facebook: "https://facebook.com/outseek",
  instagram: "https://instagram.com/outseek",
};

// Navigation structure
export const NAVIGATION = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Industries", href: "/industries" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
    { name: "Login", href: "/login" },
  ],
  services: SERVICES.map(service => ({
    name: service.title,
    href: `/services/${service.slug}`,
  })),
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  support: [
    { name: "FAQ", href: "/faq" },
    { name: "Support", href: "/support" },
    { name: "Resources", href: "/resources" },
    { name: "Blog", href: "/blog" },
  ],
};

