import { Pokedex } from './utility/pokedex';

// If the pokemon entry exists, this test should run normally,
// Otherwise it will return null & the test will fail.
test('Fetching a pokemon', async () => {
  const dex = await Pokedex.getNature('adamant');
  expect(dex).toBeTruthy();
});
