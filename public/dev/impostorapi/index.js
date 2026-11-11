import express from "express";
import cookieParser from "cookie-parser";
import crypto from "crypto";

const app = express();
app.use(cookieParser());

const games = {};
app.get("/dev/impostorapi/reset", (req, res) => {
  const room = req.query.room || "default";
  delete games[room];
  res.set("Content-Type", "text/plain");
  res.send("OK");
});


app.get("/dev/impostorapi", (req, res) => {

  const word = req.query.word;
  const room = req.query.room || "default";

  if (!word) {
    res.status(400).send("missing_word");
    return;
  }

  let playerId = req.cookies.playerId;
  if (!playerId) {
    playerId = crypto.randomUUID();
    res.cookie("playerId", playerId);
  }

  if (!games[room]) {
    games[room] = { word, players: [], impostor: null };
  }

  const game = games[room];

  if (!game.players.includes(playerId)) {
    game.players.push(playerId);
  }

  if (!game.impostor) {
    game.impostor =
      game.players[Math.floor(Math.random() * game.players.length)];
  }

  res.set("Content-Type", "text/plain");
  res.send(playerId === game.impostor ? "Impostor" : game.word);
});

app.listen(3000, () => {
  console.log("API lista en http://localhost:3000");
});
