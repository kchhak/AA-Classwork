const Util = require("./util.js");
const MovingObject = require("./moving_object.js")
const Ship = require("./ship.js");
const Bullet = require("./bullet.js")

const DEFAULTS = {
  COLOR: 'red',
  RADIUS: 10
};

function Asteroid(options) {
  options.color = DEFAULTS.COLOR;
  options.radius = DEFAULTS.RADIUS;
  options.vel = Util.randomVec(5);
  MovingObject.call(this,options)
}
Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function(otherObject) {
  if (otherObject instanceof Ship){
    otherObject.relocate();
  }else if ( otherObject instanceof Bullet) {
    this.game.remove(this);
    this.game.remove(otherObject);  
  }
}


module.exports = Asteroid;

//new Asteroid({ pos: [30, 30] });