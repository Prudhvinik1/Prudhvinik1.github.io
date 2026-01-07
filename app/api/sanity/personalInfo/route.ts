import { NextResponse } from "next/server";
import { client } from "@/lib/sanity/client";
import { personalInfoQuery } from "@/lib/sanity/queries";
import { personalInfo as defaultPersonalInfo } from "@/lib/data";

export async function GET() {
  if (!client) {
    return NextResponse.json(defaultPersonalInfo);
  }
  try {
    const data = await client.fetch(personalInfoQuery);
    return NextResponse.json(data || defaultPersonalInfo);
  } catch (error) {
    console.error("Error fetching personal info:", error);
    return NextResponse.json(defaultPersonalInfo);
  }
}


