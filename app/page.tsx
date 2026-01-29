import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Code,
  Zap,
  Download,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  MapPin,
  FileText,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { ScrollProgress } from "@/components/scroll-progress";
import { ScrollToTop } from "@/components/scroll-to-top";
import { StatCard } from "@/components/stat-card";
import { GitHubStats } from "@/components/github-stats";
import { VisitorMetrics } from "@/components/visitor-metrics";
import { ProjectCard } from "@/components/project-card";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { SkillCategoryCard } from "@/components/skill-category-card";
import { AnimatedBackground } from "@/components/animated-background";
import { TerminalTicker } from "@/components/terminal-ticker";
import {
  FadeInOnScroll,
  StaggerContainer,
  StaggerItem,
  ScaleOnHover,
  TextReveal,
  FadeIn,
} from "@/components/smooth-animations";
import {
  personalInfo,
  about,
  experience,
  education,
  projects,
  skills,
  stats,
  featuredLinks,
} from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      <ScrollToTop />

      {/* Hero Section - Split Layout */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated gradient background */}
        <AnimatedBackground />

        <div className="container-fluid relative z-10 py-20 md:py-32">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Content - 60% */}
            <div className="lg:col-span-3 space-y-8">
              <FadeIn delay={0.2}>
                <div className="space-y-6">
                  {/* Status badge */}
                  {personalInfo.status && (
                    <div className="inline-block">
                      <Badge
                        variant="default"
                        className="bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30 px-4 py-1.5 text-sm"
                      >
                        <span className="relative flex h-2 w-2 mr-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        {personalInfo.status}
                      </Badge>
                    </div>
                  )}

                  {/* Name */}
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] font-heading">
                    <TextReveal delay={0}>
                      <span className="gradient-text">
                        {personalInfo.name.split(" ")[0]}
                      </span>
                    </TextReveal>
                    <br />
                    <TextReveal delay={0.1}>
                      <span className="text-foreground">
                        {personalInfo.name.split(" ").slice(1).join(" ")}
                      </span>
                    </TextReveal>
                  </h1>

                  {/* Title */}
                  <div className="space-y-4">
                    <TextReveal delay={0.2}>
                      <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium">
                        {personalInfo.title}
                      </p>
                    </TextReveal>

                    {personalInfo.subtitle && (
                      <TextReveal delay={0.3}>
                        <p className="text-base sm:text-lg text-muted-foreground/70 font-light">
                          {personalInfo.subtitle}
                        </p>
                      </TextReveal>
                    )}

                    {/* Location */}
                    {personalInfo.location && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{personalInfo.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>

              {/* Tagline */}
              <FadeIn delay={0.4}>
                <p className="text-base sm:text-lg text-muted-foreground/60 max-w-xl leading-relaxed font-light">
                  Building AI-powered systems at scale • MS CS UMass '25 •
                  Seeking Full-Time Roles
                </p>
              </FadeIn>

              {/* CTA Buttons */}
              <FadeIn delay={0.5}>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <ScaleOnHover>
                    <Button
                      variant="default"
                      size="lg"
                      asChild
                      className="shadow-lg hover:shadow-glow transition-all px-6 sm:px-8 py-6 bg-gradient-to-r from-primary to-accent"
                    >
                      <Link
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-5 w-5" />
                        GitHub
                      </Link>
                    </Button>
                  </ScaleOnHover>
                  <ScaleOnHover>
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="transition-smooth px-6 sm:px-8 py-6 border-2 hover:border-primary/50"
                    >
                      <Link
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="mr-2 h-5 w-5" />
                        LinkedIn
                      </Link>
                    </Button>
                  </ScaleOnHover>
                  <ScaleOnHover>
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="transition-smooth px-6 sm:px-8 py-6 border-2 hover:border-primary/50"
                    >
                      <Link href={`mailto:${personalInfo.email}`}>
                        <Mail className="mr-2 h-5 w-5" />
                        Contact
                      </Link>
                    </Button>
                  </ScaleOnHover>
                  <ScaleOnHover>
                    <Button
                      variant="secondary"
                      size="lg"
                      asChild
                      className="transition-smooth px-6 sm:px-8 py-6"
                    >
                      <Link
                        href="/Satya_Prudhvi_Nikku_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        <Download className="mr-2 h-5 w-5" />
                        Resume
                      </Link>
                    </Button>
                  </ScaleOnHover>
                </div>
              </FadeIn>
            </div>

            {/* Visual Element - 40% */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center gap-8 py-8 lg:py-0 order-first lg:order-last">
              {/* Profile Picture */}
              <FadeIn delay={0.6}>
                <div className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px]">
                  {/* Decorative ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-spin-slow" 
                       style={{ animationDuration: '20s' }} />
                  
                  {/* Profile picture container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl hover:shadow-glow transition-all duration-300 hover:scale-105 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-full" />
                    <Image
                      src="/profile-picture.jpeg"
                      alt={personalInfo.name}
                      fill
                      className="object-cover rounded-full"
                      priority
                      sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, (max-width: 1024px) 280px, 280px"
                    />
                  </div>
                  
                  {/* Floating decoration dots */}
                  <div className="absolute -top-4 -right-4 w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <div className="absolute -bottom-4 -left-4 w-3 h-3 rounded-full bg-accent animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </FadeIn>

              {/* Terminal Widget */}
              <FadeIn delay={0.8}>
                <TerminalTicker />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="section-padding scroll-mt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30" />
        <div className="container-fluid relative z-10">
          <FadeInOnScroll className="space-y-12 md:space-y-16">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading gradient-text">
                  Achievements
                </h2>
              </div>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
              {stats[0] && (
                <StatCard
                  icon={<TrendingUp className="h-8 w-8" />}
                  value={stats[0].value}
                  label={stats[0].label}
                  description={stats[0].description}
                  variant="blue"
                />
              )}
              {stats[1] && (
                <StatCard
                  icon={<Users className="h-8 w-8" />}
                  value={stats[1].value}
                  label={stats[1].label}
                  description={stats[1].description}
                  variant="purple"
                />
              )}
              {stats[2] && (
                <StatCard
                  icon={<DollarSign className="h-8 w-8" />}
                  value={stats[2].value}
                  label={stats[2].label}
                  description={stats[2].description}
                  variant="default"
                />
              )}
              {stats[3] && (
                <StatCard
                  icon={<Activity className="h-8 w-8" />}
                  value={stats[3].value}
                  label={stats[3].label}
                  description={stats[3].description}
                  variant="dark"
                />
              )}
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding scroll-mt-20">
        <div className="container-fluid">
          <FadeInOnScroll className="space-y-12 md:space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading gradient-text">
                About
              </h2>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
            <div className="grid gap-8 md:gap-10 lg:grid-cols-3">
              <StaggerItem>
                <Card className="lg:col-span-2 border-2 glass-card hover-glow h-full flex flex-col transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl md:text-3xl font-semibold gradient-text">
                      Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
                      {about.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
              <div className="space-y-6 lg:space-y-8 flex flex-col lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-6">
                {about.whatDrivesMe && (
                  <StaggerItem>
                    <Card className="border-2 h-full glass-card hover-glow transition-all duration-300 hover:-translate-y-2 flex flex-col">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-xl md:text-2xl font-semibold">
                          What Drives Me
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow flex flex-col">
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-balance">
                          {about.whatDrivesMe}
                        </p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                )}
                {about.lookingFor && (
                  <StaggerItem>
                    <Card className="border-2 h-full glass-card hover-glow transition-all duration-300 hover:-translate-y-2 flex flex-col">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-xl md:text-2xl font-semibold">
                          What I&apos;m Looking For
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow flex flex-col">
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-balance">
                          {about.lookingFor}
                        </p>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                )}
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Experience Section - Timeline */}
      <section id="experience" className="section-padding scroll-mt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
        <div className="container-fluid relative z-10">
          <FadeInOnScroll className="space-y-12 md:space-y-16">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Briefcase className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading gradient-text">
                  Experience
                </h2>
              </div>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
            <ExperienceTimeline experiences={experience as any} />
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
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading gradient-text">
                  Education
                </h2>
              </div>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
            <StaggerContainer className="grid gap-6 md:gap-8 md:grid-cols-2">
              {education.map((edu, index) => (
                <StaggerItem key={index}>
                  <Card className="border-2 glass-card hover-glow transition-all duration-300 hover:-translate-y-2 h-full group">
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
                              <Badge
                                variant="outline"
                                className="text-xs bg-primary/10 border-primary/30"
                              >
                                GPA: {(edu as any).gpa}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <Badge
                          variant="secondary"
                          className="w-fit text-xs sm:text-sm px-3 sm:px-4 py-1.5 shrink-0 bg-primary/10 text-primary border-primary/20"
                        >
                          {edu.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 space-y-4">
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-foreground">
                          Coursework:{" "}
                        </span>
                        {edu.coursework}
                      </p>
                      {edu.highlights && edu.highlights.length > 0 && (
                        <div>
                          <p className="font-semibold text-foreground text-sm mb-3">
                            Highlights:
                          </p>
                          <ul className="list-none space-y-2">
                            {edu.highlights.map((highlight, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2.5 text-sm text-muted-foreground"
                              >
                                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0" />
                                <span className="leading-relaxed">
                                  {highlight}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding scroll-mt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
        <div className="container-fluid relative z-10">
          <FadeInOnScroll className="space-y-12 md:space-y-16">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Code className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading gradient-text">
                  Projects
                </h2>
              </div>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project as any} />
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Skills Section - Category Cards */}
      <section id="skills" className="section-padding scroll-mt-20">
        <div className="container-fluid">
          <FadeInOnScroll className="space-y-12 md:space-y-16">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Zap className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading gradient-text">
                  Skills
                </h2>
              </div>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              <SkillCategoryCard
                title="Languages"
                skills={skills.languages || []}
                icon="languages"
                index={0}
              />
              <SkillCategoryCard
                title="Frontend"
                skills={skills.frontend || []}
                icon="frontend"
                index={1}
              />
              <SkillCategoryCard
                title="Backend"
                skills={skills.backend || []}
                icon="backend"
                index={2}
              />
              <SkillCategoryCard
                title="ML/AI"
                skills={skills.mlAi || []}
                icon="mlAi"
                index={3}
              />
              <SkillCategoryCard
                title="Infrastructure"
                skills={skills.infrastructure || []}
                icon="infrastructure"
                index={4}
              />
              <SkillCategoryCard
                title="Databases"
                skills={skills.databases || []}
                icon="databases"
                index={5}
              />
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Featured Links Section */}
      {featuredLinks && featuredLinks.length > 0 && (
        <section id="featured" className="section-padding scroll-mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
          <div className="container-fluid relative z-10">
            <FadeInOnScroll className="space-y-12 md:space-y-16">
              <div className="text-center space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading gradient-text">
                  Featured
                </h2>
                <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
              </div>
              <StaggerContainer className="grid gap-6 md:gap-8 md:grid-cols-3">
                {featuredLinks.map((link, index) => (
                  <StaggerItem key={index}>
                    <Card className="border-2 glass-card hover-glow transition-all duration-300 hover:-translate-y-2 group h-full">
                      <CardContent className="pt-6 pb-6">
                        <Link
                          href={link.url}
                          target={link.url.startsWith("http") ? "_blank" : undefined}
                          rel={
                            link.url.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex flex-col items-center text-center space-y-4"
                        >
                          {link.icon === "file" && (
                            <FileText className="h-10 w-10 sm:h-12 sm:w-12 text-primary group-hover:scale-110 transition-transform" />
                          )}
                          {link.icon === "book" && (
                            <BookOpen className="h-10 w-10 sm:h-12 sm:w-12 text-primary group-hover:scale-110 transition-transform" />
                          )}
                          {link.icon === "code" && (
                            <Code className="h-10 w-10 sm:h-12 sm:w-12 text-primary group-hover:scale-110 transition-transform" />
                          )}
                          {link.icon === "github" && (
                            <Github className="h-10 w-10 sm:h-12 sm:w-12 text-primary group-hover:scale-110 transition-transform" />
                          )}
                          <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">
                            {link.name}
                          </h3>
                          <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </CardContent>
                    </Card>
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading gradient-text">
                Metrics & Analytics
              </h2>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
            <StaggerContainer className="grid gap-6 md:gap-8 md:grid-cols-2">
              <StaggerItem>
                <GitHubStats />
              </StaggerItem>
              <StaggerItem>
                <VisitorMetrics />
              </StaggerItem>
            </StaggerContainer>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding scroll-mt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
        <div className="container-fluid relative z-10">
          <FadeInOnScroll className="space-y-12 md:space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading gradient-text">
                Get In Touch
              </h2>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
            <div className="max-w-2xl mx-auto">
              <Card className="border-2 glass-card hover-glow transition-all duration-300">
                <CardContent className="pt-8 pb-8 px-6 sm:px-8">
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-8 leading-relaxed text-balance">
                    I&apos;m always open to discussing new opportunities,
                    interesting projects, or just having a chat!
                  </p>
                  {personalInfo.availableRoles &&
                    personalInfo.availableRoles.length > 0 && (
                      <div className="mb-8">
                        <p className="text-sm font-semibold text-center mb-4 text-foreground">
                          Open to roles:
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {personalInfo.availableRoles.map((role, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs px-3 py-1 bg-primary/10 text-primary border-primary/20"
                            >
                              {role}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
                    <ScaleOnHover>
                      <Button
                        variant="default"
                        size="lg"
                        asChild
                        className="shadow-lg hover:shadow-glow transition-all px-6 sm:px-8 bg-gradient-to-r from-primary to-accent"
                      >
                        <Link href={`mailto:${personalInfo.email}`}>
                          <Mail className="mr-2 h-5 w-5" />
                          Email Me
                        </Link>
                      </Button>
                    </ScaleOnHover>
                    <ScaleOnHover>
                      <Button
                        variant="outline"
                        size="lg"
                        asChild
                        className="transition-smooth px-6 sm:px-8 border-2 hover:border-primary/50"
                      >
                        <Link
                          href={personalInfo.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="mr-2 h-5 w-5" />
                          LinkedIn
                        </Link>
                      </Button>
                    </ScaleOnHover>
                    <ScaleOnHover>
                      <Button
                        variant="outline"
                        size="lg"
                        asChild
                        className="transition-smooth px-6 sm:px-8 border-2 hover:border-primary/50"
                      >
                        <Link
                          href={personalInfo.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-5 w-5" />
                          GitHub
                        </Link>
                      </Button>
                    </ScaleOnHover>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-16 md:mt-20">
        <div className="container-fluid py-8 md:py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              © 2025 {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground/60">
              Built with Next.js, TypeScript, and Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
