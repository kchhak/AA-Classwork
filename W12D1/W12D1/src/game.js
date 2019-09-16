const Asteroid = require("./asteroid.js");
const Ship = require("./ship.js");
const Bullet = require("./bullet.js")
const DEFAULTS = {
  DIM_X: 500,
  DIM_Y: 500,
  NUM_ASTEROIDS: 4
};

function Game(options) {
  this.dim_x = DEFAULTS.DIM_X;
  this.dim_y = DEFAULTS.DIM_Y;
  this.num_rocks = DEFAULTS.NUM_ASTEROIDS;
  this.asteroids = [];
  this.addAsteroids();
  this.ship = new Ship({game: this, pos: this.randomPosition()});
  this.pew = []

};

Game.prototype.allObjects = function() {
  return this.asteroids.concat(this.ship, this.pew);
}

Game.prototype.addBullet = function(bullet) {
  this.pew.push(bullet)
};


Game.prototype.addAsteroids = function () {
  for (i = 0; i < this.num_rocks; i++) {
    this.asteroids.push(new Asteroid({pos: this.randomPosition(), game: this}));
  }
};

Game.prototype.randomPosition = function () {
  return [this.dim_x * Math.random(), this.dim_y * Math.random()];
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, this.dim_x, this.dim_y);
  this.allObjects().forEach(el =>{
    el.draw(ctx);
  });
};

Game.prototype.moveObjects = function() {
  this.allObjects().forEach(el =>{
    el.move();
  });
};

Game.prototype.wrap = function(pos){
  if (pos[0] > this.dim_x){
    pos[0] = pos[0] % this.dim_x;
  } else if (pos[0] < 0){
    pos[0] = this.dim_x - (pos[0] % this.dim_x);
  }

  if (pos[1] > this.dim_y) {
    pos[1] = pos[1] % this.dim_y;
  } else if (pos[1] < 0) {
    pos[1] = this.dim_y - (pos[1] % this.dim_y);
  }

  return pos;
};

Game.prototype.checkCollisions = function () {
  this.allObjects().forEach(element => {
    let i = this.allObjects().indexOf(element) + 1;
    for (i; i < this.allObjects().length; i++){
      if (element.isCollidedWith(this.allObjects()[i])) {
        //alert("COLLISION");
        element.collideWith(this.allObjects()[i]);
      }
    }
  });
}

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.remove = function(object){
  if (object instanceof Bullet) {
    this.pew.splice(this.pew.indexOf(object), 1);
  } else if (object instanceof Asteroid) {
    this.asteroids.splice(this.asteroids.indexOf(object), 1);
  }
};

Game.prototype.isOutOfBounds = function(pos){
  if (pos[0] < 0 || pos[0] > 500 || pos[1] < 0 || pos[1] > 500){
    return true;
  } else {
    return false;
  }
};

module.exports = Game;
