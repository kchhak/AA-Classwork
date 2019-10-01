import * as APIUtil from '../util/api_util';
export const RECEIVE_ALL_POKEMON = "RECIEVE_ALL_POKEMON";
export const RECEIVE_POKEMON_AND_ITEM = "RECEIVE_POKEMON_AND_ITEM";

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON, 
  pokemon
})

export const receivePokemonAndItem = (data) => ({
  type: RECEIVE_POKEMON_AND_ITEM,
  data
})

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestSinglePokemon = (id) => (dispatch) => (
  APIUtil.fetchPokemonAndItem(id)
    .then(data => dispatch(receivePokemonAndItem(data)))
)