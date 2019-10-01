import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { HashRouter, Route } from "react-router-dom";

// import { receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
// import {fetchAllPokemon} from './util/api_util';
// import selectAllPokemon from './reducers/selectors';


// window.fetchAllPokemon = fetchAllPokemon;
// window.receiveAllPokemon = receiveAllPokemon;
// window.requestAllPokemon = requestAllPokemon;
// window.selectAllPokemon = selectAllPokemon;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root)
});

// window.getState = store.getState;
// window.dispatch = store.dispatch