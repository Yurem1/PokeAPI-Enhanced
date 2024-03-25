import { MoveBattleStylePreference } from '../../interfaces/Pokemon/Natures/move_battle_style_preferences';
import { Name } from '../../interfaces/Pokemon/Natures/name';
import { NatureStateChange } from '../../interfaces/Pokemon/Natures/pokeathlon_stat_changes';
import { INature } from '../../interfaces/Pokemon/nature';
import { NamedAPIResource } from '../../interfaces/api_resource';
/**
 * @class
 * A comprehensive representation of a Pokémon's nature, containing all the resources available in the Pokémon API.
 * This class encapsulates data such as the nature's ID, name, decreased and increased stats, flavors it likes and hates,
 * pokeathlon stat changes, move battle style preferences, and more.
 * It provides convenient getter methods to access each attribute of the Pokémon's nature.
 *
 * Use this class to easily retrieve and manipulate Pokémon nature data from the https://pokeapi.co API.
 */
export declare class Nature {
    private readonly id;
    private readonly name;
    private readonly decreased_stat;
    private readonly increased_stat;
    private readonly hates_flavor;
    private readonly likes_flavor;
    private readonly pokeathlon_stat_changes;
    private readonly move_battle_style_preferences;
    private readonly names;
    constructor(_nature: INature);
    /**
     * Gets the pokémon ID.
     * @return The pokémon ID, or null if not available.
     */
    get getPokemonID(): number | null;
    /**
     * Gets the nature name.
     * @return The nature name, or null if not available.
     */
    get getName(): string | null;
    /**
     * Gets the stat that is decreased by this nature.
     * @return The decreased stat, or null if not available.
     */
    get getDecreaseStat(): NamedAPIResource | null;
    /**
     * Gets the stat that is increased by this nature.
     * @return The increased stat, or null if not available.
     */
    get getIncreasedStat(): NamedAPIResource | null;
    /**
     * Gets the flavor that the Pokémon hates when this nature is active.
     * @return The flavor that the Pokémon hates, or null if not available.
     */
    get getHatesFlavor(): NamedAPIResource | null;
    /**
     * Gets the flavor that the Pokémon likes when this nature is active.
     * @return The flavor that the Pokémon likes, or null if not available.
     */
    get getLikesFlavor(): NamedAPIResource | null;
    /**
     * Gets the stat changes that occur to the Pokémon when participating in Pokéathlon.
     * @return The stat changes for Pokéathlon, or null if not available.
     */
    get getPokeathlonStatChanges(): NatureStateChange[] | null;
    /**
     * Gets the move battle style preferences for this nature.
     * @return The move battle style preferences, or null if not available.
     */
    get getMoveBattleStylePreferences(): MoveBattleStylePreference[] | null;
    /**
     * Gets the localized names for this nature.
     * @return The localized names, or null if not available.
     */
    get getNames(): Name | null;
}
