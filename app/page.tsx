import Link from "next/link";
import { Github, Linkedin, Mail, ExternalLink, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  personalInfo,
  about,
  experience,
  education,
  projects,
  skills,
} from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />

      {/* Hero Section */}
      <section className="container mx-auto max-w-5xl px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {personalInfo.title}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="default" asChild>
              <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto max-w-5xl px-4 py-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">About</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {about.description}
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto max-w-5xl px-4 py-12">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Experience</h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-xl">{job.company}</CardTitle>
                      <CardDescription className="text-base">{job.role}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="ml-2 whitespace-nowrap">
                      {job.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {job.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto max-w-5xl px-4 py-12">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-xl">{edu.institution}</CardTitle>
                      <CardDescription className="text-base">{edu.degree}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="ml-2 whitespace-nowrap">
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    <span className="font-medium">Coursework: </span>
                    {edu.coursework}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto max-w-5xl px-4 py-12">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.name}
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto max-w-5xl px-4 py-12 pb-20">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <Badge key={index} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <Badge key={index} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, index) => (
                  <Badge key={index} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Tools & Others</h3>
              <div className="flex flex-wrap gap-2">
                {skills.others.map((skill, index) => (
                  <Badge key={index} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto max-w-5xl px-4 py-8">
          <p className="text-center text-muted-foreground">
            Built with Next.js and shadcn/ui
          </p>
        </div>
      </footer>
    </div>
  );
}
