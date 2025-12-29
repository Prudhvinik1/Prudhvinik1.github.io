import { NextResponse } from "next/server";
import { client } from "@/lib/sanity/client";
import { educationQuery } from "@/lib/sanity/queries";

export async function GET() {
  try {
    const data = await client.fetch(educationQuery);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching education:", error);
    return NextResponse.json(
      { error: "Failed to fetch education" },
      { status: 500 }
    );
  }
}


