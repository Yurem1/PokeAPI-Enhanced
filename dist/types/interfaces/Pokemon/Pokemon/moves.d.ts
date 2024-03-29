import { NamedAPIResource } from "../../api_resource";
/**
 * Represents the details of a move learned by a Pokémon in a specific version group.
 */
export interface PokemonMoveVersion {
    /**
     * The method by which the Pokémon learns the move.
     */
    move_learn_method: NamedAPIResource | null;
    /**
     * The version group in which the move is learned.
     */
    version_group: NamedAPIResource | null;
    /**
     * The level at which the Pokémon learns the move.
     */
    level_learned_at: number | null;
}
/**
 * Represents the moves of a Pokemon.
 */
export default interface PokemonMove {
    /**
     * The move itself.
     */
    move: NamedAPIResource | null;
    /**
     * The details of the move in different version groups.
     */
    version_group_details: PokemonMoveVersion[] | null;
}
