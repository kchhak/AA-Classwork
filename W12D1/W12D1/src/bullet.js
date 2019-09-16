const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Ship = require("./ship.js");

const DEFAULTS = {
  RADIUS: 2,
  COLOR: 'orange'
};

function Bullet(options){
  options.color = DEFAULTS.COLOR;
  options.radius = DEFAULTS.RADIUS;
  // options.vel = options.game.ship.vel
  
  MovingObject.call(this, options)
};
Util.inherits(Bullet, MovingObject);

Bullet.prototype.isWrappable = function() {

  return false;
}

Bullet.prototype.collideWith = function (otherObject) {
  if (otherObject instanceof Bullet) {
  } else if (otherObject instanceof Ship){
    
  }else if (otherObject instanceof Asteroid){
    this.game.remove(otherObject);
  };
};


module.exports = Bullet;