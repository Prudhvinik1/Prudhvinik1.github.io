"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, Github, Linkedin, Mail, Download, Settings, Bell, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PersonalInfo {
  name: string;
  title: string;
  status?: string;
  github: string;
  linkedin: string;
  email: string;
}

interface DashboardNavProps {
  personalInfo: PersonalInfo;
}

const navItems = [
  { label: "Dashboard", href: "#" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function DashboardNav({ personalInfo }: DashboardNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border/50 shadow-sm"
          : "bg-card/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex items-center gap-4">
            <Link href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-105 transition-transform">
                {personalInfo.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="hidden sm:block">
                <p className="font-semibold text-foreground">{personalInfo.name}</p>
                <p className="text-xs text-muted-foreground">{personalInfo.title}</p>
              </div>
            </Link>
          </div>

          {/* Center Navigation - Desktop */}
          <div className="hidden lg:flex items-center bg-muted/50 rounded-full p-1">
            {navItems.map((item, index) => (
              <Button
                key={item.href}
                variant={index === 0 ? "default" : "ghost"}
                size="sm"
                className={`rounded-full text-sm ${index === 0 ? 'shadow-sm' : ''}`}
                asChild
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {personalInfo.status && (
              <Badge variant="default" className="hidden sm:flex bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
                {personalInfo.status}
              </Badge>
            )}

            <div className="hidden md:flex items-center gap-1">
              <Button variant="ghost" size="icon" asChild className="rounded-full">
                <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full">
                <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full">
                <Link href={`mailto:${personalInfo.email}`}>
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="h-6 w-px bg-border mx-1 hidden md:block" />

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2 border-t border-border/50 pt-4 mt-2">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className="w-full justify-start rounded-xl"
                asChild
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
            <div className="flex items-center gap-2 pt-4 border-t border-border/50 mt-2">
              <Button variant="outline" size="sm" asChild className="flex-1">
                <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild className="flex-1">
                <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
