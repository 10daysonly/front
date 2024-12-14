import { NextRequest, NextResponse } from "next/server";

export async function POST(request: any, { params }: { params: { gatheringId: string } }) {
  const gatheringId = params.gatheringId;

  const URL = process.env.NEXT_PUBLIC_API_URL;
  // const Path = "/api/v1/gatherings";
  const Path = `/api/v1/gatherings/${gatheringId}/games`;

  console.log(`${URL + Path}`);
  try {
    const requestBody = await request.json();
    console.log("=====================================================");
    console.log();

    const response = await fetch(`${URL + Path}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${requestBody.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: requestBody.type }),
    });
    console.log("=====================================================");
    console.log(response);
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
