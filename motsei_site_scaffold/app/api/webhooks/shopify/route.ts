import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // TODO: verify HMAC signature
  const body = await req.json().catch(()=>null);
  // Example: on order paid, enroll user in course via Strapi
  console.log('[Shopify webhook]', body?.id || 'no body');
  return NextResponse.json({ ok: true });
}
