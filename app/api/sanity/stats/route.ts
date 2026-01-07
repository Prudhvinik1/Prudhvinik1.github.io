import { NextResponse } from "next/server";
import { client } from "@/lib/sanity/client";
import { statsQuery } from "@/lib/sanity/queries";
import { stats as defaultStats } from "@/lib/data";

export async function GET() {
  if (!client) {
    return NextResponse.json(defaultStats);
  }
  try {
    const data = await client.fetch(statsQuery);
    return NextResponse.json(data || defaultStats);
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(defaultStats);
  }
}


