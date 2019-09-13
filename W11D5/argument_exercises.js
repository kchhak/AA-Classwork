function sum (){
    let sum = 0;

    for(let i = 0; i < arguments.length; i ++) {
        sum += arguments[i];
    }
    return sum;
};

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);

function sum2 (...args) {
    let sum = 0;
    
    for(let i = 0; i < args.length; i ++) {
        sum += args[i];
    }
    return sum;

}
// console.log(sum2(1, 2, 3, 4) === 10);
// console.log(sum2(1, 2, 3, 4, 5) === 15);

Function.prototype.myBind = function(ctx) {
  var bindArgs = [].slice.call(arguments, 1);
  var that = this;

  return function () {
    var callArgs = [].slice.call(arguments);
    return that.apply(ctx, bindArgs.concat(callArgs));
  };
};
function hello () { console.log(this)};
var obj = {name: 'Frida'};
var hi = hello.myBind(obj);
hi()


Function.prototype.myBind = function (ctx, ...bindArgs) {
    return (...callArgs) => {
        this.apply(ctx, bindArgs.concat(callArgs));
    };
}

class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true


function curriedSum(numArgs) {
  let nums = [];
  return function _curriedSum(num) {
    nums.push(num);

    if (nums.length === numArgs) {
      let result = 0;
      nums.forEach(number => {result += number;});

      return result;
    } else {
      return _curriedSum;
    }
  };
}

const sum1 = curriedSum(4);
console.log(sum1(5)(30)(20)(1)); // => 56

// Function.prototype.curry = function (numArgs) {
//     // debugger
//     let args = [];
//     let func = this;

//      function _curriedfunc(arg) {
//         args.push(arg);

//         if (args.length === numArgs) {
//             return func.apply(null, args);
//         } else {
//             return _curriedfunc;
//         }
//     };
//     return _curriedfunc;
// }

Function.prototype.curry = function (numArgs) {
  // debugger
  let args = [];
  let func = this;

  function _curriedfunc(arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return func(...args);
    } else {
      return _curriedfunc;
    }
  };
  return _curriedfunc;
}


function test_function (...arg){
  for (let i = 0; i < arg.length; i++) {
    console.log(arg[i]);
  }
  return 'hello';
} 
console.log(test_function(1));

let test_curry = test_function.curry(4);
console.log(test_curry(1)(2)(3)(4));