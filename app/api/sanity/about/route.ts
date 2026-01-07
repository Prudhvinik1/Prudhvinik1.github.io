import { NextResponse } from "next/server";
import { client } from "@/lib/sanity/client";
import { aboutQuery } from "@/lib/sanity/queries";
import { about as defaultAbout } from "@/lib/data";

export async function GET() {
  if (!client) {
    return NextResponse.json(defaultAbout);
  }
  try {
    const data = await client.fetch(aboutQuery);
    return NextResponse.json(data || defaultAbout);
  } catch (error) {
    console.error("Error fetching about:", error);
    return NextResponse.json(defaultAbout);
  }
}


