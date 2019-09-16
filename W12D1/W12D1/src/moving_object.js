const Game = require("./game.js")

function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game
 
};

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = this.color;
  ctx.fill();

};

MovingObject.prototype.isWrappable = function () {

  return true;
}

MovingObject.prototype.move = function(){
  this.pos[0] = this.pos[0] + this.vel[0];
  this.pos[1] = this.pos[1] + this.vel[1];

  if (this.game.isOutOfBounds(this.pos)){
    if (this.isWrappable()){
      
      this.pos = this.game.wrap(this.pos);
    } else {
      this.game.remove(this);
    }
  }
};


MovingObject.prototype.isCollidedWith = function(otherObject){
  let sum = this.radius + otherObject.radius
  const dist = Math.sqrt((this.pos[0] - otherObject.pos[0]) ** 2 + (this.pos[1] - otherObject.pos[1]) **2 )
  return dist < sum;
};

MovingObject.prototype.collideWith = function(otherObject){
  // this.game.remove(otherObject);
  // this.game.remove(this);
}


module.exports = MovingObject;

