import {
  NamedAPIResource
} from '../../global_types/global';

/**
 * Represents the type of this Pokémon.
 */
export interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

/**
 * Represents the past types of this Pokémon.
 */
export default interface PokemonTypePast {
  generation: NamedAPIResource;
  types: PokemonType[];
}