function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function(){
  return `${this.owner} loves ${this.name}`;
};

let cat1 = new Cat('Naranja', 'Raymond');
let cat2 = new Cat('Chester', 'Kaneka');

console.log(cat1.cuteStatement());
console.log(cat2.cuteStatement());

Cat.prototype.cuteStatement = function() {
  return `Everyone loves ${this.name}!`;
};

console.log(cat1.cuteStatement());
console.log(cat2.cuteStatement());

Cat.prototype.meow = function() {
  return 'meow';
};

cat1.meow = function(){
  return 'mraow';
};

console.log(cat1.meow());
console.log(cat2.meow());