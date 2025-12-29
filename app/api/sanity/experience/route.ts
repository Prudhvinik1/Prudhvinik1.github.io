import { NextResponse } from "next/server";
import { client } from "@/lib/sanity/client";
import { experienceQuery } from "@/lib/sanity/queries";

export async function GET() {
  try {
    const data = await client.fetch(experienceQuery);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching experience:", error);
    return NextResponse.json(
      { error: "Failed to fetch experience" },
      { status: 500 }
    );
  }
}


