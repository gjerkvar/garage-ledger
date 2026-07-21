import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json(
		{ error: "Vehicle lookup endpoint is not implemented yet." },
		{ status: 501 }
	);
}
