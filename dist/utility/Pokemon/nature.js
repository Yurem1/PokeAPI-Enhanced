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
     * Getter for the Pokémon ID
     */
    get getPokemonID() {
        return this.id;
    }
    /**
     * Getter for the nature name
     */
    get getName() {
        return this.name;
    }
    /**
     * Getter for the stat that is decreased by this nature
     */
    get getDecreaseStat() {
        return this.decreased_stat;
    }
    /**
     * Getter for the stat that is increased by this nature
     */
    get getIncreasedStat() {
        return this.increased_stat;
    }
    /**
     * Getter for the flavor that the Pokémon hates when this nature is active
     */
    get getHatesFlavor() {
        return this.hates_flavor;
    }
    /**
     * Getter for the flavor that the Pokémon likes when this nature is active
     */
    get getLikesFlavor() {
        return this.likes_flavor;
    }
    /**
     * Getter for the stat changes that occur to the Pokémon when participating in Pokéathlon
     */
    get getPokeathlonStatChanges() {
        return this.pokeathlon_stat_changes;
    }
    /**
     * Getter for the move battle style preferences for this nature
     */
    get getMoveBattleStylePreferences() {
        return this.move_battle_style_preferences;
    }
    /**
     * Getter for the localized names for this nature
     */
    get getNames() {
        return this.names;
    }
}
