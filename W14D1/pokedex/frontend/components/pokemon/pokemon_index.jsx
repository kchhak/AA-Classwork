import React from 'react';
import {Route} from 'react-router-dom';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
// import {requestAllPokemon} from '../../actions/pokemon_actions'
class PokemonIndex extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  
  render() {
    const {pokemon} = this.props;
    const pokemonItems = pokemon.map(poke => (
    
      <PokemonIndexItem key={poke.id} pokemon={poke}/>
  
    ))

    return (
      <div className="pokedex">
        <ul>{pokemonItems}</ul>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
      </div>
    )

  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }
}

export default PokemonIndex;
