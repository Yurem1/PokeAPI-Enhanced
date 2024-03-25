import { NamedAPIResource } from '../../api_resource';

/**
 * Represents properties such as encounter odds, max level, wheather condition for encounter to happen, etc.
 */
export interface Encounters {
  /**
   * The lowest level the Pokémon could be encountered at.
   */
  min_level: number;

  /**
   * The highest level the Pokémon could be encountered at.
   */
  max_level: number;

  /**
   * A list of condition values that must be in effect for this encounter to occur.
   */
  condition_values: NamedAPIResource;

  /**
   * Percent chance that this encounter will occur.
   */
  chance: number;

  /**
   * The method by which this encounter happens.
   */
  method: NamedAPIResource;
}