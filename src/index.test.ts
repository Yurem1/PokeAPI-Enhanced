import { Pokedex } from './utility/index';
import { IPokemon } from './interfaces/Pokemon/pokemon';
import { Pokemon } from './utility/Pokemon/pokemon';

// If the pokemon entry exists, this test should run normally,
// Otherwise it will return null & the test will fail.
test('Fetching a pokemon', async () => {
  const dex = await Pokedex.getPokemon('mr. mime.');
  expect(dex).toBeTruthy();
});
