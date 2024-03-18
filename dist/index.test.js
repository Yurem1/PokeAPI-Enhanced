import { Pokedex } from './utility/index';
// If the pokemon entry exists, this test should run normally,
// Otherwise it will return null & the test will fail.
test('Fetching a pokemon', async () => {
    const dex = await Pokedex.getPokemon('mr. mime.');
    expect(dex).toBeTruthy();
});
