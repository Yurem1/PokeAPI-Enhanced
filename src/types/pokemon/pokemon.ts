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
  id: number | null;
  
  /**
   * The name for this resource.
   */
  name: string | null;

  /**
   * The base experience gained for defeating this Pokémon.
   */
  base_experience: number | null;

  /**
   * The height of this Pokémon in decimetres.
   */
  height: number | null;

  /**
   * Set for exactly one Pokémon used as the default for each species.
   */
  is_default: boolean | null;

  /**
   * Order for sorting. Almost national order,
   * except families are grouped together.
   */
  order: number | null;

  /**
   * The weight of thi Pokémon in hectograms.
   */
  weight: number | null;

  /**
   * A list of abilities of this Pokémon could potentially have.
   */
  abilities: PokemonAbility[] | null;

  /**
   * A lit of forms this Pokémon can take on.
   */
  forms: NamedAPIResource[] | null;

  /**
   * A list of game indices relevant to Pokémon item by generation. 
   */
  game_indices: VersionGameIndex[] | null;

  /**
   * A list of items this Pokémon may be holding when encountered.
   */
  held_items: PokemonHeldItems[] | null;

  /**
   * A link to a list of location areas, as well
   * as encounter details pertaining to specific versions.
   */
  location_area_encounters: string | null;

  /**
   * A list of moves along with learn methods and
   * level details pertaining to a specific version groups.
   */
  moves: PokemonMove[] | null;

  /**
   * The species this Pokémon belongs to.
   */
  species: NamedAPIResource | null;

  /**
   * A set of sprites used to depict this Pokémon in game.
   * A visual representation of the various sprites can be found
   * at https://github.com/PokeAPI/sprites#sprites
   */
  sprites: PokemonSprites | null;

  /**
   * A set of cries used to depict this Pokemon in the game.
   * A visual representation of the various cries can be found at
   * https://github.com/PokeAPI/cries#cries
   */
  cries: PokemonCries | null;

  /**
   * A list of base stat values for this Pokémon.
   */
  stats: PokemonStat[] | null;

  /**
   * A list of details showing types this Pokémon has.
   */
  types: PokemonType[] | null;

  /**
   * A list of details showing types this pokémon 
   * had in previous generations.
   */
  past_types: PokemonTypePast[] | null;
}
