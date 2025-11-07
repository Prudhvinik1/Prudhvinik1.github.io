export const personalInfo = {
  name: "Prudhvi Nikku",
  title: "Backend & ML Engineer",
  subtitle: "Distributed Systems • LLMs • Microservices",
  github: "https://github.com/Prudhvinik1",
  linkedin: "https://www.linkedin.com/in/prudhvinikku/",
  email: "snikku@umass.edu",
  location: "Nashville, Tennessee, United States",
  status: "Open to Work",
  availableRoles: [
    "Software Engineer",
    "Software Developer", 
    "Senior Software Engineer",
    "Machine Learning Engineer",
    "AI Engineer"
  ],
};

export const about = {
  description:
    "I build backend systems and ML infrastructure that scale to millions of users. Just completed my MS in Computer Science at UMass Amherst (May 2025), including a capstone project with Meta where I generated 100K+ diverse personas using zero-shot/few-shot prompting for LLM training, accelerated inference throughput by 40% through async multiprocessing, and fine-tuned LLaMA models using LoRA.",
  whatDrivesMe:
    "The intersection of distributed systems and AI. I'm passionate about building infrastructure that makes ML systems production-ready at scale. Whether it's handling 3M queries/second or optimizing LLM inference, I care about performance, reliability, and real-world impact.",
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
      "Generated 100K+ synthetic personas and persona-aware Math QA pairs using zero-shot, few-shot, and POT prompting boosting diversity by 10% via increased unique 1-grams and fine-tuned Llama models using LoRA using HF, wandb.",
      "Accelerated LLM inference throughput by 40% by engineering an asynchronous multiprocessing pipeline integrating Together AI and OpenRouter APIs, reducing latency for large-scale workloads.",
    ],
  },
  {
    company: "RedBus",
    role: "Software Engineer – Backend Distributed Systems",
    period: "June 2022 – July 2023",
    location: "Bengaluru, India",
    description: [
      "Designed RedPass Go microservice and integrated with Java/.NET booking flows; unified opt-in and payment logic, enabling 10K+ daily purchases and $500K+ annual revenue.",
      "Maintained and revamped 20+ high-throughput microservices across Personalization, Search and Booking services written in Java/Go/.NET handling 3M+ queries per second for 12M daily users.",
      "Delivered a geospatial \"Nearby Boarding Point\" feature in search service used by 50K+ monthly riders.",
      "Optimized and migrated RabbitMQ-based schedulers from Windows to Linux machines, reducing AWS costs by $600/year and improving operational efficiency across notification systems.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "Software Engineer",
    period: "August 2020 – June 2022",
    location: "Hyderabad, India",
    description: [
      "Engineered custom wrapper APIs in C# and WCF, eliminating redundant XML fields and metadata, reducing average payload size from 40KB to 20KB (50% decrease) and boosting backend data throughput by 10%.",
      "Implemented unit and functional tests for 15+ features, boosting release quality by 15% with QA and product teams.",
      "Developed 30+ UI pages in .NET, improving operator experience and shopfloor workflow efficiency.",
    ],
  },
  {
    company: "PiChain Labs",
    role: "Software Engineering Intern",
    period: "January 2020 – June 2020",
    location: "Bengaluru, India",
    description: [
      "Led backend development of a KYC/AML engine for 3+ clients, delivering 10+ production-grade REST APIs using Flask, MongoDB, and deploying services on AWS EC2 to enhance compliance and risk mitigation.",
      "Architected a scalable Knowledge Graph system using Neo4j, Python (Py2Neo, CQL), enabling advanced relationship modeling for regulatory entities and improving AML insights.",
    ],
  },
  {
    company: "IBM Research",
    role: "Machine Learning Intern",
    period: "June 2019 – November 2019",
    location: "Sricity, India",
    description: [
      "Improved aggressive behavior detection accuracy by 5–13% using deep neural networks and Convolutional-LSTMs for spatio-temporal video modeling.",
      "Experimented Faster R-CNN for handgun detection in surveillance videos, to study threat recognition in real-time video analysis.",
    ],
  },
];

export const education = [
  {
    institution: "University of Massachusetts - Amherst",
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
    technologies: ["Next.js", "FastAPI", "TypeScript", "Python"],
    period: "September 2025",
    link: "https://github.com/Prudhvinik1",
  },
  {
    name: "Emotion Cause Pair Extraction (Semeval 2024)",
    description:
      "Explored and evaluated a question-answering paradigm for ECPE, introducing innovative methodologies that increased emotion-cause pair extraction accuracy by 22% and improved model interpretability. Integrated Quantized Low-Rank Adaptation (QLoRA) for efficient fine-tuning of large pre-trained language models, boosting performance by 18% while reducing computational resource usage by 30%.",
    technologies: ["PyTorch", "Python", "HuggingFace", "Peft"],
    period: "May 2024",
    link: "https://github.com/Prudhvinik1/emotion-cause-pair-extraction",
  },
  {
    name: "Deep RL Algorithms Implementation and Evaluation",
    description:
      "Implemented and benchmarked advanced reinforcement learning algorithms (REINFORCE with Baseline, One-Step Actor-Critic, PPO, and N-step SARSA) using PyTorch and OpenAI gym for Policy Optimization.",
    technologies: ["Python", "openAI Gym", "Pytorch"],
    period: "December 2024",
    link: "https://github.com/Prudhvinik1",
  },
];

export const skills = {
  languages: [
    "Python",
    "Go",
    "Java",
    "C#",
    "JavaScript",
    "TypeScript",
    "C",
    "SQL",
    "CQL",
    "JSON",
    "YAML",
  ],
  frontend: ["React", "Next.js", "HTML", "CSS"],
  backend: ["REST API", "gRPC", "GraphQL", "Django", "Flask", ".NET Core", "Java REST", "Node.js"],
  mlAi: ["PyTorch", "Scikit-learn", "Huggingface", "Transformers", "vLLM", "Numpy", "Pandas", "LangChain"],
  infrastructure: ["Docker", "Kubernetes", "Git", "Jenkins", "ELK", "Postman", "AWS", "Bitbucket", "Jira", "GitHub", "Unix", "Windows", "Agile", "Cursor"],
  databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Neo4J", "Kafka", "RabbitMQ", "Pinecone", "Supabase"],
};

export const stats = [
  {
    value: "4+",
    label: "Years Experience",
    description: "Software Engineering",
  },
  {
    value: "12M",
    label: "Daily Active Users",
    description: "Platforms powered at RedBus",
  },
  {
    value: "$500K",
    label: "Annual Revenue",
    description: "RedPass campaign generated",
  },
  {
    value: "40%",
    label: "Performance Boost",
    description: "Inference throughput at Meta",
  },
];

export const featuredLinks = [
  {
    name: "Resume",
    url: "/resume.pdf",
    icon: "file",
  },
  {
    name: "Medium Article",
    url: "https://medium.com/@prudhvinikku",
    icon: "book",
  },
  {
    name: "LeetCode Profile",
    url: "https://leetcode.com/u/Prudhvinik1/",
    icon: "code",
  },
];
