import { AbilityEffectChange } from '../../interfaces/Pokemon/Abilities/effect_changes';
import { VerboseEffect } from '../../interfaces/Pokemon/Abilities/effect_entries';
import { Name } from '../../interfaces/Pokemon/Natures/name';
import { IAbilities } from '../../interfaces/Pokemon/abilities';
import { NamedAPIResource } from '../../interfaces/api_resource';

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
  private readonly id: number | null;
  private readonly name: string | null;
  private readonly is_main_series: boolean | null;
  private readonly generation: NamedAPIResource | null;
  private readonly names: Name[] | null;
  private readonly effect_entries: VerboseEffect[] | null;
  private readonly effect_changes: AbilityEffectChange[] | null;

  constructor(_abilities: IAbilities) {
    this.id = _abilities.id;
    this.name = _abilities.name;
    this.is_main_series = _abilities.is_main_series;
    this.generation = _abilities.generation;
    this.names = _abilities.names;
    this.effect_entries = _abilities.effect_entries;
    this.effect_changes = _abilities.effect_changes;
  }

  /**
   * Gets the ID of this ability.
   * @returns The ID of the ability, or null if not available.
   */
  public get getId(): number | null {
    return this.id;
  }

  /**
   * Gets the name of this ability.
   * @returns The name of the ability, or null if not available.
   */
  public get getName(): string | null {
    return this.name;
  }

  /**
   * Gets boolean if the ability is from the main series.
   * @returns Whether the ability is from the main series, or null if not available.
   */
  public get getIsMainSeries(): boolean | null {
    return this.is_main_series;
  }

  /**
   * Gets the generation for this ability.
   * @returns The generation the ability belongs to, or null if not available.
   */
  public get getGeneration(): NamedAPIResource | null {
    return this.generation;
  }

  /**
   * Getter the names of this abilities.
   * @returns The names of the ability in different languages, or null if not available.
   */
  public get getNames(): Name[] | null {
    return this.names;
  }

  /**
   * Gets the verbose effects of this ability.
   * @returns The verbose effects of the ability, or null if not available.
   */
  public get getEffectEntries(): VerboseEffect[] | null {
    return this.effect_entries;
  }

  /**
   * Gets the effect changes of this ability.
   * @returns The effect changes of the ability, or null if not available.
   */
  public get getEffectChanges(): AbilityEffectChange[] | null {
    return this.effect_changes;
  }
}
