import {RECEIVE_ALL_POKEMON, RECEIVE_POKEMON_AND_ITEM} from '../actions/pokemon_actions';
import { merge } from 'lodash';

const pokemonReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({}, state, action.pokemon);
    case RECEIVE_POKEMON_AND_ITEM:
      return Object.assign({}, state, {[action.data.pokemon.id]: action.data.pokemon})
    default: 
     return state;
  }
}

export default pokemonReducer;