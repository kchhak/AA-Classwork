import React from 'react';

class Tile extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.altKey){
      this.props.updateGame(this.props.tile, true);
    } else{
      this.props.updateGame(this.props.tile, false);
    }
  }

  render() {
    const tile = this.props.tile;
    let str;
    let klass = "tile"
    
    if (tile.flagged) {
      str = '\uD83D\uDC36'
    } else if (tile.explored) {
      if (tile.bombed) {
        str = '\uD83D\uDC31'
      } else {
        let num = tile.adjacentBombCount();
        str = num === 0 ? " " : num.toString();
        klass = "tile revealed"
      }
    } else {
      str = ""
    }

    return (
      <div className={klass} onClick={this.handleClick}>{str}</div>
      )
  }
}

export default Tile;