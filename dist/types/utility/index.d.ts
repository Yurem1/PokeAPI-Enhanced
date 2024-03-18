import { Pokemon } from './Pokemon/pokemon';
/**
 * Represents a Pokedex.
 */
export declare class Pokedex {
    private name;
    /**
     * The URL endpoint https://pokeapi.co/api/v2/pokemon/
     */
    private readonly POKEMON_URL;
    /**
     * Creates a new instance of the Pokédex class.
     * @param _name - The name of the Pokédex entry.
     */
    private constructor();
    /**
     * Retrieves information about a Pokemon from the API.
     * @returns A Promise that resolves to a Pokemon object, or null if an error occurs.
     */
    static getPokemon(_name: string): Promise<Pokemon | null>;
}
