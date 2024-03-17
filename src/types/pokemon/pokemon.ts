import { NamedAPIResource } from '../global_types/global'
import { PokemonSprites } from '../global_types/sprites';
import PokemonAbility from './types/abilities';
import PokemonCries from './types/cries';
import VersionGameIndex from './types/game_indices';
import PokemonHeldItems from './types/held_items';
import PokemonMove from './types/moves';
import PokemonTypePast, { PokemonType } from './types/past_types';
import PokemonStat from './types/stats';

/**
 * Represents a Pokemon object.
 */
export interface Pokemon {
  /**
   * The identifier of this resource.
   */
  id: number;
  
  /**
   * The name for this resource.
   */
  name: string;

  /**
   * The base experience gained for defeating this Pokémon.
   */
  base_experience: number;

  /**
   * The height of this Pokémon in decimetres.
   */
  height: number;

  /**
   * Set for exactly one Pokémon used as the default for each species.
   */
  is_default: boolean;

  /**
   * Order for sorting. Almost national order,
   * except families are grouped together.
   */
  order: number;

  /**
   * The weight of thi Pokémon in hectograms.
   */
  weight: number;

  /**
   * A list of abilities of this Pokémon could potentially have.
   */
  abilities: PokemonAbility[]

  /**
   * A lit of forms this Pokémon can take on.
   */
  forms: NamedAPIResource[];

  /**
   * A list of game indices relevant to Pokémon item by generation. 
   */
  game_indices: VersionGameIndex[];

  /**
   * A list of items this Pokémon may be holding when encountered.
   */
  held_items: PokemonHeldItems[];

  /**
   * A link to a list of location areas, as well
   * as encounter details pertaining to specific versions.
   */
  location_area_encounters: string;

  /**
   * A list of moves along with learn methods and
   * level details pertaining to a specific version groups.
   */
  moves: PokemonMove[];

  /**
   * A list of details showing types this pokémon 
   * had in previous generations.
   */
  past_types: PokemonTypePast[];

  /**
   * A set of sprites used to depict this Pokémon in game.
   * A visual representation of the various sprites can be found
   * at https://github.com/PokeAPI/sprites#sprites
   */
  sprites: PokemonSprites;

  /**
   * A set of cries used to depict this Pokemon in the game.
   * A visual representation of the various cries can be found at
   * https://github.com/PokeAPI/cries#cries
   */
  cries: PokemonCries;

  /**
   * The species this Pokémon belongs to.
   */
  species: NamedAPIResource;

  /**
   * A list of base stat values for this Pokémon.
   */
  stats: PokemonStat[];

  /**
   * A list of details showing types this Pokémon has.
   */
  types: PokemonType[]
}