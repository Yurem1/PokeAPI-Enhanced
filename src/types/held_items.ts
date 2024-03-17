import { NamedAPIResource } from "./global";

/**
 * Represents a version of a held item for a Pokemon.
 */
export interface PokemonHeldItemVersion {
  /**
   * The rarity of the held item version.
   */
  rarity: number;
  
  /**
   * The version of the held item.
   */
  version: NamedAPIResource;
}

/**
 * Represents the held items of a Pokemon.
 */
export default interface PokemonHeldItems {
  item: NamedAPIResource;
  version_details: PokemonHeldItemVersion[];
}