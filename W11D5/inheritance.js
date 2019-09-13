// Function.prototype.inherits = function(ParentClass){
//   function Surrogate() {}
//   Surrogate.prototype = ParentClass.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };

Function.prototype.inherits = function(ParentClass) {
    this.prototype = Object.create(ParentClass.prototype);
    this.prototype.constructor = this;
};

function MovingObject() { }
MovingObject.prototype.move = function(){
  console.log("I'm moving!");
}

function Ship() { }
Ship.inherits(MovingObject);
Ship.prototype.shoot = function(times){
  for(let i = 0; i < times; i++){
    console.log("Pew");
  }
};

function Asteroid() { }
Asteroid.inherits(MovingObject);
Asteroid.prototype.drop = function (times) {
  for (let i = 0; i <= times; i++) {
    console.log("Bang");
  }
};

let mover = new MovingObject();
let ship1 = new Ship();
let ast1 = new Asteroid();

