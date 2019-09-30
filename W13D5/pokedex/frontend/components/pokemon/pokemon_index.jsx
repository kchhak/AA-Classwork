import React from 'react';
// import {requestAllPokemon} from '../../actions/pokemon_actions'
class PokemonIndex extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  render() {
    const {pokemon} = this.props;
    return (
      <div>
        <ul>
          {pokemon.map(poke => ( 
            <div key= { poke.id }>
              <li>{poke.name}</li>
              <img src={poke.image_url} alt=""/>
            </div>
          ))}
        </ul>
      </div>
    )

  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }
}

export default PokemonIndex;
