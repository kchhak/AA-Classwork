const Util = require("./util.js");
const MovingObject = require("./moving_object.js")
const Bullet = require("./bullet.js")

const DEFAULTS = {
  RADIUS: 15,
  COLOR: 'blue'
};

function Ship(options) {
  options.color = DEFAULTS.COLOR;
  options.radius = DEFAULTS.RADIUS;
  options.vel = [0,0];

  MovingObject.call(this, options);
};

Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function(){
  this.pos = this.game.randomPosition();
  this.vel = [0, 0];
};

Ship.prototype.power = function(impulse) {
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
};

Ship.prototype.fireBullet = function(){
  let shot = new Bullet({ pos: [...this.pos], vel: [this.vel[0] * 2.5, this.vel[1] * 2.5], game: this.game});
  this.game.addBullet(shot);
}
module.exports = Ship;