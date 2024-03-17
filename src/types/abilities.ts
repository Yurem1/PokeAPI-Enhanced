import { NamedAPIResource } from "./global";

/**
 * Represents a Pokemon ability.
 */
export default interface PokemonAbility {
  /**
   * Indicates whether the ability is hidden or not.
   */
  is_hidden: boolean;

  /**
   * The slot number of the ability.
   */
  slot: number;

  /**
   * The details of the ability.
   */
  ability: NamedAPIResource;
}