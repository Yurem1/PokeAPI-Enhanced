import { NamedAPIResource } from "../../global_types/global";

/**
 * Represents a Pokemon ability.
 */
export default interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource
}