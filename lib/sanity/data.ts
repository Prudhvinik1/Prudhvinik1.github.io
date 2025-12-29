import { client } from "./client";
import {
  personalInfoQuery,
  aboutQuery,
  experienceQuery,
  educationQuery,
  projectsQuery,
  skillsQuery,
  statsQuery,
} from "./queries";

// Revalidate data every 60 seconds (adjust as needed)
const REVALIDATE_SECONDS = 60;

// Helper to fetch data with fallback to static data
async function fetchWithFallback<T>(
  query: string,
  fallback: T
): Promise<T> {
  // Check if Sanity is configured
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  if (!projectId || projectId.trim() === "") {
    // Sanity not configured, return fallback immediately
    return fallback;
  }

  try {
    // Use next.revalidate to control caching behavior
    const data = await client.fetch(query, {}, {
      next: { revalidate: REVALIDATE_SECONDS }
    });
    // Handle empty arrays - if data is an empty array, use fallback
    if (Array.isArray(data) && data.length === 0) {
      return fallback;
    }
    // Handle null, undefined, or falsy values
    if (!data) {
      return fallback;
    }
    return data;
  } catch (error) {
    console.error("Error fetching from Sanity, using fallback:", error);
    return fallback;
  }
}

// Import static data for fallback
import {
  personalInfo as defaultPersonalInfo,
  about as defaultAbout,
  experience as defaultExperience,
  education as defaultEducation,
  projects as defaultProjects,
  skills as defaultSkills,
  stats as defaultStats,
} from "@/lib/data";

// Fetch functions for server components
export async function getPersonalInfo() {
  return fetchWithFallback(personalInfoQuery, defaultPersonalInfo);
}

export async function getAbout() {
  return fetchWithFallback(aboutQuery, defaultAbout);
}

export async function getExperience() {
  return fetchWithFallback(experienceQuery, defaultExperience);
}

export async function getEducation() {
  return fetchWithFallback(educationQuery, defaultEducation);
}

export async function getProjects() {
  return fetchWithFallback(projectsQuery, defaultProjects);
}

export async function getSkills() {
  const skillsData = await fetchWithFallback(skillsQuery, []);
  
  // Transform skills array to object format
  if (Array.isArray(skillsData) && skillsData.length > 0) {
    return skillsData.reduce((acc: any, skill: any) => {
      acc[skill.category] = skill.skills;
      return acc;
    }, {});
  }
  
  return defaultSkills;
}

export async function getStats() {
  const statsData = await fetchWithFallback(statsQuery, defaultStats);
  // Ensure we always return an array
  if (!Array.isArray(statsData)) {
    return defaultStats;
  }
  // If empty array, return default stats
  if (statsData.length === 0) {
    return defaultStats;
  }
  return statsData;
}

