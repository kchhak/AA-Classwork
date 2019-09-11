Array.prototype.uniq = function() {
  let uniq = [];

  this.forEach(function (el) {
    if (!uniq.includes(el)) {
      uniq.push(el);
    }
  });

  return uniq;
}

Array.prototype.twoSum = function() {
  let pairs = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        pairs.push([i, j]);
      }
    }
  }

  return pairs;
}

Array.prototype.transpose = function() {
  let transposed = new Array(this[0].length);
  
  for (let n = 0; n < transposed.length; n++) {
    transposed[n] = [];
  }

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[0].length; j++) {
      transposed[j].push(this[i][j]);
    }
  }

  return transposed;
}