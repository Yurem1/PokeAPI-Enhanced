import { NamedAPIResource } from "../../api_resource";
/**
 * Represents the details of a move learned by a Pokémon in a specific version group.
 */
export interface PokemonMoveVersion {
    /**
     * The method by which the Pokémon learns the move.
     */
    move_learn_method: NamedAPIResource;
    /**
     * The version group in which the move is learned.
     */
    version_group: NamedAPIResource;
    /**
     * The level at which the Pokémon learns the move.
     */
    level_learned_at: number;
}
/**
 * Represents the moves of a Pokemon.
 */
export default interface PokemonMove {
    /**
     * The move itself.
     */
    move: NamedAPIResource;
    /**
     * The details of the move in different version groups.
     */
    version_group_details: PokemonMoveVersion[];
}
