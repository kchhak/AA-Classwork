import React from 'react';

class PokemonDetail extends React.Component {

  componentDidMount() {
    let id = this.props.match.params.pokemonId;
    this.props.requestSinglePokemon(id)
    console.log(this.props.pokemon)
    debugger;
  }

  render() {
    const pokemon = this.props.pokemon;

    if (!pokemon){
      return (
        <div>No pokes</div>
      )
    }

    return (
      <div>
        <img src={pokemon.image_url} alt=""/>
        <ul>
          <li>{pokemon.name}</li>
          <li>Type: {pokemon.type}</li>
          <li>Attack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
          {/* <li>Moves: {pokemon.moves.join(', ')}</li> */}
        </ul>
        <ul>

        </ul>
      </div>
    )
  }
}

export default PokemonDetail;