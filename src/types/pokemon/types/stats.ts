import {
  NamedAPIResource
} from '../../global_types/global';

export default interface PokemonStat {
  stat: NamedAPIResource;
  effort: number;
  base_stat: number;
}