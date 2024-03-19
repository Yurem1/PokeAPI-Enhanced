import { NamedAPIResource } from '../../api_resource';

/**
 * Represents a move stat change.
 */
export interface NatureStateChange {
  /**
   * The amount of change.
   */
  max_change: number;

  /**
   * The stat being affected.
   */
  pokeathlon_stat: NamedAPIResource;
}