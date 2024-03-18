import URL from './misc.json';
/**
 * Represents a Pokedex.
 */
export class Pokedex {
    name;
    /**
     * Creates a new instance of the Pokédex class.
     * @param _name - The name of the Pokéxdex.
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
     * @returns A Promise that resolves to a Pokemon object, or null if an error occurs.
     */
    async getPokemon() {
        // The URL endpoint https://pokeapi.co/api/v2/pokemon/
        const url = URL.ENDPOINTS.pokemon;
        try {
            // Fetch the pokemon data from the API using the specified name
            const req = await fetch(`${url}${this.name}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
            // Parse the response as JSON and return it as a Pokemon object
            return await req.json();
        }
        catch (error) {
            // If an error occurs during the API request, return null
            return null;
        }
    }
}
