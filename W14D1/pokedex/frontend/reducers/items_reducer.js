import {RECEIVE_POKEMON_AND_ITEM } from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POKEMON_AND_ITEM:
      return Object.assign({}, state, action.data.items)
    default:
      return state;
  }
}

export default itemsReducer;