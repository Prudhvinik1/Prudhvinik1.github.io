import { NextResponse } from "next/server";
import { client } from "@/lib/sanity/client";
import { projectsQuery } from "@/lib/sanity/queries";

export async function GET() {
  try {
    const data = await client.fetch(projectsQuery);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}


