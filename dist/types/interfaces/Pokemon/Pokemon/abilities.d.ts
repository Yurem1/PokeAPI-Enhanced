import { NamedAPIResource } from "../../api_resource";
/**
 * Represents a Pokemon ability.
 */
export default interface PokemonAbility {
    /**
     * Indicates whether the ability is hidden or not.
     */
    is_hidden: boolean | null;
    /**
     * The slot number of the ability.
     */
    slot: number | null;
    /**
     * The details of the ability.
     */
    ability: NamedAPIResource | null;
}
