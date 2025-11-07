export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "future-of-ai-in-business",
    title: "The Future of AI in Business",
    excerpt: "Exploring how artificial intelligence is transforming business operations and creating new opportunities.",
    content: `
      <p>Artificial Intelligence (AI) is no longer a futuristic concept—it's a present-day reality that's reshaping how businesses operate, compete, and deliver value to customers. From automating routine tasks to providing deep insights from data, AI is becoming an indispensable tool for modern enterprises.</p>

      <h2>The Current Landscape</h2>
      <p>Today's businesses are leveraging AI in unprecedented ways. Machine learning algorithms analyze customer behavior patterns, natural language processing powers intelligent chatbots, and computer vision systems optimize manufacturing processes. The applications are virtually limitless.</p>

      <p>One of the most significant advantages of AI is its ability to process vast amounts of data at speeds impossible for humans. This capability enables businesses to make data-driven decisions faster and more accurately than ever before.</p>

      <h2>Key Applications</h2>
      <p><strong>Customer Service:</strong> AI-powered chatbots and virtual assistants provide 24/7 customer support, handling inquiries instantly and freeing human agents for complex issues.</p>

      <p><strong>Data Analytics:</strong> Machine learning models identify trends, predict outcomes, and uncover insights that would take human analysts weeks or months to discover.</p>

      <p><strong>Process Automation:</strong> Robotic Process Automation (RPA) combined with AI automates repetitive tasks, reducing errors and increasing efficiency.</p>

      <h2>Looking Ahead</h2>
      <p>As AI technology continues to evolve, businesses that embrace these innovations early will gain significant competitive advantages. The future belongs to organizations that can effectively integrate AI into their operations while maintaining the human touch that customers value.</p>

      <p>The key to success lies in understanding that AI is a tool to augment human capabilities, not replace them. By combining the analytical power of AI with human creativity and empathy, businesses can achieve remarkable results.</p>
    `,
    date: "2024-01-15",
    category: "AI/ML",
    readTime: "5 min read",
    image: "/assets/images/technology-integrated-everyday-life2.jpg",
    imageAlt: "Artificial Intelligence in Business",
    author: {
      name: "Priya Sharma",
      role: "AI Research Lead",
    },
    tags: ["AI", "Machine Learning", "Business", "Technology"],
  },
  {
    id: "2",
    slug: "cloud-migration-best-practices",
    title: "Cloud Migration Best Practices",
    excerpt: "Essential strategies and considerations for successful cloud migration projects.",
    content: `
      <p>Cloud migration has become a strategic imperative for businesses seeking scalability, flexibility, and cost efficiency. However, a successful migration requires careful planning, execution, and ongoing optimization.</p>

      <h2>Planning Your Migration</h2>
      <p>Before moving to the cloud, it's crucial to assess your current infrastructure, identify dependencies, and create a comprehensive migration roadmap. This includes understanding your application architecture, data requirements, and compliance needs.</p>

      <h2>Choosing the Right Strategy</h2>
      <p>There are several migration strategies to consider:</p>
      <ul>
        <li><strong>Lift and Shift:</strong> Moving applications as-is with minimal changes</li>
        <li><strong>Replatforming:</strong> Making minor optimizations for the cloud</li>
        <li><strong>Refactoring:</strong> Redesigning applications to be cloud-native</li>
      </ul>

      <h2>Key Considerations</h2>
      <p>Security, compliance, and cost management are critical factors in any cloud migration. Ensure you have proper security measures in place, understand compliance requirements, and implement cost monitoring from day one.</p>
    `,
    date: "2024-01-10",
    category: "Cloud",
    readTime: "7 min read",
    image: "/assets/images/cloud-overlay-word-young-people (1).jpg",
    imageAlt: "Cloud Migration Strategy",
    author: {
      name: "Rajesh Kumar",
      role: "Cloud Solutions Architect",
    },
    tags: ["Cloud", "Migration", "Infrastructure", "AWS"],
  },
  {
    id: "3",
    slug: "understanding-natural-language-processing",
    title: "Understanding Natural Language Processing",
    excerpt: "A comprehensive guide to NLP and its applications in modern software solutions.",
    content: `
      <p>Natural Language Processing (NLP) is a branch of artificial intelligence that enables computers to understand, interpret, and generate human language in a valuable way.</p>

      <h2>How NLP Works</h2>
      <p>NLP combines computational linguistics with machine learning to process and analyze large amounts of natural language data. It involves several key steps: tokenization, parsing, semantic analysis, and generation.</p>

      <h2>Real-World Applications</h2>
      <p>NLP powers many applications we use daily, from search engines and translation services to virtual assistants and sentiment analysis tools. In business, NLP helps analyze customer feedback, automate document processing, and improve communication systems.</p>

      <h2>The Future of NLP</h2>
      <p>With advances in transformer models and large language models, NLP capabilities continue to improve, opening new possibilities for human-computer interaction.</p>
    `,
    date: "2024-01-05",
    category: "NLP",
    readTime: "6 min read",
    image: "/assets/images/programming-background-collage (1).jpg",
    imageAlt: "Natural Language Processing",
    author: {
      name: "Dr. Kavita Desai",
      role: "NLP Research Scientist",
    },
    tags: ["NLP", "AI", "Machine Learning", "Language"],
  },
  {
    id: "4",
    slug: "cybersecurity-trends-2024",
    title: "Cybersecurity Trends for 2024",
    excerpt: "Key cybersecurity trends and threats businesses should be aware of in 2024.",
    content: `
      <p>As technology evolves, so do cybersecurity threats. Staying ahead of these threats requires understanding emerging trends and implementing proactive security measures.</p>

      <h2>Emerging Threats</h2>
      <p>Ransomware attacks continue to evolve, with attackers using more sophisticated techniques. AI-powered attacks are also on the rise, making it crucial for businesses to adopt AI-driven defense mechanisms.</p>

      <h2>Zero Trust Architecture</h2>
      <p>The zero trust security model, which assumes no implicit trust and verifies every access request, is becoming the standard for modern security architectures.</p>

      <h2>Best Practices</h2>
      <p>Regular security audits, employee training, multi-factor authentication, and keeping systems updated are essential components of a robust cybersecurity strategy.</p>
    `,
    date: "2024-01-01",
    category: "Security",
    readTime: "8 min read",
    image: "/assets/images/cybersecurity-concept-illustration (1).jpg",
    imageAlt: "Cybersecurity Trends",
    author: {
      name: "Arjun Reddy",
      role: "Chief Security Officer",
    },
    tags: ["Security", "Cybersecurity", "Threats", "Best Practices"],
  },
  {
    id: "5",
    slug: "devops-automation-strategies",
    title: "DevOps Automation Strategies",
    excerpt: "How to streamline your development and deployment processes with automation.",
    content: `
      <p>DevOps automation is essential for modern software development, enabling teams to deliver faster, more reliable software releases.</p>

      <h2>CI/CD Pipelines</h2>
      <p>Continuous Integration and Continuous Deployment pipelines automate the process of building, testing, and deploying code, reducing manual errors and accelerating delivery.</p>

      <h2>Infrastructure as Code</h2>
      <p>IaC allows teams to manage infrastructure through code, making it version-controlled, repeatable, and easier to maintain.</p>

      <h2>Monitoring and Observability</h2>
      <p>Automated monitoring and alerting systems help teams identify and resolve issues quickly, maintaining high system reliability.</p>
    `,
    date: "2023-12-28",
    category: "DevOps",
    readTime: "6 min read",
    image: "/assets/images/html-css-collage-concept-with-hacker (1).jpg",
    imageAlt: "DevOps Automation",
    author: {
      name: "Aditya Verma",
      role: "DevOps Engineer",
    },
    tags: ["DevOps", "Automation", "CI/CD", "Infrastructure"],
  },
  {
    id: "6",
    slug: "mobile-app-development-trends",
    title: "Mobile App Development Trends",
    excerpt: "Latest trends and technologies shaping the mobile application development landscape.",
    content: `
      <p>Mobile app development continues to evolve rapidly, with new frameworks, tools, and best practices emerging regularly.</p>

      <h2>Cross-Platform Development</h2>
      <p>Frameworks like React Native and Flutter enable developers to build apps for multiple platforms from a single codebase, reducing development time and costs.</p>

      <h2>Progressive Web Apps</h2>
      <p>PWAs combine the best of web and mobile apps, offering native-like experiences without requiring app store distribution.</p>

      <h2>AI Integration</h2>
      <p>Mobile apps are increasingly incorporating AI features, from personalized recommendations to voice assistants and image recognition.</p>

      <h2>Performance Optimization</h2>
      <p>As users demand faster, more responsive apps, performance optimization techniques like lazy loading, code splitting, and efficient caching become critical.</p>
    `,
    date: "2023-12-20",
    category: "Mobile",
    readTime: "5 min read",
    image: "/assets/images/top-view-nutritional-counter-app (1).jpg",
    imageAlt: "Mobile App Development",
    author: {
      name: "Sneha Gupta",
      role: "Mobile Development Lead",
    },
    tags: ["Mobile", "Development", "Apps", "Trends"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPostBySlug(currentSlug);
  if (!currentPost) return [];

  return blogPosts
    .filter((post) => post.slug !== currentSlug && post.category === currentPost.category)
    .slice(0, limit);
}

