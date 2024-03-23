import URL from '../misc.json';
import { Nature } from './Pokemon/nature';
import { Pokemon } from './Pokemon/pokemon';
/**
 * Represents a Pokedex.
 */
export class Pokedex {
    name;
    /**
     * The URL endpoint https://pokeapi.co/api/v2/pokemon/
     */
    POKEMON_URL = URL.ENDPOINTS.pokemon;
    /**
     * The URL endpoint https://pokeapi.co/api/v2/nature/
     */
    NATURE_URL = URL.ENDPOINTS.nature;
    /**
     * THE URL endpoint https://pokeapi.co/api/v2/ability/
     */
    ABILITIES_URL = URL.ENDPOINTS.abilities;
    /**
     * Creates a new instance of the Pokédex class.
     * @param _name - The name of the Pokédex entry.
     */
    constructor(_name) {
        // Replace hyphens whitespace & dots (.) with hyphens (-).
        this.name = (function () {
            return _name
                .toLowerCase()
                .replace(/\.\s{1}|\.|\s/, '-')
                .replace(/\./, '');
        })();
    }
    /**
     * Retrieves information about a Pokemon from the API.
     * @returns A Promise that resolves to a **Pokemon** object, or null if an error occurs.
     */
    static async getPokemon(_name) {
        // The pokedex entry.
        const entry = new Pokedex(_name);
        try {
            // Fetch the pokemon data from the API using the specified name
            const req = await fetch(`${entry.POKEMON_URL}${entry.name}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
            // Parse the response as JSON and return it as a Pokemon object.
            return new Pokemon(await req.json());
        }
        catch {
            // If an error occurs during the API request, return null.
            return null;
        }
    }
    /**
     * Retrieves information about a Nature from the API.
     * @returns A Promise that resolves to a **Nature** object, or null if an error occurs.
     */
    static async getNature(_name) {
        // The pokedex entry.
        const entry = new Pokedex(_name);
        try {
            // Fetch the pokemon data from the API using the specified name
            const req = await fetch(`${entry.NATURE_URL}${entry.name}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
            // Parse the response as JSON and return it as a Nature object.
            return new Nature(await req.json());
        }
        catch {
            // If an error occurs during the API request, return null.
            return null;
        }
    }
}
