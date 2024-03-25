import { Pokedex } from './utility/pokedex';
// If the pokemon entry exists, this test should run normally,
// Otherwise it will return null & the test will fail.
test('Fetching a pokemon', async () => {
    const dex = await Pokedex.getAbilities('gluttony');
    console.log(JSON.stringify(dex));
    expect(dex).toBeTruthy();
});
