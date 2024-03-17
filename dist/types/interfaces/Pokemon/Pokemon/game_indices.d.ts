import { NamedAPIResource } from "../../api_resource";
/**
 * Represents the game version index for a specific Pokémon.
 */
export default interface VersionGameIndex {
    /**
     * The index of the Pokémon in the game.
     */
    game_index: number | null;
    /**
     * The version of the game.
     */
    version: NamedAPIResource;
}
