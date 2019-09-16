const Game = require("./game.js");

function GameView(game, ctx){
  this.game = game;
  this.ctx = ctx;
};

GameView.prototype.start = function() {
  setInterval(() => {
    this.game.step();
    this.game.draw(this.ctx);
    
  }, 20);
  this.bindKeyHandlers();
};


GameView.prototype.bindKeyHandlers = function() {
  key('up', () => { this.game.ship.power([0, -1])});
  key('down', () => { this.game.ship.power([0, 1])});
  key('left', () => { this.game.ship.power([-1, 0])});
  key('right', () => { this.game.ship.power([1, 0])});
  key('space', () => { this.game.ship.fireBullet(); })
};

module.exports = GameView;

//up [0,-1]
//down [0, 1]
//left [-1, 0]
//right [1, 0]