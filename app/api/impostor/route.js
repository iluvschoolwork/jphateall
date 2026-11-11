// main/app/api/impostor/route.js

let games = {}; // memoria temporal (reinicia en cold starts)

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const word = searchParams.get("word");
  const room = searchParams.get("room") || "default";
  const playerId = searchParams.get("playerId");

  if (!word) return new Response("Falta 'word'", { status: 400 });
  if (!playerId) return new Response("Falta 'playerId'", { status: 400 });

  if (!games[room]) {
    games[room] = { word, players: [], impostor: null };
  }

  const game = games[room];

  if (!game.players.includes(playerId)) {
    game.players.push(playerId);
  }

  if (!game.impostor) {
    const randomIndex = Math.floor(Math.random() * game.players.length);
    game.impostor = game.players[randomIndex];
  }

  const result = playerId === game.impostor ? "Impostor" : game.word;

  return new Response(result, { status: 200, headers: { "Content-Type": "text/plain" } });
}
