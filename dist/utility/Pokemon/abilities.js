/**
 * @class
 * A comprehensive representation of a Pokémon's abilities, containing all the resources available in the Pokémon API.
 * This class encapsulates data such as the ability's ID, name, whether it's from the main series, the generation it belongs to,
 * its names in different languages, verbose effects, and effect changes.
 * It provides convenient getter methods to access each attribute of the Pokémon's abilities.
 *
 * Use this class to easily retrieve and manipulate Pokémon ability data from the https://pokeapi.co API.
 */
export class Abilities {
    id;
    name;
    is_main_series;
    generation;
    names;
    effect_entries;
    effect_changes;
    flavor_text_changes;
    pokemon;
    constructor(_abilities) {
        this.id = _abilities.id;
        this.name = _abilities.name;
        this.is_main_series = _abilities.is_main_series;
        this.generation = _abilities.generation;
        this.names = _abilities.names;
        this.effect_entries = _abilities.effect_entries;
        this.effect_changes = _abilities.effect_changes;
        this.flavor_text_changes = _abilities.flavor_text_entries;
        this.pokemon = _abilities.pokemon;
    }
    /**
     * Gets the ID of this ability.
     * @returns The ID of the ability, or null if not available.
     */
    get getId() {
        return this.id;
    }
    /**
     * Gets the name of this ability.
     * @returns The name of the ability, or null if not available.
     */
    get getName() {
        return this.name;
    }
    /**
     * Gets boolean if the ability is from the main series.
     * @returns Whether the ability is from the main series, or null if not available.
     */
    get getIsMainSeries() {
        return this.is_main_series;
    }
    /**
     * Gets the generation for this ability.
     * @returns The generation the ability belongs to, or null if not available.
     */
    get getGeneration() {
        return this.generation;
    }
    /**
     * Getter the names of this abilities.
     * @returns The names of the ability in different languages, or null if not available.
     */
    get getNames() {
        return this.names;
    }
    /**
     * Gets the verbose effects of this ability.
     * @returns The verbose effects of the ability, or null if not available.
     */
    get getEffectEntries() {
        return this.effect_entries;
    }
    /**
     * Gets the effect changes of this ability.
     * @returns The effect changes of the ability, or null if not available.
     */
    get getEffectChanges() {
        return this.effect_changes;
    }
    /**
     * Gets the pokémon flavor text changes of this ability.
     * @returns The flavor text changes, or null if not available.
     */
    get getFlavorTextChanges() {
        return this.flavor_text_changes;
    }
    /**
     * Gets the pokémons that use this ability.
     * @returns The pokémons, or null if not available.
     */
    get getPokemons() {
        return this.pokemon;
    }
}
