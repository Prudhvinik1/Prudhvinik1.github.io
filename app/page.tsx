import Link from "next/link";
import { Github, Linkedin, Mail, ExternalLink, Briefcase, GraduationCap, Code, Download, MapPin, FileText, BookOpen, Calendar, Clock, TrendingUp, Users, DollarSign, Zap, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DashboardNav } from "@/components/dashboard-nav";
import { ProfileCard } from "@/components/profile-card";
import { ProgressCard } from "@/components/progress-card";
import { TimeTracker } from "@/components/time-tracker";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { SkillsProgress } from "@/components/skills-progress";
import { ProjectShowcase } from "@/components/project-showcase";
import { OnboardingTasks } from "@/components/onboarding-tasks";
import { ScrollToTop } from "@/components/scroll-to-top";
import {
  FadeInOnScroll,
  StaggerContainer,
  StaggerItem,
  LiftOnHover,
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

// Revalidate the page every 60 seconds to pick up CMS changes
export const revalidate = 60;

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

  const stats = statsData;

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav personalInfo={personalInfo} />
      <ScrollToTop />

      {/* Main Dashboard Content */}
      <main className="pt-20 pb-8 px-4 md:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">

          {/* Welcome Header */}
          <FadeIn delay={0.1}>
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Welcome, <span className="text-primary">{personalInfo.name.split(" ")[0]}</span>
              </h1>
              <p className="text-muted-foreground mt-2 text-lg">{personalInfo.title} | {personalInfo.subtitle}</p>
            </div>
          </FadeIn>

          {/* Quick Stats Row */}
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-card rounded-2xl p-4 shadow-sm border border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</span>
                      </div>
                    </div>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      index === 0 ? 'bg-primary/10 text-primary' :
                      index === 1 ? 'bg-blue-500/10 text-blue-500' :
                      index === 2 ? 'bg-emerald-500/10 text-emerald-500' :
                      'bg-orange-500/10 text-orange-500'
                    }`}>
                      {index === 0 && <TrendingUp className="w-5 h-5" />}
                      {index === 1 && <Users className="w-5 h-5" />}
                      {index === 2 && <DollarSign className="w-5 h-5" />}
                      {index === 3 && <Zap className="w-5 h-5" />}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{stat.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* Left Column - Profile & Progress */}
            <div className="lg:col-span-4 space-y-6">
              {/* Profile Card */}
              <FadeInOnScroll>
                <ProfileCard personalInfo={personalInfo} about={about} />
              </FadeInOnScroll>

              {/* Skills Progress */}
              <FadeInOnScroll>
                <SkillsProgress skills={skills} />
              </FadeInOnScroll>

              {/* Featured Links */}
              <FadeInOnScroll>
                <Card className="shadow-sm border-border/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <ExternalLink className="w-5 h-5 text-primary" />
                      Quick Links
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {featuredLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        target={link.url.startsWith("http") ? "_blank" : undefined}
                        rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          {link.icon === "file" && <FileText className="w-5 h-5 text-primary" />}
                          {link.icon === "book" && <BookOpen className="w-5 h-5 text-primary" />}
                          {link.icon === "code" && <Code className="w-5 h-5 text-primary" />}
                        </div>
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">{link.name}</span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              </FadeInOnScroll>
            </div>

            {/* Center Column - Main Content */}
            <div className="lg:col-span-5 space-y-6">
              {/* Progress Overview */}
              <FadeInOnScroll>
                <ProgressCard experience={experience} />
              </FadeInOnScroll>

              {/* Experience Timeline */}
              <FadeInOnScroll>
                <ExperienceTimeline experience={experience} />
              </FadeInOnScroll>

              {/* Education */}
              <FadeInOnScroll>
                <Card className="shadow-sm border-border/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {education.map((edu, index) => (
                      <div key={index} className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground">{edu.institution}</h4>
                            <p className="text-sm text-muted-foreground">{edu.degree}</p>
                            <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                              <MapPin className="w-3 h-3" />
                              <span>{(edu as any).location}</span>
                              {(edu as any).gpa && (
                                <>
                                  <span className="mx-1">•</span>
                                  <Badge variant="secondary" className="text-xs px-2 py-0">GPA: {(edu as any).gpa}</Badge>
                                </>
                              )}
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs whitespace-nowrap">{edu.period}</Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </FadeInOnScroll>
            </div>

            {/* Right Column - Projects & Tasks */}
            <div className="lg:col-span-3 space-y-6">
              {/* Time Tracker Style Card */}
              <FadeInOnScroll>
                <TimeTracker stats={stats} />
              </FadeInOnScroll>

              {/* Onboarding/Task Progress */}
              <FadeInOnScroll>
                <OnboardingTasks personalInfo={personalInfo} />
              </FadeInOnScroll>

              {/* Projects Showcase */}
              <FadeInOnScroll>
                <ProjectShowcase projects={projects} />
              </FadeInOnScroll>
            </div>
          </div>

          {/* Contact Section */}
          <FadeInOnScroll>
            <Card className="mt-8 shadow-sm border-border/50 overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Let&apos;s Connect!</h3>
                    <p className="text-muted-foreground">Open to discussing new opportunities and collaborations</p>
                    {personalInfo.availableRoles && personalInfo.availableRoles.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {personalInfo.availableRoles.slice(0, 3).map((role, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">{role}</Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="default" size="lg" asChild className="shadow-md">
                      <Link href={`mailto:${personalInfo.email}`}>
                        <Mail className="mr-2 h-5 w-5" />
                        Email Me
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-5 w-5" />
                        LinkedIn
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-5 w-5" />
                        GitHub
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </FadeInOnScroll>

          {/* Footer */}
          <footer className="mt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & Tailwind CSS</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
