import { NextResponse } from "next/server";

export async function GET() {
  const URL = process.env.API_URL;
  const Path = "test";

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
