class Board {
  constructor() {
    this.grid = Board.makeGrid();
  }

  static makeGrid() {
    let grid = Array.from({length: 3},() => Array.from({length: 3}));
    return grid;
  }

  won() {

  }

  winner() {
    return this.checkCol() || this.checkRow() || this.checkDiagonal();
  }

  checkRow() {
    let matches = false;

    this.grid.forEach((row) => {
      if(!!row[0] && (row[0] === row[1]) && (row[0] === row[2])){
        matches = row[0];
        return matches;
      }
    });

    return matches;
  }

  checkCol() {
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid.length - 1; j++) {
        let mark = this.grid[j][i];
        let nextMark = this.grid[j + 1][i];
        if (mark !== nextMark) {
          break;
        } else if (j === 2 && mark === nextMark) {
          return mark;
        }
      }
    }
    return false;
  }

  checkDiagonal() {
    if ((this.grid[0][0] === this.grid[1][1]) && (this.grid[2][2] === this.grid[1][1])){
      return this.grid[0][0];
    } else if ((this.grid[0][2] === this.grid[1][1]) && (this.grid[2][0] === this.grid[1][1])){
      return this.grid[0][2];
    } else {
      return false;
    }
  }
  
  empty(pos) {
    if (this.validPos(pos)) {
      return !this.grid[pos[0]][pos[1]];
    }
  }

  placeMark(pos, mark) {
    if (this.validPos(pos)) {
      this.grid[pos[0]][pos[1]] = mark;
    }
  }

  validPos(pos) {
    return (pos[0] >= 0 && pos[0] < 3) && (pos[1] >= 0 && pos[1] < 3);
  }

}

module.exports = Board;