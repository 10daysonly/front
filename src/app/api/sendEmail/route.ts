import { NextResponse } from "next/server";

export async function POST(request: any) {
  const URL = process.env.SECRET_API_KEY;
  const Path = "test";

  try {
    const response = await fetch(`${URL + Path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error("Failed to send data to external API");
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Error posting data to external API:", error);
    return NextResponse.json({ error: "Failed to post data" }, { status: 500 });
  }
}
