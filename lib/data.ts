export const personalInfo = {
  name: "Prudhvi Nikku",
  title: "Backend & ML Engineer",
  subtitle: "Distributed Systems • LLMs • Microservices",
  github: "https://github.com/Prudhvinik1",
  linkedin: "https://www.linkedin.com/in/prudhvinikku/",
  email: "snikku@umass.edu",
  location: "Austin, Texas, United States",
  status: "Open to Work",
  availableRoles: [
    "Backend Engineer",
    "ML Engineer",
    "Software Engineer",
    "AI Infrastructure Engineer"
  ],
};

export const about = {
  description:
    "I build backend systems and ML infrastructure that scale to millions of users. Just completed my MS in Computer Science at UMass Amherst (May 2025), including a capstone project with Meta where I generated 100K+ diverse personas using zero-shot/few-shot prompting for LLM training, accelerated inference throughput by 40% through async multiprocessing, and fine-tuned LLaMA models using LoRA.",
  whatDrivesMe:
    "The intersection of distributed systems and AI. I'm passionate about building infrastructure that makes ML systems production-ready at scale. Whether it's handling 50K requests per minute or optimizing LLM inference, I care about performance, reliability, and real-world impact.",
  lookingFor:
    "Full-time Backend Engineer or ML Engineer roles. I'm particularly interested in companies building LLM infrastructure and AI applications, distributed systems at scale, and roles that blend systems engineering with machine learning.",
};

