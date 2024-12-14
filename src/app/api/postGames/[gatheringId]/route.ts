import { NextRequest, NextResponse } from "next/server";

export async function POST(request: any, { params }: { params: { gatheringId: string } }) {
  const gatheringId = params.gatheringId;

  const URL = process.env.NEXT_PUBLIC_API_URL;
  // const Path = "/api/v1/gatherings";
  const Path = `/api/v1/gatherings/${gatheringId}/games`;

  console.log(`${URL + Path}`);
  try {
    console.log("===========================================");
    // console.log(request.json());
    const requestBody = await request.json();
    console.log(requestBody);

    const response = await fetch(`${URL + Path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
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
