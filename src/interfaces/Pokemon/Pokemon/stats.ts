import { NamedAPIResource } from '../../api_resource';

/**
 * Represents the stats for a Pokémon.
 */
export default interface PokemonStat {
  /**
   * The stat of the Pokémon.
   */
  stat: NamedAPIResource | null;

  /**
   * The effort value of the Pokémon.
   */
  effort: number | null;

  /**
   * The base stat of the Pokémon.
   */
  base_stat: number | null;
}
