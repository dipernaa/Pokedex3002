import { TOGGLE_CAUGHT, REQUEST_POKEMON_LIST, RECEIVE_POKEMON_LIST } from '../constants/actionTypes';

const pokemonSingular = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_CAUGHT:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        caught: !state.caught
      });

    default:
      return state;
  }
}

export const initialState = {
  isLoading: true,
  pokemon: []
};
export default pokemonList = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POKEMON_LIST:
      return Object.assign({}, state, {
        isLoading: true
      });

    case RECEIVE_POKEMON_LIST:
      return Object.assign({}, state, {
        isLoading: false,
        pokemon: action.pokemon
      });

    case TOGGLE_CAUGHT:
      const pokemon = state.pokemon.map(obj => pokemonSingular(obj, action));
      return Object.assign({}, state, {
        isLoading: false,
        pokemon: pokemon
      });

    default:
      return state;
  }
}
