Array.prototype.myEach = function(cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

Array.prototype.myMap = function(cb) {
  let mapped = [];

  this.myEach(function(el) {
    mapped.push(cb(el));
  });

  return mapped;
};

Array.prototype.myReduce = function(cb, initialValue) {
  let copy = this;

  if (!initialValue) {
    initialValue = this[0];
    copy = this.slice(1);
  }

  let acc = initialValue;

  copy.myEach(function(el){
    acc = cb(acc, el)
  });

  return acc;
};
