function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function(){
  return `${this.owner} loves ${this.name}`;
}

let cat1 = new Cat('Charlie', 'Chuck');
let cat2 = new Cat('Bob', 'Robert');

console.log(cat1.cuteStatement());
console.log(cat2.cuteStatement());

Cat.prototype.cuteStatement = function(){
  return `Everyone loves ${this.name}!`;
}

console.log(cat1.cuteStatement());
console.log(cat2.cuteStatement());

Cat.prototype.meow = function(){
  return `${this.name} says meow`;
}

console.log(cat1.meow());

cat1.meow = function(){
  return `${cat1.name} says miaou`
}

console.log(cat1.meow());
console.log(cat2.meow());