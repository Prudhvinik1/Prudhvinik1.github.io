"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

const introductionText = `Prudhvi Nikku is a Backend & ML Engineer who builds scalable systems and ML infrastructure that power millions of users. He recently completed his Master of Science in Computer Science at the University of Massachusetts Amherst (May 2025), where he worked on a capstone project with Meta focused on LLM persona generation and optimization. During this project, he generated 100K+ diverse synthetic personas using zero-shot and few-shot prompting techniques, accelerated LLM inference throughput by 40% through asynchronous multiprocessing with Together AI and OpenRouter APIs, and fine-tuned LLaMA models using LoRA with HuggingFace and Weights & Biases.

Prior to his graduate studies, Prudhvi spent over four years building high-throughput distributed systems in production environments. At RedBus, India's largest bus booking platform, he designed and maintained microservices that handled 3M+ queries per second for 12M daily active users. He led the development of the RedPass Go microservice, which generated $500K+ in annual revenue and enabled 10K+ daily purchases. His expertise spans multiple technology stacks including Java, Go, .NET, and Python, with a strong focus on microservices architecture, message queues (RabbitMQ, Kafka), and cloud infrastructure (AWS, Docker, Kubernetes).

Prudhvi is passionate about the intersection of distributed systems and artificial intelligence, with a particular interest in making ML systems production-ready at scale. He is currently seeking full-time Backend Engineer or ML Engineer roles, with a focus on companies building LLM infrastructure, AI applications, and large-scale distributed systems. He is authorized to work in the US on F1 OPT (STEM Extension eligible until June 2028) and is open to H1B sponsorship. Prudhvi is ready to start immediately and is open to relocating anywhere in the United States.`;

export function CopyIntroductionButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(introductionText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = introductionText;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error("Fallback copy failed:", fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleCopy}
      className="flex items-center gap-2"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          Copy Introduction
        </>
      )}
    </Button>
  );
}

