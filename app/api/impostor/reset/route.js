// main/app/api/impostor/reset/route.js

let games = {}; // mismo objeto que en impostor/route.js

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const room = searchParams.get("room") || "default";

  delete games[room];

  return new Response("OK", { status: 200, headers: { "Content-Type": "text/plain" } });
}
