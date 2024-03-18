import { Pokedex } from './utility/index';
// Creates a Pokedex object
const dex = new Pokedex('ho-oh');
// If the pokemon entry exists, this test should run normally,
// Otherwise it will return null & the test will fail.
test('Fetching a pokemon', async () => {
    return await dex.getPokemon().then((value) => {
        expect(value).toBeTruthy();
    });
});
