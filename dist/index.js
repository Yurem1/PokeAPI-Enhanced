import URL from './misc.json';
/**
 * Represents a Pokedex.
 */
export class Pokedex {
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
        const url = URL.ENDPOINTS.pokemon;
        try {
            // Fetch the pokemon from our name property
            const req = await fetch(`${url}${this.name}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
            // Finally return our Pokémon object.
            return await req.json();
        }
        catch (error) {
            return null;
        }
    }
}
