"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pokedex_1 = require("./utils/pokedex");
async function displayPokemon() {
    const dex = new pokedex_1.Pokedex('pikachu');
    const req = await dex.getPokemon();
    console.log(req?.sprites.other["official-artwork"]);
}
displayPokemon().then();
