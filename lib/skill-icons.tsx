import { IconType } from "react-icons";
import {
  SiPython,
  SiGo,
  SiJavascript,
  SiCplusplus,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiFlask,
  SiDjango,
  SiDotnet,
  SiPytorch,
  SiHuggingface,
  SiTensorflow,
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiRabbitmq,
  SiApachekafka,
  SiJenkins,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiNeo4J,
  SiMysql,
  SiGraphql,
  SiSupabase,
  SiNumpy,
  SiPandas,
  SiLangchain,
} from "react-icons/si";
import { Code, Globe, Boxes, MessageSquare, Brain, Sparkles, Zap, Settings, Coffee, Server, Database, FileText, GitBranch, Terminal, Monitor, Activity, Hash } from "lucide-react";

// Map skill names to React Icons (brand icons) or Lucide fallbacks
export const skillIcons: Record<string, IconType | any> = {
  // Languages
  Python: SiPython,
  Java: Coffee, // Fallback to Lucide icon
  Golang: SiGo,
  Go: SiGo,
  "C#": SiDotnet, // Use .NET icon as C# is part of .NET
  JavaScript: SiJavascript,
  "C/C++": SiCplusplus,
  C: SiCplusplus, // Use C++ icon for C
  TypeScript: SiTypescript,
  SQL: Database,
  CQL: Database,
  JSON: FileText,
  YAML: FileText,

  // Frontend
  ReactJS: SiReact,
  React: SiReact,
  "Next.js": SiNextdotjs,
  Nextjs: SiNextdotjs,
  HTML: SiHtml5,
  CSS: SiCss3,

  // Backend
  "REST APIs": Globe, // Fallback to Lucide icon
  "REST API": Globe,
  REST: Globe,
  gRPC: Server, // Fallback to Lucide icon
  GraphQL: SiGraphql,
  Microservices: Boxes,
  Flask: SiFlask,
  Django: SiDjango,
  ".NET": SiDotnet,
  ".NET Core": SiDotnet,
  "Java REST": Coffee,
  "Node.js": SiNodedotjs,
  Nodejs: SiNodedotjs,

  // ML/AI
  PyTorch: SiPytorch,
  Pytorch: SiPytorch,
  "Scikit-learn": Brain, // Fallback
  HuggingFace: SiHuggingface,
  Huggingface: SiHuggingface,
  Transformers: Sparkles,
  vLLM: Zap,
  Numpy: SiNumpy,
  Pandas: SiPandas,
  LangChain: SiLangchain,
  LLMs: Brain,
  LoRA: Zap,
  TensorFlow: SiTensorflow,
  Tensorflow: SiTensorflow,

  // Infrastructure
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Git: GitBranch,
  Jenkins: SiJenkins,
  ELK: Activity, // Fallback
  Postman: Globe, // Fallback
  AWS: SiAmazon,
  Bitbucket: GitBranch, // Fallback
  Jira: Settings, // Fallback
  GitHub: GitBranch, // Fallback
  Unix: Terminal,
  Windows: Monitor,
  Agile: Activity, // Fallback
  Cursor: Code, // Fallback
  RabbitMQ: SiRabbitmq,
  Kafka: SiApachekafka,

  // Databases & Messaging
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  Postgresql: SiPostgresql,
  MongoDB: SiMongodb,
  Mongodb: SiMongodb,
  Redis: SiRedis,
  Neo4j: SiNeo4J,
  Neo4J: SiNeo4J,
  Pinecone: Database, // Fallback
  Supabase: SiSupabase,
};

// Default icon for skills not in the map
export const DefaultSkillIcon = Code;

