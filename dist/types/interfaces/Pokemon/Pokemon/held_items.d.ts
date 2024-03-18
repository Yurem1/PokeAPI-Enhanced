import { NamedAPIResource } from "../../api_resource";
/**
 * Represents a version of a held item for a Pokemon.
 */
export interface PokemonHeldItemVersion {
    /**
     * The rarity of the held item version.
     */
    rarity: number | null;
    /**
     * The version of the held item.
     */
    version: NamedAPIResource | null;
}
/**
 * Represents the held items of a Pokemon.
 */
export default interface PokemonHeldItems {
    item: NamedAPIResource | null;
    version_details: PokemonHeldItemVersion[] | null;
}
