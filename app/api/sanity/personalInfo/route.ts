import { NextResponse } from "next/server";
import { client } from "@/lib/sanity/client";
import { personalInfoQuery } from "@/lib/sanity/queries";

export async function GET() {
  try {
    const data = await client.fetch(personalInfoQuery);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching personal info:", error);
    return NextResponse.json(
      { error: "Failed to fetch personal info" },
      { status: 500 }
    );
  }
}

