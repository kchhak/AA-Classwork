const Game = require("./game.js");
const GameView = require("./game_view.js");

window.Game = Game;

console.log("Webpack is working!")


document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
  const game = new Game();
  const gameV = new GameView(game, ctx);
  gameV.start();
});  

