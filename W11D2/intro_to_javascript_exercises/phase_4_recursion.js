function range(start, end) {
  if (start === end) {
    return [end];
  }

  return [start].concat(range(start + 1, end));
}

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  return arr[0] + sumRec(arr.slice(1));
}

function exponent1(base, exp) {
  if (exp === 0) {
    return 1;
  }

  if (base < 0) {
    if (exp % 2 === 0) {
      return -base * exponent1(-base, exp - 1);
    }
    else{
      return base * exponent1(-base, exp - 1);
    }
  }
  else {
    return base * exponent1(base, exp - 1);
  }
}

function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  }

  if (exp === 1) {
    return base;
  }

  if (exp % 2 === 0) {
    let expNext = exponent2(base, exp / 2);
    return expNext * expNext;
  }
  else {
    let expNextOdd = exponent2(base, (exp - 1) / 2);
    return base * expNextOdd * expNextOdd;
  }
}
//1 1 2 3 5...

function fibonacci(n) {
  if (n < 3) {
    return [1, 1].slice(0, n)
  }

  let nums = fibonacci(n - 1);
  nums.push(nums[nums.length - 1] + nums[nums.length - 2]);

  return nums;
}

function deepDup(arr) {
  if (!(arr instanceof Array)) {
    return arr;
  }

  let copy = [];
  arr.forEach(function(el) { copy.push(deepDup(el)); })

  return copy;
}

function bsearch(arr, target) {
  let halfLength = Math.floor(arr.length/2);

  if ((arr.length === 1 && arr[0] !== target) || arr.length === 0){
    return -1;
  }

  let left = arr.slice(0, halfLength);
  let right = arr.slice(halfLength);

  if (arr[halfLength] === target) {
    return halfLength;
  }
  else if (arr[halfLength] > target) {
    return bsearch(left, target);
  }
  else {
    let rightSearch = bsearch(right, target);
    if (rightSearch !== -1){
      return halfLength + rightSearch;
    }
    else {
      return -1;
    }
  }
}

function mergeSort(arr) {
  let halfLength = Math.floor(arr.length/2);

  if (arr.length <= 1) {
    return arr;
  }

  let left = mergeSort(arr.slice(0, halfLength));
  let right = mergeSort(arr.slice(halfLength));

  function merge(left, right) {
    let merged = [];
    
    while ((left.length > 0) && (right.length > 0)) {
      if (left[0] < right[0]) {
        merged.push(left.shift());
      } else {
        merged.push(right.shift());
      }
    }

    return merged.concat(left).concat(right);
  }

  return merge(left, right);
}

function subsets(arr) {
  if (arr.length === 0) {
    return [[]];
  }
  const first = arr[0];
  const nextSet = subsets(arr.slice(1));

  let combo = nextSet.map(el => [first].concat(el));
  return nextSet.concat(combo);
}

// [] => [[]]
// [1] => [[], [1]]
//  = subSets([]).concat(subSets([]).map(&:concat(1)))
// [1, 2] => [[], [1], [2], [1, 2]]
//  = subsets([1]).concat(subsets([1]).map(&:concat(2)))
