import { NamedAPIResource } from "../../global_types/global";
/**
 * Represents the details of a move learned by a Pokémon in a specific version group.
 */
export interface PokemonMoveVersion {
    move_learn_method: NamedAPIResource;
    version_group: NamedAPIResource;
    level_learned_at: number;
}
/**
 * Represents the moves of a Pokemon.
 */
export default interface PokemonMove {
    move: NamedAPIResource;
    version_group_details: PokemonMoveVersion[];
}
