import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email, courseId } = await req.json();
  // TODO: call Strapi to enroll a user
  return NextResponse.json({ ok: true, email, courseId });
}
