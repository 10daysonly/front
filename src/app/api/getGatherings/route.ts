import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const URL = process.env.NEXT_PUBLIC_API_URL;

  const requestURL = request.nextUrl;
  const Path = `/api/v1/gatherings/${requestURL.searchParams.get("gatheringId")}`;

  console.log(`${URL + Path}`);
  try {
    const response = await fetch(`${URL + Path}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from external API");
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Error fetching external API:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
