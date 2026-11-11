// pages/api/impostor.js

let games = {}; // memoria temporal (reinicia si Vercel cold start)

export default function handler(req, res) {
  const { word, room = "default", playerId } = req.query;

  if (!word) {
    res.status(400).send("Falta 'word'");
    return;
  }

  if (!playerId) {
    res.status(400).send("Falta 'playerId'");
    return;
  }

  if (!games[room]) {
    games[room] = { word, players: [], impostor: null };
  }

  const game = games[room];

  // registrar jugador
  if (!game.players.includes(playerId)) {
    game.players.push(playerId);
  }

  // elegir impostor
  if (!game.impostor) {
    const randomIndex = Math.floor(Math.random() * game.players.length);
    game.impostor = game.players[randomIndex];
  }

  const result = playerId === game.impostor ? "Impostor" : game.word;

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(result);
}
