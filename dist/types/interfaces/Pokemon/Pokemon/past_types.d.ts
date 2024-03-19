import { NamedAPIResource } from '../../api_resource';
/**
 * Represents the type of this Pokémon.
 */
export interface PokemonType {
    /**
     * The slot number of the type.
     */
    slot: number | null;
    /**
     * The type of the Pokémon.
     */
    type: NamedAPIResource | null;
}
/**
 * Represents the past types of this Pokémon.
 */
export default interface PokemonTypePast {
    /**
     * The generation of the past types.
     */
    generation: NamedAPIResource | null;
    /**
     * The array of past types for the Pokémon.
     */
    types: (PokemonType | null)[];
}
