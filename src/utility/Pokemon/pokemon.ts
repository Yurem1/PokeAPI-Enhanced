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
export class Pokemon {
  private readonly id: number | null;
  private readonly name: string | null;
  private readonly base_experience: number | null;
  private readonly height: number | null;
  private readonly is_default: boolean | null;
  private readonly order: number | null;
  private readonly weight: number | null;
  private readonly abilities: PokemonAbility[] | null;
  private readonly forms: NamedAPIResource[] | null;
  private readonly game_indices: VersionGameIndex[] | null;
  private readonly held_items: PokemonHeldItems[] | null;
  private readonly location_area_encounters: string | null;
  private readonly moves: PokemonMove[] | null;
  private readonly species: NamedAPIResource | null;
  private readonly sprites: PokemonSprites | null;
  private readonly cries: PokemonCries | null;
  private readonly stats: PokemonStat[] | null;
  private readonly types: PokemonType[] | null;
  private readonly past_types: PokemonTypePast[] | null;
  
  /**
   * Creates an instance of Pokemon.
   * @param _pokemon - The data object representing a Pokemon.
   */
  public constructor(_pokemon: IPokemon) {
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
  public get getPokemonId(): number | null {
    return this.id || null;
  }

  /**
   * Gets the name of the Pokemon.
   * @returns The name of the Pokemon, or null if not available.
   */
  public get getPokemonName(): string | null {
    return this.name || null;
  }

  /**
   * Gets the base experience of the Pokemon.
   * @returns The base experience of the Pokemon, or null if not available.
   */
  public get getPokemonBaseExperience(): number | null {
    return this.base_experience || null;
  }

  /**
   * Gets the height of the Pokemon.
   * @returns The height of the Pokemon, or null if not available.
   */
  public get getPokemonHeight(): number | null {
    return this.height || null;
  }

  /**
   * Checks if the Pokemon is the default form.
   * @returns True if the Pokemon is the default form, false otherwise.
   */
  public get getPokemonDefault(): boolean | null {
    return this.is_default || null;
  }

  /**
   * Gets the order of the Pokemon.
   * @returns The order of the Pokemon, or null if not available.
   */
  public get getPokemonOrder(): number | null {
    return this.order || null;
  }

  /**
   * Gets the weight of the Pokemon.
   * @returns The weight of the Pokemon, or null if not available.
   */
  public get getPokemonWeight(): number | null {
    return this.weight || null;
  }

  /**
   * Gets the abilities of the Pokemon.
   * @returns The abilities of the Pokemon, or null if not available.
   */
  public get getPokemonAbilities(): PokemonAbility[] | null {
    return this.abilities || null;
  }

  /**
   * Gets the forms of the Pokemon.
   * @returns The forms of the Pokemon, or null if not available.
   */
  public get getPokemonForms(): NamedAPIResource[] | null {
    return this.forms || null;
  }

  public get getPokemonGameIndices(): VersionGameIndex[] | null {
    return this.game_indices || null;
  }
  /**
   * Gets the held items of the Pokemon.
   * @returns The held items of the Pokemon, or null if not available.
   */
  public get getHeldItems(): PokemonHeldItems[] | null {
    return this.held_items || null;
  }

  /**
   * Gets the location area encounters of the Pokemon.
   * @returns The location area encounters of the Pokemon, or null if not available.
   */
  public get getPokemonLocationAreaEncounters(): string | null {
    return this.location_area_encounters || null;
  }

  /**
   * Gets the moves of the Pokemon.
   * @returns The moves of the Pokemon, or null if not available.
   */
  public get getPokemonMoves(): PokemonMove[] | null {
    return this.moves || null;
  }

  /**
   * Gets the species of the Pokemon.
   * @returns The species of the Pokemon, or null if not available.
   */
  public get getPokemonSpecies(): NamedAPIResource | null {
    return this.species || null;
  }

  /**
   * Gets the sprites of the Pokemon.
   * @returns The sprites of the Pokemon, or null if not available.
   */
  public get getPokemonSprites(): PokemonSprites | null {
    return this.sprites || null;
  }

  /**
   * Gets the cries of the Pokemon.
   * @returns The cries of the Pokemon, or null if not available.
   */
  public get getPokemonCries(): PokemonCries | null {
    return this.cries || null;
  }

  /**
   * Gets the stats of the Pokemon.
   * @returns The stats of the Pokemon, or null if not available.
   */
  public get getPokemonStats(): PokemonStat[] | null {
    return this.stats || null;
  }

  /**
   * Gets the types of the Pokemon.
   * @returns The types of the Pokemon, or null if not available.
   */
  public get getPokemonTypes(): PokemonType[] | null {
    return this.types || null;
  }

  /**
   * Gets the past types of the Pokemon.
   * @returns The past types of the Pokemon, or null if not available.
   */
  public get getPokemonPastTypes(): PokemonTypePast[] | null {
    return this.past_types || null;
  }
}
