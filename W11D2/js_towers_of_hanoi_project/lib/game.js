function Game(){
  this.towers = [[3, 2, 1],[],[]];
}

// Game.prototype.run{
//   // initialize towers 
//   // set up disks in first tower
//   // ask player which tower to move disk from/to
//   // game completion check?
// }

Game.prototype.run = function(reader, completionCallback) {
  this.promptMove(reader, (startTowerIdx, endTowerIdx) => {
    if (!this.move(startTowerIdx, endTowerIdx)){
      console.log('Invalid Move!');
    }
    if (this.isWon()){
      console.log("YOU WIN!");
      completionCallback();
    }
    this.run(reader, completionCallback);
  });
};

Game.prototype.promptMove = function(reader, callback) {
  console.log(this.towers);

  reader.question("What is the starting tower? ", function (answer1) {
    reader.question("What is the ending tower? ", function (answer2) {
      let startTowerIdx = answer1;
      let endTowerIdx = answer2;

      callback(startTowerIdx, endTowerIdx)
    });
  });
};

Game.prototype.isValidMove = function(start, end) {

  if (this.towers[start].length === 0) {
    return false;
  } else if (this.towers[end].length === 0) {
    return true;
  }
  
  startTowerTopDisk = this.towers[start][this.towers[start].length - 1];
  endTowerTopDisk = this.towers[end][this.towers[end].length - 1];

  if (startTowerTopDisk < endTowerTopDisk) {
    return true;
  } else {
    return false;
  }
};

Game.prototype.move = function(startTowerIdx, endTowerIdx) {
  if (!this.isValidMove(startTowerIdx, endTowerIdx)) {
    return false;
  } else {
    this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
    return true;
  }
};

Game.prototype.print = function() {
  console.log(JSON.stringify(this.towers));
};

Game.prototype.isWon = function() {
  if (this.towers[0].length === 0 && 
    (this.towers[1].length === 0 || this.towers[2].length == 0)){
      return true;
  } else {
    return false;
  }
};


module.exports = Game;