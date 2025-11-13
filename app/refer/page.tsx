import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  MapPin, 
  Download, 
  Briefcase, 
  GraduationCap, 
  Globe, 
  FileText,
  CheckCircle2,
  ExternalLink,
  Linkedin,
  Github,
  Copy,
  Check
} from "lucide-react";
import Link from "next/link";
import { getPersonalInfo, getAbout, getExperience, getEducation } from "@/lib/sanity/data";
import { CopyIntroductionButton } from "@/components/copy-introduction-button";

export const metadata: Metadata = {
  title: "Refer Prudhvi Nikku - Software Engineer",
  description: "Referral information for Prudhvi Nikku - Backend & ML Engineer",
};

export default async function ReferPage() {
  // Fetch data from Sanity CMS (with fallback to static data)
  const [personalInfo, about, experience, education] = await Promise.all([
    getPersonalInfo(),
    getAbout(),
    getExperience(),
    getEducation(),
  ]);

  // Sponsorship status - Update these values based on your actual status
  const sponsorshipStatus = {
    requiresSponsorship: true, // Set to true if you need sponsorship
    workAuthorization: "F1 OPT (STEM Extension Eligible until June 2028)",
    visaStatus: "OPT until June 2028, eligible for H1B sponsorship",
    startDate: "Immediate or as per company policy",
    relocation: "Open to relocate anywhere in the US",
  };

  // Quick stats for referral
  const quickStats = [
    { label: "Years Experience", value: "4+" },
    { label: "Education", value: "MS CS, UMass Amherst" },
    { label: "Status", value: "Open to Work" },
    { label: "Location", value: "Nashville, TN (Open to Relocate)" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Refer <span className="text-primary">Prudhvi Nikku</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Backend & ML Engineer | Distributed Systems • LLMs • Microservices
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {quickStats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm font-medium text-muted-foreground">Email</div>
                <div className="text-lg font-semibold">{personalInfo.email}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Location
                </div>
                <div className="text-lg font-semibold">{personalInfo.location}</div>
              </div>
              <div className="flex gap-4 pt-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Work Authorization & Sponsorship */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Work Authorization & Sponsorship
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm font-medium text-muted-foreground">Authorization Status</div>
                <div className="text-lg font-semibold flex items-center gap-2">
                  {sponsorshipStatus.requiresSponsorship ? (
                    <>
                      <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                      Requires Sponsorship
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      Authorized to Work
                    </>
                  )}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Work Authorization</div>
                <div className="text-base">{sponsorshipStatus.workAuthorization}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Visa Status</div>
                <div className="text-base">{sponsorshipStatus.visaStatus}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Available Start Date</div>
                <div className="text-base">{sponsorshipStatus.startDate}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Relocation</div>
                <div className="text-base">{sponsorshipStatus.relocation}</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Third Person Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Introduction
              </CardTitle>
              <CopyIntroductionButton />
            </div>
          </CardHeader>
          <CardContent>
            <div 
              id="introduction-text"
              className="prose prose-sm sm:prose-base max-w-none dark:prose-invert select-text"
            >
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                Prudhvi Nikku is a Backend & ML Engineer who builds scalable systems and ML infrastructure that power millions of users. He recently completed his Master of Science in Computer Science at the University of Massachusetts Amherst (May 2025), where he worked on a capstone project with Meta focused on LLM persona generation and optimization. During this project, he generated 100K+ diverse synthetic personas using zero-shot and few-shot prompting techniques, accelerated LLM inference throughput by 40% through asynchronous multiprocessing with Together AI and OpenRouter APIs, and fine-tuned LLaMA models using LoRA with HuggingFace and Weights & Biases.
              </p>
              <p className="text-base leading-relaxed mb-4">
                Prior to his graduate studies, Prudhvi spent over four years building high-throughput distributed systems in production environments. At RedBus, India&apos;s largest bus booking platform, he designed and maintained microservices that handled 3M+ queries per second for 12M daily active users. He led the development of the RedPass Go microservice, which generated $500K+ in annual revenue and enabled 10K+ daily purchases. His expertise spans multiple technology stacks including Java, Go, .NET, and Python, with a strong focus on microservices architecture, message queues (RabbitMQ, Kafka), and cloud infrastructure (AWS, Docker, Kubernetes).
              </p>
              <p className="text-base leading-relaxed">
                Prudhvi is passionate about the intersection of distributed systems and artificial intelligence, with a particular interest in making ML systems production-ready at scale. He is currently seeking full-time Backend Engineer or ML Engineer roles, with a focus on companies building LLM infrastructure, AI applications, and large-scale distributed systems. He is authorized to work in the US on F1 OPT (STEM Extension eligible until June 2028) and is open to H1B sponsorship. Prudhvi is ready to start immediately and is open to relocating anywhere in the United States.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Experience Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Recent Experience
            </CardTitle>
            <CardDescription>Key roles and achievements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {experience.slice(0, 3).map((job, index) => (
                <div key={index} className="border-l-2 border-primary/50 pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">{job.company}</h3>
                      <p className="text-sm text-muted-foreground">{job.role}</p>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {job.period}
                    </Badge>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {job.description.slice(0, 2).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary/50 pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">{edu.institution}</h3>
                      <p className="text-sm text-muted-foreground">{edu.degree}</p>
                      {(edu as any).gpa && (
                        <p className="text-sm font-medium text-primary mt-1">
                          GPA: {(edu as any).gpa}
                        </p>
                      )}
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {edu.period}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{edu.coursework}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Open to Roles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Open to Roles</CardTitle>
            <CardDescription>Roles I'm interested in</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {personalInfo.availableRoles?.map((role, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {role}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/Satya_Prudhvi_Nikku_Resume.pdf" target="_blank" rel="noopener noreferrer" download>
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href={`mailto:${personalInfo.email}?subject=Referral for ${personalInfo.name}`}>
              <Mail className="h-5 w-5 mr-2" />
              Email for Referral
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-5 w-5 mr-2" />
              View Full Portfolio
            </Link>
          </Button>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            Thank you for considering me for a referral! Please feel free to reach out if you need any additional information.
          </p>
        </div>
      </div>
    </div>
  );
}

