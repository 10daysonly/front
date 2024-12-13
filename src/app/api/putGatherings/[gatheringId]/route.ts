import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, { params }: { params: { gatheringId: string } }) {
  const URL = process.env.NEXT_PUBLIC_API_URL;
  const gatheringId = params.gatheringId;
  const Path = `/api/v1/gatherings/${gatheringId}`;

  try {
    const requestBody = await request.json();

    console.log("=============================================");
    console.log(gatheringId);
    console.log(requestBody);

    const response = await fetch(`${URL + Path}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
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
