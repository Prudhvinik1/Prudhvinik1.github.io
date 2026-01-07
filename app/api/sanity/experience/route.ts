import { NextResponse } from "next/server";
import { client } from "@/lib/sanity/client";
import { experienceQuery } from "@/lib/sanity/queries";
import { experience as defaultExperience } from "@/lib/data";

export async function GET() {
  if (!client) {
    return NextResponse.json(defaultExperience);
  }
  try {
    const data = await client.fetch(experienceQuery);
    return NextResponse.json(data || defaultExperience);
  } catch (error) {
    console.error("Error fetching experience:", error);
    return NextResponse.json(defaultExperience);
  }
}


