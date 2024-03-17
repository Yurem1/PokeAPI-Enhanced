import {
  NamedAPIResource
} from './global';

/**
 * The stats for this pokémon.
 */
export default interface PokemonStat {
  stat: NamedAPIResource;
  effort: number;
  base_stat: number;
}