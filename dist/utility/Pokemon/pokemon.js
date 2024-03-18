/**
 * @class
 * A comprehensive representation of a Pokémon, containing all the resources available in the Pokémon API.
 * This class encapsulates data such as the Pokémon's ID, name, base experience, height, weight, abilities, moves, types, and more.
 * It provides convenient getter methods to access each attribute of the Pokémon.
 *
 * Use this class to easily retrieve and manipulate Pokémon data from the https://pokeapi.co API.
 */
export class Pokemon {
    id;
    name;
    base_experience;
    height;
    is_default;
    order;
    weight;
    abilities;
    forms;
    game_indices;
    held_items;
    location_area_encounters;
    moves;
    species;
    sprites;
    cries;
    stats;
    types;
    past_types;
    /**
     * Creates an instance of Pokemon.
     * @param _pokemon - The data object representing a Pokemon.
     */
    constructor(_pokemon) {
        this.id = _pokemon.id || null;
        this.name = _pokemon.name || null;
        this.base_experience = _pokemon.base_experience || null;
        this.height = _pokemon.height || null;
        this.is_default = _pokemon.is_default || null;
        this.order = _pokemon.order || null;
        this.weight = _pokemon.weight || null;
        this.abilities = _pokemon.abilities || null;
        this.forms = _pokemon.forms || null;
        this.game_indices = _pokemon.game_indices || null;
        this.held_items = _pokemon.held_items || null;
        this.location_area_encounters = _pokemon.location_area_encounters || null;
        this.moves = _pokemon.moves || null;
        this.species = _pokemon.species || null;
        this.sprites = _pokemon.sprites || null;
        this.cries = _pokemon.cries || null;
        this.stats = _pokemon.stats || null;
        this.types = _pokemon.types || null;
        this.past_types = _pokemon.past_types || null;
    }
    /**
     * Gets the ID of the Pokemon.
     * @returns The ID of the Pokemon, or null if not available.
     */
    get getPokemonId() {
        return this.id || null;
    }
    /**
     * Gets the name of the Pokemon.
     * @returns The name of the Pokemon, or null if not available.
     */
    get getPokemonName() {
        return this.name || null;
    }
    /**
     * Gets the base experience of the Pokemon.
     * @returns The base experience of the Pokemon, or null if not available.
     */
    get getPokemonBaseExperience() {
        return this.base_experience || null;
    }
    /**
     * Gets the height of the Pokemon.
     * @returns The height of the Pokemon, or null if not available.
     */
    get getPokemonHeight() {
        return this.height || null;
    }
    /**
     * Checks if the Pokemon is the default form.
     * @returns True if the Pokemon is the default form, false otherwise.
     */
    get getPokemonDefault() {
        return this.is_default || null;
    }
    /**
     * Gets the order of the Pokemon.
     * @returns The order of the Pokemon, or null if not available.
     */
    get getPokemonOrder() {
        return this.order || null;
    }
    /**
     * Gets the weight of the Pokemon.
     * @returns The weight of the Pokemon, or null if not available.
     */
    get getPokemonWeight() {
        return this.weight || null;
    }
    /**
     * Gets the abilities of the Pokemon.
     * @returns The abilities of the Pokemon, or null if not available.
     */
    get getPokemonAbilities() {
        return this.abilities || null;
    }
    /**
     * Gets the forms of the Pokemon.
     * @returns The forms of the Pokemon, or null if not available.
     */
    get getPokemonForms() {
        return this.forms || null;
    }
    get getPokemonGameIndices() {
        return this.game_indices || null;
    }
    /**
     * Gets the held items of the Pokemon.
     * @returns The held items of the Pokemon, or null if not available.
     */
    get getHeldItems() {
        return this.held_items || null;
    }
    /**
     * Gets the location area encounters of the Pokemon.
     * @returns The location area encounters of the Pokemon, or null if not available.
     */
    get getPokemonLocationAreaEncounters() {
        return this.location_area_encounters || null;
    }
    /**
     * Gets the moves of the Pokemon.
     * @returns The moves of the Pokemon, or null if not available.
     */
    get getPokemonMoves() {
        return this.moves || null;
    }
    /**
     * Gets the species of the Pokemon.
     * @returns The species of the Pokemon, or null if not available.
     */
    get getPokemonSpecies() {
        return this.species || null;
    }
    /**
     * Gets the sprites of the Pokemon.
     * @returns The sprites of the Pokemon, or null if not available.
     */
    get getPokemonSprites() {
        return this.sprites || null;
    }
    /**
     * Gets the cries of the Pokemon.
     * @returns The cries of the Pokemon, or null if not available.
     */
    get getPokemonCries() {
        return this.cries || null;
    }
    /**
     * Gets the stats of the Pokemon.
     * @returns The stats of the Pokemon, or null if not available.
     */
    get getPokemonStats() {
        return this.stats || null;
    }
    /**
     * Gets the types of the Pokemon.
     * @returns The types of the Pokemon, or null if not available.
     */
    get getPokemonTypes() {
        return this.types || null;
    }
    /**
     * Gets the past types of the Pokemon.
     * @returns The past types of the Pokemon, or null if not available.
     */
    get getPokemonPastTypes() {
        return this.past_types || null;
    }
}
