import Link from "next/link";
import { Github, Linkedin, Mail, ExternalLink, Briefcase, GraduationCap, Code, Zap, Download, TrendingUp, Users, DollarSign, Activity, MapPin, FileText, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { ScrollProgress } from "@/components/scroll-progress";
import { ScrollToTop } from "@/components/scroll-to-top";
import { StatCard } from "@/components/stat-card";
import { GitHubStats } from "@/components/github-stats";
import { VisitorMetrics } from "@/components/visitor-metrics";
import { PerformanceMetrics } from "@/components/performance-metrics";
import {
  FadeInOnScroll,
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
  LiftOnHover,
  TextReveal,
  FadeIn,
} from "@/components/smooth-animations";
import {
  getPersonalInfo,
  getAbout,
  getExperience,
  getEducation,
  getProjects,
  getSkills,
  getStats,
} from "@/lib/sanity/data";
import { featuredLinks } from "@/lib/data";
import { getSkillIcon } from "@/lib/skill-icons";

export default async function Home() {
  // Fetch all data from Sanity CMS (with fallback to static data)
  const [personalInfo, about, experience, education, projects, skills, statsData] = await Promise.all([
    getPersonalInfo(),
    getAbout(),
    getExperience(),
    getEducation(),
    getProjects(),
    getSkills(),
    getStats(),
  ]);

  // Stats should always be an array (getStats ensures this)
  const stats = statsData;
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      <ScrollToTop />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
        
        <div className="container-fluid relative z-10 py-20 md:py-32">
          <FadeIn delay={0.2} className="flex flex-col items-center text-center w-full">
            <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
              {/* Name */}
          <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[1.1]">
                  <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                    <TextReveal delay={0}>
                      {personalInfo.name.split(" ")[0]}
                    </TextReveal>
                    <br className="hidden sm:block" />
                    <span className="sm:ml-4">
                      <TextReveal delay={0.1}>
                        {personalInfo.name.split(" ").slice(1).join(" ")}
                      </TextReveal>
                    </span>
                  </span>
            </h1>
              </div>

              {/* Title */}
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  <TextReveal delay={0.2}>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-medium">
              {personalInfo.title}
            </p>
                  </TextReveal>
                  <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>

                {personalInfo.subtitle && (
                  <TextReveal delay={0.3}>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground/70 font-light max-w-2xl mx-auto">
                      {personalInfo.subtitle}
                    </p>
                  </TextReveal>
                )}

                {/* Location & Status */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  {personalInfo.location && (
                    <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{personalInfo.location}</span>
                    </div>
                  )}
                  {personalInfo.status && (
                    <Badge variant="default" className="bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30 px-3 py-1">
                      {personalInfo.status}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Tagline */}
              <FadeIn delay={0.4}>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground/60 max-w-3xl mx-auto leading-relaxed font-light text-balance">
                  Building AI-powered systems at scale • MS CS UMass '25 • Seeking Full-Time Roles
                </p>
              </FadeIn>

              {/* CTA Buttons */}
              <FadeIn delay={0.5}>
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4">
                  <ScaleOnHover>
                    <Button variant="default" size="lg" asChild className="shadow-md hover:shadow-lg transition-smooth px-6 sm:px-8 py-6">
              <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-5 w-5" />
                GitHub
              </Link>
            </Button>
                  </ScaleOnHover>
                  <ScaleOnHover>
                    <Button variant="outline" size="lg" asChild className="transition-smooth px-6 sm:px-8 py-6 border-2">
              <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Link>
            </Button>
                  </ScaleOnHover>
                  <ScaleOnHover>
                    <Button variant="outline" size="lg" asChild className="transition-smooth px-6 sm:px-8 py-6 border-2">
                      <Link href={`mailto:${personalInfo.email}`}>
                        <Mail className="mr-2 h-5 w-5" />
                        Contact
                      </Link>
                    </Button>
                  </ScaleOnHover>
                  <ScaleOnHover>
                    <Button variant="secondary" size="lg" asChild className="transition-smooth px-6 sm:px-8 py-6">
                      <Link href="/Satya_Prudhvi_Nikku_Resume.pdf" target="_blank" rel="noopener noreferrer" download>
                        <Download className="mr-2 h-5 w-5" />
                        Resume
                      </Link>
                    </Button>
                  </ScaleOnHover>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="section-padding scroll-mt-20 bg-muted/30">
        <div className="container-fluid">
          <FadeInOnScroll className="space-y-12 md:space-y-16">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Achievements</h2>
              </div>
              <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
            <StaggerContainer className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
              {stats[0] && (
                <StaggerItem>
                  <LiftOnHover>
                    <StatCard
                      icon={TrendingUp}
                      value={stats[0].value}
                      label={stats[0].label}
                      description={stats[0].description}
                    />
                  </LiftOnHover>
                </StaggerItem>
              )}
              {stats[1] && (
                <StaggerItem>
                  <LiftOnHover>
                    <StatCard
                      icon={Users}
                      value={stats[1].value}
                      label={stats[1].label}
                      description={stats[1].description}
                    />
                  </LiftOnHover>
                </StaggerItem>
              )}
              {stats[2] && (
                <StaggerItem>
                  <LiftOnHover>
                    <StatCard
                      icon={DollarSign}
                      value={stats[2].value}
                      label={stats[2].label}
                      description={stats[2].description}
                    />
                  </LiftOnHover>
                </StaggerItem>
              )}
              {stats[3] && (
                <StaggerItem>
                  <LiftOnHover>
                    <StatCard
                      icon={Activity}
                      value={stats[3].value}
                      label={stats[3].label}
                      description={stats[3].description}
                    />
                  </LiftOnHover>
                </StaggerItem>
              )}
            </StaggerContainer>
          </FadeInOnScroll>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding scroll-mt-20">
        <div className="container-fluid">
          <FadeInOnScroll className="space-y-12 md:space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">About</h2>
              <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
            <div className="grid gap-8 md:gap-10 lg:grid-cols-3">
              <Card className="lg:col-span-2 border-2 hover-lift h-full flex flex-col">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl md:text-3xl font-semibold">Overview</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
            {about.description}
          </p>
                </CardContent>
              </Card>
              <div className="space-y-6 lg:space-y-8 flex flex-col">
                {about.whatDrivesMe && (
                  <LiftOnHover className="flex-1">
                    <Card className="border-2 h-full hover:border-primary/50 transition-smooth flex flex-col">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-xl md:text-2xl font-semibold">What Drives Me</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow flex flex-col">
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-balance">
                          {about.whatDrivesMe}
                        </p>
                      </CardContent>
                    </Card>
                  </LiftOnHover>
                )}
                {about.lookingFor && (
                  <LiftOnHover className="flex-1">
                    <Card className="border-2 h-full hover:border-primary/50 transition-smooth flex flex-col">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-xl md:text-2xl font-semibold">What I&apos;m Looking For</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow flex flex-col">
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-balance">
                          {about.lookingFor}
                        </p>
                      </CardContent>
                    </Card>
                  </LiftOnHover>
                )}
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding scroll-mt-20 bg-muted/20">
        <div className="container-fluid">
          <FadeInOnScroll className="space-y-12 md:space-y-16">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Briefcase className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Experience</h2>
              </div>
              <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
            <StaggerContainer className="space-y-6 md:space-y-8">
            {experience.map((job, index) => (
                <StaggerItem key={index}>
                  <LiftOnHover>
                    <Card className="border-2 hover:border-primary/50 transition-smooth group">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                          <div className="space-y-2 flex-grow">
                            <CardTitle className="text-xl sm:text-2xl md:text-3xl group-hover:text-primary transition-colors">
                              {job.company}
                            </CardTitle>
                            <CardDescription className="text-base sm:text-lg md:text-xl font-medium">
                              {job.role}
                            </CardDescription>
                            {(job as any).location && (
                              <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                                <MapPin className="h-4 w-4" />
                                {(job as any).location}
                              </p>
                            )}
                    </div>
                          <Badge variant="secondary" className="w-fit text-xs sm:text-sm px-3 sm:px-4 py-1.5 shrink-0">
                      {job.period}
                    </Badge>
                  </div>
                </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="list-none space-y-3 md:space-y-4">
                    {job.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 md:gap-4">
                              <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                              <span className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                                {item}
                              </span>
                            </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
                  </LiftOnHover>
                </StaggerItem>
            ))}
            </StaggerContainer>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding scroll-mt-20">
        <div className="container-fluid">
          <FadeInOnScroll className="space-y-12 md:space-y-16">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <GraduationCap className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Education</h2>
              </div>
              <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
            <StaggerContainer className="grid gap-6 md:gap-8 md:grid-cols-2">
            {education.map((edu, index) => (
                <StaggerItem key={index}>
                  <LiftOnHover>
                    <Card className="border-2 hover:border-primary/50 transition-smooth h-full group">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                          <div className="space-y-2 flex-grow">
                            <CardTitle className="text-xl sm:text-2xl md:text-3xl group-hover:text-primary transition-colors">
                              {edu.institution}
                            </CardTitle>
                            <CardDescription className="text-base sm:text-lg md:text-xl font-medium">
                              {edu.degree}
                            </CardDescription>
                            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                              {(edu as any).location && (
                                <span className="flex items-center gap-1.5">
                                  <MapPin className="h-4 w-4" />
                                  {(edu as any).location}
                                </span>
                              )}
                              {(edu as any).gpa && (
                                <Badge variant="outline" className="text-xs">
                                  GPA: {(edu as any).gpa}
                                </Badge>
                              )}
                            </div>
                    </div>
                          <Badge variant="secondary" className="w-fit text-xs sm:text-sm px-3 sm:px-4 py-1.5 shrink-0">
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                      <CardContent className="pt-0 space-y-4">
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          <span className="font-semibold text-foreground">Coursework: </span>
                    {edu.coursework}
                  </p>
                        {edu.highlights && edu.highlights.length > 0 && (
                          <div>
                            <p className="font-semibold text-foreground text-sm mb-3">Highlights:</p>
                            <ul className="list-none space-y-2">
                              {edu.highlights.map((highlight, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                  <span className="leading-relaxed">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                </CardContent>
              </Card>
                  </LiftOnHover>
                </StaggerItem>
            ))}
            </StaggerContainer>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding scroll-mt-20 bg-muted/20">
        <div className="container-fluid">
          <FadeInOnScroll className="space-y-12 md:space-y-16">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Code className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Projects</h2>
              </div>
              <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
            <StaggerContainer className="grid gap-6 md:gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
                <StaggerItem key={index}>
                  <LiftOnHover>
                    <Card className="border-2 hover:border-primary/50 transition-smooth flex flex-col h-full group">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-grow space-y-2">
                            <CardTitle className="text-xl sm:text-2xl md:text-3xl group-hover:text-primary transition-colors">
                              {project.name}
                            </CardTitle>
                            {(project as any).period && (
                              <Badge variant="secondary" className="text-xs">
                                {(project as any).period}
                              </Badge>
                            )}
                          </div>
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                          >
                            <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                  </div>
                </CardHeader>
                      <CardContent className="flex-grow flex flex-col pt-0">
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-6 text-balance">
                          {project.description}
                        </p>
                        {(project as any).technologies && Array.isArray((project as any).technologies) && (project as any).technologies.length > 0 && (
                          <div className="mb-6">
                            <p className="text-xs font-semibold text-foreground mb-2">Technologies:</p>
                            <div className="flex flex-wrap gap-2">
                              {(project as any).technologies.map((tech: string, i: number) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        <div className="mt-auto pt-4 border-t">
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-primary hover:underline group/link transition-smooth"
                          >
                            View Project <ExternalLink className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </LiftOnHover>
                </StaggerItem>
            ))}
            </StaggerContainer>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding scroll-mt-20">
        <div className="container-fluid">
          <FadeInOnScroll className="space-y-12 md:space-y-16">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Zap className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Skills</h2>
              </div>
              <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
            <StaggerContainer className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
              <StaggerItem>
                <LiftOnHover>
                  <Card className="border-2 hover:border-primary/50 transition-smooth h-full flex flex-col">
                    <CardHeader className="pb-4 border-b">
                      <CardTitle className="text-lg sm:text-xl font-semibold">Languages</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 flex-grow">
                      <div className="flex flex-wrap gap-2.5">
                        {skills.languages?.map((skill: string, index: number) => {
                          const Icon = getSkillIcon(skill);
                          return (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs sm:text-sm px-3 py-2 hover:bg-primary/10 hover:border-primary/50 transition-all cursor-default flex items-center gap-1.5 group/badge"
                            >
                              <span className="h-4 w-4 flex-shrink-0 flex items-center justify-center text-current">
                                <Icon />
                              </span>
                              <span className="leading-tight">{skill}</span>
                            </Badge>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </LiftOnHover>
              </StaggerItem>
              <StaggerItem>
                <LiftOnHover>
                  <Card className="border-2 hover:border-primary/50 transition-smooth h-full flex flex-col">
                    <CardHeader className="pb-4 border-b">
                      <CardTitle className="text-lg sm:text-xl font-semibold">Frontend</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 flex-grow">
                      <div className="flex flex-wrap gap-2.5">
                        {skills.frontend?.map((skill: string, index: number) => {
                          const Icon = getSkillIcon(skill);
                          return (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs sm:text-sm px-3 py-2 hover:bg-primary/10 hover:border-primary/50 transition-all cursor-default flex items-center gap-1.5 group/badge"
                            >
                              <span className="h-4 w-4 flex-shrink-0 flex items-center justify-center text-current">
                                <Icon />
                              </span>
                              <span className="leading-tight">{skill}</span>
                            </Badge>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </LiftOnHover>
              </StaggerItem>
              <StaggerItem>
                <LiftOnHover>
                  <Card className="border-2 hover:border-primary/50 transition-smooth h-full flex flex-col">
                    <CardHeader className="pb-4 border-b">
                      <CardTitle className="text-lg sm:text-xl font-semibold">Backend</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 flex-grow">
                      <div className="flex flex-wrap gap-2.5">
                        {skills.backend?.map((skill: string, index: number) => {
                          const Icon = getSkillIcon(skill);
                          return (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs sm:text-sm px-3 py-2 hover:bg-primary/10 hover:border-primary/50 transition-all cursor-default flex items-center gap-1.5 group/badge"
                            >
                              <span className="h-4 w-4 flex-shrink-0 flex items-center justify-center text-current">
                                <Icon />
                              </span>
                              <span className="leading-tight">{skill}</span>
                            </Badge>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </LiftOnHover>
              </StaggerItem>
              <StaggerItem>
                <LiftOnHover>
                  <Card className="border-2 hover:border-primary/50 transition-smooth h-full flex flex-col">
                    <CardHeader className="pb-4 border-b">
                      <CardTitle className="text-lg sm:text-xl font-semibold">ML/AI</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 flex-grow">
                      <div className="flex flex-wrap gap-2.5">
                        {skills.mlAi?.map((skill: string, index: number) => {
                          const Icon = getSkillIcon(skill);
                          return (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs sm:text-sm px-3 py-2 hover:bg-primary/10 hover:border-primary/50 transition-all cursor-default flex items-center gap-1.5 group/badge"
                            >
                              <span className="h-4 w-4 flex-shrink-0 flex items-center justify-center text-current">
                                <Icon />
                              </span>
                              <span className="leading-tight">{skill}</span>
                            </Badge>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </LiftOnHover>
              </StaggerItem>
              <StaggerItem>
                <LiftOnHover>
                  <Card className="border-2 hover:border-primary/50 transition-smooth h-full flex flex-col">
                    <CardHeader className="pb-4 border-b">
                      <CardTitle className="text-lg sm:text-xl font-semibold">Infrastructure</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 flex-grow">
                      <div className="flex flex-wrap gap-2.5">
                        {skills.infrastructure?.map((skill: string, index: number) => {
                          const Icon = getSkillIcon(skill);
                          return (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs sm:text-sm px-3 py-2 hover:bg-primary/10 hover:border-primary/50 transition-all cursor-default flex items-center gap-1.5 group/badge"
                            >
                              <span className="h-4 w-4 flex-shrink-0 flex items-center justify-center text-current">
                                <Icon />
                              </span>
                              <span className="leading-tight">{skill}</span>
                            </Badge>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </LiftOnHover>
              </StaggerItem>
              <StaggerItem>
                <LiftOnHover>
                  <Card className="border-2 hover:border-primary/50 transition-smooth h-full flex flex-col">
                    <CardHeader className="pb-4 border-b">
                      <CardTitle className="text-lg sm:text-xl font-semibold">Databases</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 flex-grow">
                      <div className="flex flex-wrap gap-2.5">
                        {skills.databases?.map((skill: string, index: number) => {
                          const Icon = getSkillIcon(skill);
                          return (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs sm:text-sm px-3 py-2 hover:bg-primary/10 hover:border-primary/50 transition-all cursor-default flex items-center gap-1.5 group/badge"
                            >
                              <span className="h-4 w-4 flex-shrink-0 flex items-center justify-center text-current">
                                <Icon />
                              </span>
                              <span className="leading-tight">{skill}</span>
                  </Badge>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </LiftOnHover>
              </StaggerItem>
            </StaggerContainer>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Featured Links Section */}
      {featuredLinks && featuredLinks.length > 0 && (
        <section id="featured" className="section-padding scroll-mt-20 bg-muted/20">
          <div className="container-fluid">
            <FadeInOnScroll className="space-y-12 md:space-y-16">
              <div className="text-center space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Featured</h2>
                <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
              <StaggerContainer className="grid gap-6 md:gap-8 md:grid-cols-3">
                {featuredLinks.map((link, index) => (
                  <StaggerItem key={index}>
                    <LiftOnHover>
                      <Card className="border-2 hover:border-primary/50 transition-smooth group h-full">
                        <CardContent className="pt-6 pb-6">
                          <Link
                            href={link.url}
                            target={link.url.startsWith("http") ? "_blank" : undefined}
                            rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="flex flex-col items-center text-center space-y-4"
                          >
                            {link.icon === "file" && <FileText className="h-10 w-10 sm:h-12 sm:w-12 text-primary group-hover:scale-110 transition-transform" />}
                            {link.icon === "book" && <BookOpen className="h-10 w-10 sm:h-12 sm:w-12 text-primary group-hover:scale-110 transition-transform" />}
                            {link.icon === "code" && <Code className="h-10 w-10 sm:h-12 sm:w-12 text-primary group-hover:scale-110 transition-transform" />}
                            <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">
                              {link.name}
                            </h3>
                            <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        </CardContent>
                      </Card>
                    </LiftOnHover>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeInOnScroll>
              </div>
        </section>
      )}

      {/* Metrics Section */}
      <section id="metrics" className="section-padding scroll-mt-20">
        <div className="container-fluid">
          <FadeInOnScroll className="space-y-12 md:space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Metrics & Analytics</h2>
              <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
            <StaggerContainer className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              <StaggerItem>
                <GitHubStats />
              </StaggerItem>
              <StaggerItem>
                <VisitorMetrics />
              </StaggerItem>
              <StaggerItem>
                <PerformanceMetrics />
              </StaggerItem>
            </StaggerContainer>
          </FadeInOnScroll>
              </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding scroll-mt-20 bg-muted/20">
        <div className="container-fluid">
          <FadeInOnScroll className="space-y-12 md:space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Get In Touch</h2>
              <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
            <div className="max-w-2xl mx-auto">
              <LiftOnHover>
                <Card className="border-2 hover:border-primary/50 transition-smooth">
                  <CardContent className="pt-8 pb-8 px-6 sm:px-8">
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-8 leading-relaxed text-balance">
                      I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat!
                    </p>
                    {personalInfo.availableRoles && personalInfo.availableRoles.length > 0 && (
                      <div className="mb-8">
                        <p className="text-sm font-semibold text-center mb-4 text-foreground">Open to roles:</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {personalInfo.availableRoles.map((role, index) => (
                            <Badge key={index} variant="secondary" className="text-xs px-3 py-1">
                              {role}
                  </Badge>
                ))}
              </div>
            </div>
                    )}
                    <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
                      <ScaleOnHover>
                        <Button variant="default" size="lg" asChild className="shadow-md hover:shadow-lg transition-smooth px-6 sm:px-8">
                          <Link href={`mailto:${personalInfo.email}`}>
                            <Mail className="mr-2 h-5 w-5" />
                            Email Me
                          </Link>
                        </Button>
                      </ScaleOnHover>
                      <ScaleOnHover>
                        <Button variant="outline" size="lg" asChild className="transition-smooth px-6 sm:px-8 border-2">
                          <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="mr-2 h-5 w-5" />
                            LinkedIn
                          </Link>
                        </Button>
                      </ScaleOnHover>
                      <ScaleOnHover>
                        <Button variant="outline" size="lg" asChild className="transition-smooth px-6 sm:px-8 border-2">
                          <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-5 w-5" />
                            GitHub
                          </Link>
                        </Button>
                      </ScaleOnHover>
                    </div>
                  </CardContent>
                </Card>
              </LiftOnHover>
          </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-16 md:mt-20">
        <div className="container-fluid py-8 md:py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground/60">
              Built with Next.js, TypeScript, and shadcn/ui
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

