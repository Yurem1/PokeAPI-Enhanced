import {

NamedAPIResource
} from '../../api_resource';

/**
 * Represents the stats for a Pokémon.
 */
export default interface PokemonStat {
/**
 * The stat of the Pokémon.
 */
stat: NamedAPIResource;

/**
 * The effort value of the Pokémon.
 */
effort: number;

/**
 * The base stat of the Pokémon.
 */
base_stat: number;
}