export const experience = [
  {
    company: "Meta",
    role: "Extern — Capstone Project",
    period: "February 2025 – May 2025",
    location: "Amherst, MA",
    description: [
      "Generated 100K+ synthetic personas and persona-aware Math QA pairs using zero-shot, few-shot, and program-of-thought prompting, demonstrating improved accuracy and diversity metrics over baseline Tencent Persona Hub dataset through unique 1-gram analysis and compression ratios.",
      "Accelerated LLM inference throughput by 40% by engineering an asynchronous multiprocessing pipeline integrating Together AI and OpenRouter APIs, reducing latency for large-scale workloads.",
      "Fine-tuned LLaMA models (3.1-8B, 3B, 1B) using LoRA on persona-driven datasets, evaluating performance using LM Evaluation Harness framework across multiple benchmarks.",
    ],
  },
  {
    company: "RedBus",
    role: "Software Engineer – Backend Distributed Systems",
    period: "June 2022 – July 2023",
    location: "Bengaluru, India",
    description: [
      "Designed and launched RedPass subscription microservice in Go, creating RESTful APIs for payment processing and user management—enabled 10K+ daily purchases generating $438K in annual revenue.",
      "Maintained and optimized 20+ production microservices (Java/Go/.NET) serving 500K+ daily active users at 50K requests/minute, participating in on-call rotations and debugging production issues to ensure service reliability.",
      "Integrated RedPass with existing Java/.NET booking systems using REST APIs and message queues (RabbitMQ), ensuring seamless data flow across 5+ services while maintaining backward compatibility.",
      "Engineered user segmentation system personalizing payment options based on user behavior and demographics, improving conversion rates by 15% through targeted payment method recommendations.",
      "Delivered geospatial 'Nearby Boarding Point' feature in search service used by 50K+ monthly riders, enhancing travel convenience.",
      "Optimized and migrated RabbitMQ-based schedulers from Windows to Linux machines, reducing AWS operational costs by $600/year and improving system efficiency.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "Software Engineer – Backend Systems",
    period: "August 2020 – June 2022",
    location: "Hyderabad, India",
    description: [
      "Developed backend systems and APIs for Camstar manufacturing execution platform at Johnson & Johnson, supporting production operations processing 1,000+ daily manufacturing orders written in .NET Core, MsMQ, MsSQL Server.",
      "Built API wrapper layer in C#/WCF reducing XML payload sizes by 50% (40KB → 20KB) and improving data throughput by 10%, enabling real-time communication between manufacturing floor and enterprise systems.",
      "Integrated Camstar MES with external quality and inventory systems using WCF web services, automating data exchange across 5 critical manufacturing processes and eliminating manual data entry for 100+ operators.",
      "Created 30+ workflow pages using .NET Designer and optimized database queries through indexing and caching strategies, improving system response time by 10% for production floor operations.",
    ],
  },
  {
    company: "PiChain Labs",
    role: "Software Engineering Intern",
    period: "January 2020 – June 2020",
    location: "Bengaluru, India",
    description: [
      "Built backend infrastructure for KYC/AML compliance engine serving 5 enterprise financial services clients, delivering 10+ REST APIs using Flask, MongoDB on AWS EC2, processing 1,500+ daily verifications.",
      "Designed Neo4j Knowledge Graph for regulatory compliance tracking 12,000+ business entities and relationships, implementing automated PEP screening, sanctions checking, and money laundering pattern detection.",
      "Engineered document processing service using machine learning and computer vision to classify legal documents and identify US state of origin, enhancing document processing efficiency for compliance workflows.",
    ],
  },
  {
    company: "IBM Research",
    role: "Machine Learning Intern",
    period: "June 2019 – November 2019",
    location: "Sricity, India",
    description: [
      "Improved aggressive behavior detection accuracy by 5-13% using deep neural networks and Convolutional-LSTMs for spatio-temporal video modeling in surveillance systems.",
      "Experimented with Faster R-CNN for handgun detection in surveillance videos to study threat recognition in real-time video analysis applications.",
    ],
  },
];

export const education = [
  {
    institution: "University of Massachusetts Amherst",
    degree: "Master of Science: Computer Science",
    period: "September 2023 – May 2025",
    location: "Amherst, MA",
    gpa: "3.82/4.0",
    coursework:
      "Distributed Systems, Advanced NLP, Systems for Deep Learning, Reinforcement Learning, Software Engineering",
    highlights: [
      "Capstone project with Meta on LLM persona generation and optimization",
      "Focus on Distributed Systems and AI/ML infrastructure",
    ],
  },
  {
    institution: "Indian Institute of Information Technology, Sricity",
    degree: "Bachelor of Technology: Computer Science and Engineering",
    period: "July 2016 – June 2020",
    location: "Sricity, India",
    coursework:
      "Data Structures & Algorithms, Operating Systems, Machine Learning, Databases, Web Development",
  },
];

export const projects = [
  {
    name: "Deep Research Assistant",
    description:
      "Built AI research assistant with FastAPI and Next.js 15, integrating Exa API for web search and Cerebras Cloud (Llama 4) for real-time streaming analysis via Server-Sent Events with sub-second latency. Developed full-stack TypeScript/Python application with async streaming architecture, implementing concurrent AI inference and markdown rendering across 5+ sources per query.",
    technologies: ["Next.js", "FastAPI", "TypeScript", "Python", "LangChain"],
    period: "September 2025",
    link: "https://github.com/Prudhvinik1/deep-research-agent",
  },
  {
    name: "Emotion Cause Pair Extraction",
    description:
      "Explored and evaluated a question-answering paradigm for Emotion-Cause Pair Extraction (ECPE) as part of SemEval 2024 Task 3. Introduced innovative methodologies that increased emotion-cause pair extraction accuracy, leveraging state-of-the-art transformer models and prompt engineering techniques for causal relationship detection in conversational text.",
    technologies: ["PyTorch", "Python", "Hugging Face", "PEFT"],
    period: "May 2024",
    link: "https://github.com/Prudhvinik1/emotion-cause-pair-extraction",
  },
  {
    name: "Deep RL Algorithms Implementation",
    description:
      "Implemented and benchmarked advanced reinforcement learning algorithms including REINFORCE with Baseline, One-Step Actor-Critic, PPO, and N-step SARSA using PyTorch. Evaluated performance across multiple OpenAI Gym environments, analyzing convergence rates, sample efficiency, and policy stability across different algorithmic approaches.",
    technologies: ["Python", "PyTorch", "OpenAI Gym"],
    period: "December 2024",
    link: "https://github.com/Prudhvinik1/deep-rl-algorithms",
  },
  {
    name: "URL Shortener Service",
    description:
      "Built URL shortening service in Go with PostgreSQL backend, implementing short code generation algorithm, 302 redirect functionality, and custom slug support for user-defined short URLs. Designed database schema with TTL-based expiration mechanism for automatic URL cleanup and implemented efficient lookup indexing for sub-100ms redirect response times.",
    technologies: ["Go", "PostgreSQL", "REST API"],
    period: "December 2024",
    link: "https://github.com/Prudhvinik1/url_shortner",
  },
];

export const skills = {
  languages: ["Python", "Go", "Java", "C#", "JavaScript", "TypeScript", "SQL", "C"],
  backend: ["REST API", "gRPC", "GraphQL", "Flask", "FastAPI", "Django", ".NET Core", "Node.js"],
  mlAi: ["PyTorch", "Hugging Face Transformers", "LangChain", "vLLM", "Scikit-learn", "NumPy", "Pandas", "PEFT/LoRA"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Neo4j", "Kafka", "RabbitMQ"],
  infrastructure: ["Docker", "Kubernetes", "AWS (EC2, S3, Lambda)", "Git", "Jenkins", "ELK Stack", "Linux/Unix"],
  frontend: ["React", "Next.js", "HTML/CSS", "TypeScript"],
};

export const stats = [
  {
    value: "4+",
    label: "Years Experience",
    description: "Professional Software Engineering",
  },
  {
    value: "500K+",
    label: "Daily Active Users",
    description: "Services maintained at RedBus",
  },
  {
    value: "$438K",
    label: "Annual Revenue",
    description: "RedPass subscription service generated",
  },
  {
    value: "40%",
    label: "Performance Boost",
    description: "Inference throughput optimization at Meta",
  },
];

export const featuredLinks = [
  {
    name: "Resume",
    url: "/Satya_Prudhvi_Nikku_Resume.pdf",
    icon: "file",
  },
  {
    name: "LeetCode Profile",
    url: "https://leetcode.com/u/Prudhvinik1/",
    icon: "code",
  },
  {
    name: "GitHub",
    url: "https://github.com/Prudhvinik1",
    icon: "github",
  },
];
