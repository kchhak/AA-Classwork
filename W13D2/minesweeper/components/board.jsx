import React from 'react'
import Tile from './tile'

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const grid = this.props.board.grid.map((row, i) => {
      const line = row.map((tile, j) => {
        return (
          <Tile tile={tile} updateGame={this.props.updateGame} key={j}/>
        )
      })
      return (
        <div className="row" key={i}>
          {line}
        </div>
      )
    })

    return (
      <div className="grid">
        {grid}
      </div>
    )
  }
}

export default Board;