import { NextResponse } from "next/server";
import { client } from "@/lib/sanity/client";
import { aboutQuery } from "@/lib/sanity/queries";

export async function GET() {
  try {
    const data = await client.fetch(aboutQuery);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching about:", error);
    return NextResponse.json(
      { error: "Failed to fetch about" },
      { status: 500 }
    );
  }
}


