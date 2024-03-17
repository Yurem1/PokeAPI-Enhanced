import { Pokemon } from './interfaces/Pokemon/pokemon';
/**
 * Represents a Pokedex.
 */
export declare class Pokedex {
    private name;
    /**
     * Creates a new instance of the Pokedex class.
     * @param _name - The name of the Pokedex.
     */
    constructor(_name: string);
    /**
     * Retrieves information about a Pokemon from the API.
     * @returns A Promise that resolves to a Pokemon object, or null if an error occurs.
     */
    getPokemon(): Promise<Pokemon | null>;
}
