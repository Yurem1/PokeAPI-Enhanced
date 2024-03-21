import { NamedAPIResource } from '../../api_resource';
import { Effect } from './effect';

/**
 * T
 */
export interface AbilityEffectChange {
  /**
   * The previous effect of this ability listed in different languages.
   */
  effect_entries: Effect[];

  /**
   * The version group in which the previous effect of this ability originated.
   */
  version_group: NamedAPIResource;
}