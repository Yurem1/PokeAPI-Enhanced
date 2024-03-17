import { NamedAPIResource } from "../../global_types/global";
/**
 * The game version index for this pokemon.
 */
export default interface VersionGameIndex {
    game_index: number;
    version: NamedAPIResource;
}
