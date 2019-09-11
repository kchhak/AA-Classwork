const Game = require('./game')

const readline = require('readline');

const reader = readline.createInterface({
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

let game = new Game()
game.run(reader, completion);

function completion() {
  reader.question("Do you want to play again?", function(answer) {
    if (answer === 'yes'){
      game = new Game();
      game.run(reader, completion);
    } else {
      reader.close();
    }
  });
}