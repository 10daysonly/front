import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, { params }: { params: any }) {
  const URL = process.env.NEXT_PUBLIC_API_URL;
  const gatheringId = params.gathringId;
  const Path = `/api/v1/gatherings/${gatheringId}/participants`;

  try {
    const requestBody = await request.json();

    const response = await fetch(`${URL + Path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody.settingValue),
    });

    console.log("==================================================");
    console.log("Response Status Code:", response.status);
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
