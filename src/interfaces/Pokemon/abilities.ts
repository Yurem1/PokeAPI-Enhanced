import { NamedAPIResource } from '../api_resource';
import { AbilityEffectChange } from './Abilities/effect_changes';
import { VerboseEffect } from './Abilities/effect_entries';
import { Name } from './Natures/name';

export interface Abilities {
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
   * 
   */
}