export const INDEX_POKEMON = 'INDEX_POKEMON';
export const TYPE_POKEMON = 'TYPE_POKEMON';

export const actionIndexPokemon = (index, length = 1) => ({
  type: INDEX_POKEMON,
  index: index === length - 1 ? 0 : index + 1,
});

export const actionTypePokemons = (typePokemon) => ({
  type: TYPE_POKEMON,
  typePokemon,
});
