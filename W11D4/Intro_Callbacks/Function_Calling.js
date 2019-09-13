Function.prototype.myBind = function(context){
  return () => {this.apply(context)};
};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function () {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"


Function.prototype.myThrottle = function(interval) {
  let tooSoon = false;
  return () => {
    if ( !tooSoon ) {
      tooSoon = true;
      setTimeout(() => { tooSoon = false; }, interval);
      this();
    }
  }
};

class Neuron {
  fire() {
    console.log("Firing!");
  }
}

const neuron = new Neuron();

// neuron.fire = neuron.fire.myThrottle(500);

// const interval = setInterval(() => {
//   neuron.fire();
// }, 10);

Function.prototype.myDebounce = function(interval) {
  let timeout = 0;  

  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {this()}, interval);
  };
};

// interval 50s
    // call before 50s?? timer -> 50s
    // don't call, timer = 0 -> run function

class SearchBar {
  constructor() {
    this.query = "";

    this.type = this.type.bind(this);
    this.search = this.search.bind(this);
  }

  type(letter) {
    this.query += letter;
    this.search();
  }

  search() {
    console.log(`searching for ${this.query}`);
  }
}

const searchBar = new SearchBar();

const queryForHelloWorld = () => {
  searchBar.type("h");
  searchBar.type("e");
  searchBar.type("l");
  searchBar.type("l");
  searchBar.type("o");
  searchBar.type(" ");
  searchBar.type("w");
  searchBar.type("o");
  searchBar.type("r");
  searchBar.type("l");
  searchBar.type("d");
};

searchBar.search = searchBar.search.myDebounce(500);
queryForHelloWorld();