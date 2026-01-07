import { NextResponse } from "next/server";
import { client } from "@/lib/sanity/client";
import { educationQuery } from "@/lib/sanity/queries";
import { education as defaultEducation } from "@/lib/data";

export async function GET() {
  if (!client) {
    return NextResponse.json(defaultEducation);
  }
  try {
    const data = await client.fetch(educationQuery);
    return NextResponse.json(data || defaultEducation);
  } catch (error) {
    console.error("Error fetching education:", error);
    return NextResponse.json(defaultEducation);
  }
}


