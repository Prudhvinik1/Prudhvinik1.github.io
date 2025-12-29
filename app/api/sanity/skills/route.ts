import { NextResponse } from "next/server";
import { client } from "@/lib/sanity/client";
import { skillsQuery } from "@/lib/sanity/queries";

export async function GET() {
  try {
    const data = await client.fetch(skillsQuery);
    // Transform skills array into object by category
    const skillsByCategory = data.reduce((acc: any, skill: any) => {
      acc[skill.category] = skill.skills;
      return acc;
    }, {});
    return NextResponse.json(skillsByCategory);
  } catch (error) {
    console.error("Error fetching skills:", error);
    return NextResponse.json(
      { error: "Failed to fetch skills" },
      { status: 500 }
    );
  }
}


