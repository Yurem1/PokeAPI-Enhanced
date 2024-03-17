import { NamedAPIResource } from "./global";

/**
 * Represents the game version index for a specific Pokémon.
 */
export default interface VersionGameIndex {
  /**
   * The index of the Pokémon in the game.
   */
  game_index: number;

  /**
   * The version of the game.
   */
  version: NamedAPIResource;
}