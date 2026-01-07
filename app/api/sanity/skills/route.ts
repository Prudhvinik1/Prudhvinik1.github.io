import { NextResponse } from "next/server";
import { client } from "@/lib/sanity/client";
import { skillsQuery } from "@/lib/sanity/queries";
import { skills as defaultSkills } from "@/lib/data";

export async function GET() {
  if (!client) {
    return NextResponse.json(defaultSkills);
  }
  try {
    const data = await client.fetch(skillsQuery);
    if (!data || data.length === 0) {
      return NextResponse.json(defaultSkills);
    }
    // Transform skills array into object by category
    const skillsByCategory = data.reduce((acc: any, skill: any) => {
      acc[skill.category] = skill.skills;
      return acc;
    }, {});
    return NextResponse.json(skillsByCategory);
  } catch (error) {
    console.error("Error fetching skills:", error);
    return NextResponse.json(defaultSkills);
  }
}


