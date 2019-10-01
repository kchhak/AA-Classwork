export const fetchAllPokemon =  () => {
  return $.ajax({
    method: 'GET',
    url: 'api/pokemon'
  })
}

export const fetchPokemonAndItem = (id)  => {
  return $.ajax({
    method: 'GET',
    url: `api/pokemon/${id}`
  })
}