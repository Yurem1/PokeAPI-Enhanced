import { NamedAPIResource } from '../api_resource';
import { AbilityEffectChange } from './Abilities/effect_changes';
import { VerboseEffect } from './Abilities/effect_entries';
import { AbilityFlavorText } from './Abilities/flavor_text_entries';
import { AbilityPokemon } from './Abilities/pokemon';
import { Name } from './Natures/name';

/**
 * @interface
 * A comprehensive representation of a Pokémon's ability, containing various attributes and relationships.
 * 
 * @remarks
 * This interface represents the structure of a Pokémon's ability in the PokeAPI.
 * It includes properties such as the ability's ID, name, effect, and whether it is hidden or not.
 */
export interface IAbilities {
  /**
   * The identifier for this resource.
   */
  id: number;

  /** 
   * The name for this resource.
   */
  name: string;

  /**
   * Whether or not this ability originated in the main series of the video games.
   */
  is_main_series: boolean;

  /**
   * The generation this ability originated in.
   */
  generation: NamedAPIResource;

  /**
   * The name of this resource listed in different languages.
   */
  names: Name[];

  /**
   * The effect of this ability listed in different languages.
   */
  effect_entries: VerboseEffect[];

  /**
   * The list of previous effects this ability has had across version groups.
   */
  effect_changes: AbilityEffectChange[];

  /**
   * The flavor text of this ability listed in different languages.
   */
  flavor_text_entries: AbilityFlavorText[];

  /**
   * A list of Pokémon that could potentially have this ability.
   */
  pokemon: AbilityPokemon[]
}