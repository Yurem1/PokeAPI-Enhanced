import PokemonAbility from '../../interfaces/Pokemon/Pokemon/abilities';
import PokemonCries from '../../interfaces/Pokemon/Pokemon/cries';
import VersionGameIndex from '../../interfaces/Pokemon/Pokemon/game_indices';
import PokemonHeldItems from '../../interfaces/Pokemon/Pokemon/held_items';
import PokemonMove from '../../interfaces/Pokemon/Pokemon/moves';
import PokemonTypePast, { PokemonType } from '../../interfaces/Pokemon/Pokemon/past_types';
import PokemonStat from '../../interfaces/Pokemon/Pokemon/stats';
import { PokemonSprites } from '../../interfaces/Pokemon/Pokemon/sprites';
import { NamedAPIResource } from '../../interfaces/api_resource';
import { IPokemon } from '../../interfaces/Pokemon/pokemon';
/**
 * @class
 * A comprehensive representation of a Pokémon, containing all the resources available in the Pokémon API.
 * This class encapsulates data such as the Pokémon's ID, name, base experience, height, weight, abilities, moves, types, and more.
 * It provides convenient getter methods to access each attribute of the Pokémon.
 *
 * Use this class to easily retrieve and manipulate Pokémon data from the https://pokeapi.co API.
 */
export declare class Pokemon {
    private readonly id;
    private readonly name;
    private readonly base_experience;
    private readonly height;
    private readonly is_default;
    private readonly order;
    private readonly weight;
    private readonly abilities;
    private readonly forms;
    private readonly game_indices;
    private readonly held_items;
    private readonly location_area_encounters;
    private readonly moves;
    private readonly species;
    private readonly sprites;
    private readonly cries;
    private readonly stats;
    private readonly types;
    private readonly past_types;
    /**
     * Creates an instance of Pokemon.
     * @param _pokemon - The data object representing a Pokemon.
     */
    constructor(_pokemon: IPokemon);
    /**
     * Gets the ID of the Pokemon.
     * @returns The ID of the Pokemon, or null if not available.
     */
    get getPokemonId(): number | null;
    /**
     * Gets the name of the Pokemon.
     * @returns The name of the Pokemon, or null if not available.
     */
    get getPokemonName(): string | null;
    /**
     * Gets the base experience of the Pokemon.
     * @returns The base experience of the Pokemon, or null if not available.
     */
    get getPokemonBaseExperience(): number | null;
    /**
     * Gets the height of the Pokemon.
     * @returns The height of the Pokemon, or null if not available.
     */
    get getPokemonHeight(): number | null;
    /**
     * Checks if the Pokemon is the default form.
     * @returns True if the Pokemon is the default form, false otherwise.
     */
    get getPokemonDefault(): boolean | null;
    /**
     * Gets the order of the Pokemon.
     * @returns The order of the Pokemon, or null if not available.
     */
    get getPokemonOrder(): number | null;
    /**
     * Gets the weight of the Pokemon.
     * @returns The weight of the Pokemon, or null if not available.
     */
    get getPokemonWeight(): number | null;
    /**
     * Gets the abilities of the Pokemon.
     * @returns The abilities of the Pokemon, or null if not available.
     */
    get getPokemonAbilities(): PokemonAbility[] | null;
    /**
     * Gets the forms of the Pokémon.
     * @returns The forms of the Pokemon, or null if not available.
     */
    get getPokemonForms(): NamedAPIResource[] | null;
    /**
     * Gets the pokémon game indices.
     * @returns The pokémon game indices, or null if not avaliable
     */
    get getPokemonGameIndices(): VersionGameIndex[] | null;
    /**
     * Gets the held items of the Pokemon.
     * @returns The held items of the Pokemon, or null if not available.
     */
    get getHeldItems(): PokemonHeldItems[] | null;
    /**
     * Gets the location area encounters of the Pokemon.
     * @returns The location area encounters of the Pokemon, or null if not available.
     */
    get getPokemonLocationAreaEncounters(): string | null;
    /**
     * Gets the moves of the Pokemon.
     * @returns The moves of the Pokemon, or null if not available.
     */
    get getPokemonMoves(): PokemonMove[] | null;
    /**
     * Gets the species of the Pokemon.
     * @returns The species of the Pokemon, or null if not available.
     */
    get getPokemonSpecies(): NamedAPIResource | null;
    /**
     * Gets the sprites of the Pokemon.
     * @returns The sprites of the Pokemon, or null if not available.
     */
    get getPokemonSprites(): PokemonSprites | null;
    /**
     * Gets the cries of the Pokemon.
     * @returns The cries of the Pokemon, or null if not available.
     */
    get getPokemonCries(): PokemonCries | null;
    /**
     * Gets the stats of the Pokemon.
     * @returns The stats of the Pokemon, or null if not available.
     */
    get getPokemonStats(): PokemonStat[] | null;
    /**
     * Gets the types of the Pokemon.
     * @returns The types of the Pokemon, or null if not available.
     */
    get getPokemonTypes(): PokemonType[] | null;
    /**
     * Gets the past types of the Pokemon.
     * @returns The past types of the Pokemon, or null if not available.
     */
    get getPokemonPastTypes(): PokemonTypePast[] | null;
}