// Get icon for a skill name
export function getSkillIcon(skillName: string): IconType | any {
  // Try exact match first
  if (skillIcons[skillName]) {
    return skillIcons[skillName];
  }

  // Try case-insensitive match
  const lowerSkillName = skillName.toLowerCase().trim();
  for (const [key, icon] of Object.entries(skillIcons)) {
    if (key.toLowerCase() === lowerSkillName) {
      return icon;
    }
  }

  // Try partial match for common variations
  if (lowerSkillName.includes("python")) return SiPython;
  if (lowerSkillName.includes("java") && !lowerSkillName.includes("javascript")) return Coffee;
  if (lowerSkillName.includes("golang") || lowerSkillName.includes("go ")) return SiGo;
  if (lowerSkillName.includes("c#") || lowerSkillName.includes("csharp")) return SiDotnet;
  if (lowerSkillName.includes("javascript") || lowerSkillName === "js") return SiJavascript;
  if (lowerSkillName.includes("typescript") || lowerSkillName === "ts") return SiTypescript;
  if (lowerSkillName.includes("c++") || lowerSkillName.includes("cpp")) return SiCplusplus;
  if (lowerSkillName.includes("react") && !lowerSkillName.includes("next")) return SiReact;
  if (lowerSkillName.includes("next")) return SiNextdotjs;
  if (lowerSkillName.includes("html")) return SiHtml5;
  if (lowerSkillName.includes("css")) return SiCss3;
  if (lowerSkillName.includes("node")) return SiNodedotjs;
  if (lowerSkillName.includes("flask")) return SiFlask;
  if (lowerSkillName.includes("django")) return SiDjango;
  if (lowerSkillName.includes("dotnet") || lowerSkillName.includes(".net")) return SiDotnet;
  if (lowerSkillName.includes("pytorch")) return SiPytorch;
  if (lowerSkillName.includes("huggingface") || lowerSkillName.includes("hugging face")) return SiHuggingface;
  if (lowerSkillName.includes("tensorflow")) return SiTensorflow;
  if (lowerSkillName.includes("docker")) return SiDocker;
  if (lowerSkillName.includes("kubernetes") || lowerSkillName.includes("k8s")) return SiKubernetes;
  if (lowerSkillName.includes("aws") || lowerSkillName.includes("amazon")) return SiAmazon;
  if (lowerSkillName.includes("rabbitmq") || lowerSkillName.includes("rabbit mq")) return SiRabbitmq;
  if (lowerSkillName.includes("kafka")) return SiApachekafka;
  if (lowerSkillName.includes("jenkins")) return SiJenkins;
  if (lowerSkillName.includes("postgresql") || lowerSkillName.includes("postgres")) return SiPostgresql;
  if (lowerSkillName.includes("mongodb") || lowerSkillName.includes("mongo")) return SiMongodb;
  if (lowerSkillName.includes("redis")) return SiRedis;
  if (lowerSkillName.includes("neo4j") || lowerSkillName.includes("neo 4j")) return SiNeo4J;
  if (lowerSkillName.includes("mysql")) return SiMysql;
  if (lowerSkillName.includes("graphql")) return SiGraphql;
  if (lowerSkillName.includes("supabase")) return SiSupabase;
  if (lowerSkillName.includes("pinecone")) return Database;
  if (lowerSkillName.includes("numpy")) return SiNumpy;
  if (lowerSkillName.includes("pandas")) return SiPandas;
  if (lowerSkillName.includes("langchain")) return SiLangchain;
  if (lowerSkillName.includes("vllm") || lowerSkillName.includes("v-llm")) return Zap;
  if (lowerSkillName.includes("scikit") || lowerSkillName.includes("sklearn")) return Brain;
  if (lowerSkillName.includes("rest") || lowerSkillName.includes("api")) return Globe;
  if (lowerSkillName.includes("grpc")) return Server;
  if (lowerSkillName.includes("microservice")) return Boxes;
  if (lowerSkillName.includes("llm") || lowerSkillName.includes("large language")) return Brain;
  if (lowerSkillName.includes("lora")) return Zap;
  if (lowerSkillName.includes("transformer")) return Sparkles;
  if (lowerSkillName.includes("sql")) return Database;
  if (lowerSkillName.includes("cql")) return Database;
  if (lowerSkillName.includes("json")) return FileText;
  if (lowerSkillName.includes("yaml") || lowerSkillName.includes("yml")) return FileText;
  if (lowerSkillName.includes("git")) return GitBranch;
  if (lowerSkillName.includes("elk")) return Activity;
  if (lowerSkillName.includes("postman")) return Globe;
  if (lowerSkillName.includes("bitbucket")) return GitBranch;
  if (lowerSkillName.includes("jira")) return Settings;
  if (lowerSkillName.includes("github")) return GitBranch;
  if (lowerSkillName.includes("unix") || lowerSkillName.includes("linux")) return Terminal;
  if (lowerSkillName.includes("windows")) return Monitor;
  if (lowerSkillName.includes("agile")) return Activity;
  if (lowerSkillName.includes("cursor")) return Code;

  return DefaultSkillIcon;
}
