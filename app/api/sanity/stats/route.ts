import { NextResponse } from "next/server";
import { client } from "@/lib/sanity/client";
import { statsQuery } from "@/lib/sanity/queries";

export async function GET() {
  try {
    const data = await client.fetch(statsQuery);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}


