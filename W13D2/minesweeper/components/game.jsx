import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { board: new Minesweeper.Board(8, 10) }
    this.updateGame = this.updateGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  restartGame() {
    this.setState({ board: new Minesweeper.Board(8, 10) })
  }

  updateGame(tile, status) {
    if (status) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({ board: this.state.board });
  }

  render() {
    let winningState = "";

    if (this.state.board.lost()) {
      winningState = 'you lose';
    } else if (this.state.board.won()) {
      winningState = 'you win!';
    }

  let modal;
  if (this.state.board.lost() || this.state.board.won()){
    modal =
      <div>
        <div className="modal-screen">
        </div>
        <div className="modal-form">
          <p>{winningState}</p>
          <button onClick={this.restartGame}>Play Again</button>
        </div>
      </div>
  }

    return (
      <div className="game">
        {modal}
        <Board board={this.state.board} updateGame={this.updateGame} />
      </div>
    )
  }
}

export default Game;