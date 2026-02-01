import { NextResponse } from "next/server";

type Payload = {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  issue: string;
};

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Payload;

    if (!data?.name?.trim() || !data?.email?.trim() || !data?.issue?.trim()) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }

    console.log("[CONTACT_REQUEST]", {
      name: data.name,
      email: data.email,
      phone: data.phone ?? "",
      address: data.address ?? "",
      issue: data.issue
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
}
