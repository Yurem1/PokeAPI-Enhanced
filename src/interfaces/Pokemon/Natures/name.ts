import { NamedAPIResource } from '../../api_resource';

export interface Name {
  /**
   * The game version this encounter happens in.
   */
  name: string;

  /**
   * The total percentage of all encounter potential.
   */
  max_change: number
}