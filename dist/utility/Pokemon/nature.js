/**
 * @class
 * A comprehensive representation of a Pokémon's nature, containing all the resources available in the Pokémon API.
 * This class encapsulates data such as the nature's ID, name, decreased and increased stats, flavors it likes and hates,
 * pokeathlon stat changes, move battle style preferences, and more.
 * It provides convenient getter methods to access each attribute of the Pokémon's nature.
 *
 * Use this class to easily retrieve and manipulate Pokémon nature data from the https://pokeapi.co API.
 */
export class Nature {
    id;
    name;
    decreased_stat;
    increased_stat;
    hates_flavor;
    likes_flavor;
    pokeathlon_stat_changes;
    move_battle_style_preferences;
    names;
    constructor(_nature) {
        this.id = _nature.id;
        this.name = _nature.name;
        this.decreased_stat = _nature.decreased_stat;
        this.increased_stat = _nature.increased_stat;
        this.hates_flavor = _nature.hates_flavor;
        this.likes_flavor = _nature.likes_flavor;
        this.pokeathlon_stat_changes = _nature.pokeathlon_stat_changes;
        this.move_battle_style_preferences = _nature.move_battle_style_preferences;
        this.names = _nature.names;
    }
    /**
     * Gets the pokémon ID.
     * @return The pokémon ID, or null if not available.
     */
    get getPokemonID() {
        return this.id;
    }
    /**
     * Gets the nature name.
     * @return The nature name, or null if not available.
     */
    get getName() {
        return this.name;
    }
    /**
     * Gets the stat that is decreased by this nature.
     * @return The decreased stat, or null if not available.
     */
    get getDecreaseStat() {
        return this.decreased_stat;
    }
    /**
     * Gets the stat that is increased by this nature.
     * @return The increased stat, or null if not available.
     */
    get getIncreasedStat() {
        return this.increased_stat;
    }
    /**
     * Gets the flavor that the Pokémon hates when this nature is active.
     * @return The flavor that the Pokémon hates, or null if not available.
     */
    get getHatesFlavor() {
        return this.hates_flavor;
    }
    /**
     * Gets the flavor that the Pokémon likes when this nature is active.
     * @return The flavor that the Pokémon likes, or null if not available.
     */
    get getLikesFlavor() {
        return this.likes_flavor;
    }
    /**
     * Gets the stat changes that occur to the Pokémon when participating in Pokéathlon.
     * @return The stat changes for Pokéathlon, or null if not available.
     */
    get getPokeathlonStatChanges() {
        return this.pokeathlon_stat_changes;
    }
    /**
     * Gets the move battle style preferences for this nature.
     * @return The move battle style preferences, or null if not available.
     */
    get getMoveBattleStylePreferences() {
        return this.move_battle_style_preferences;
    }
    /**
     * Gets the localized names for this nature.
     * @return The localized names, or null if not available.
     */
    get getNames() {
        return this.names;
    }
}
