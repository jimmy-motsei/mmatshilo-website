const API = process.env.STRAPI_API_URL;
const TOKEN = process.env.STRAPI_TOKEN;

export async function fetchStrapi(path: string, init: RequestInit = {}) {
  if (!API) throw new Error('STRAPI_API_URL not set');
  const res = await fetch(`${API}${path}`, {
    ...init,
    headers: { 'Authorization': `Bearer ${TOKEN}`, 'Content-Type': 'application/json', ...(init.headers || {}) },
    next: { revalidate: 60 }
  });
  if (!res.ok) throw new Error(`Strapi error: ${res.status}`);
  return res.json();
}
