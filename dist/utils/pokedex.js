"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokedex = void 0;
const utils_json_1 = require("../utils.json");
/**
 * Represents a Pokedex.
 */
class Pokedex {
    name;
    /**
     * Creates a new instance of the Pokedex class.
     * @param _name - The name of the Pokedex.
     */
    constructor(_name) {
        this.name = _name;
    }
    /**
     * Retrieves information about a Pokemon from the API.
     * @returns A Promise that resolves to a Pokemon object, or void if an error occurs.
     */
    async getPokemon() {
        const URL = utils_json_1.urls.pokemon;
        try {
            const req = await fetch(`${URL}${this.name}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
            const res = await req.json();
            return res;
        }
        catch (error) {
            return null;
        }
    }
}
exports.Pokedex = Pokedex;
