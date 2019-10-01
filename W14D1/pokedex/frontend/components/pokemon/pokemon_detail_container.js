import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => {
  const pokemonId = ownProps.match.params.pokemonId;
  let pokemon = state.entities.pokemon[pokemonId]
  return {pokemon: pokemon}
}

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: id => dispatch(requestSinglePokemon(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);