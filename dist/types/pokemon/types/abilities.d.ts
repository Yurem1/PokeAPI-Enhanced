import { NamedAPIResource } from "../../global_types/global";
/**
 * Represents a Pokemon ability.
 */
export interface PokemonAbility {
    is_hidden: boolean;
    slot: number;
    ability: NamedAPIResource;
}
