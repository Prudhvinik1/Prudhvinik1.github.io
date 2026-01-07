import { NextResponse } from "next/server";
import { client } from "@/lib/sanity/client";
import { projectsQuery } from "@/lib/sanity/queries";
import { projects as defaultProjects } from "@/lib/data";

export async function GET() {
  if (!client) {
    return NextResponse.json(defaultProjects);
  }
  try {
    const data = await client.fetch(projectsQuery);
    return NextResponse.json(data || defaultProjects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(defaultProjects);
  }
}


