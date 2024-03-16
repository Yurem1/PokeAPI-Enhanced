
import { NamedAPIResource } from './global';

export interface Abilities {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource
}

export interface GameIndices {
  game_index: number;
  version: NamedAPIResource;
}

export interface VersionDetails {
  rarity: number;
  version: NamedAPIResource  
}

export interface HeldItems {
  item: NamedAPIResource;
  version_details: VersionDetails[]
}

export interface VersionGroupDetails {
  level_learned_at: number;
  version_group: NamedAPIResource;
  move_learn_method: NamedAPIResource
}

export interface Moves {
  move: NamedAPIResource;
  version_group_details: VersionGroupDetails[]
}

export interface Sprites {
  front_default: string | null;
  front_shiny: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  back_shiny_female: string | null;
}

export interface DreamWorld {
  front_default: string | null;
  front_female: string | null
}

export interface Home {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface OfficialArtwork {
  front_default: string | null;
  front_shiny: string | null;
}

export interface Showdown {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface Other {
  dream_world: DreamWorld;
  home: Home;
  'official-artwork': OfficialArtwork;
  showdown: Showdown
}


/**
 * Represents a Pokemon.
 */
export interface Pokemon {
  /**
   * The ID of the Pokemon.
   */
  id: number;
  
  /**
   * The name of the Pokemon.
   */
  name: string;
  
  /**
   * The base experience of the Pokemon.
   */
  base_experience: number;
  
  /**
   * The height of the Pokemon.
   */
  height: number;
  
  /**
   * Indicates if the Pokemon is the default form.
   */
  is_default: boolean;
  
  /**
   * The order of the Pokemon.
   */
  order: number;
  
  /**
   * The weight of the Pokemon.
   */
  weight: number;
  
  /**
   * The abilities of the Pokemon.
   */
  abilities: Abilities[];
  
  /**
   * The forms of the Pokemon.
   */
  forms: NamedAPIResource[];
  
  /**
   * The game indices of the Pokemon.
   */
  game_indices: GameIndices[];
  
  /**
   * The held items of the Pokemon.
   */
  held_items: HeldItems[];
  
  /**
   * The location area encounters of the Pokemon.
   */
  location_area_encounters: string;
  
  /**
   * The moves of the Pokemon.
   */
  moves: Moves[];
  
  /**
   * The species of the Pokemon.
   */
  species: NamedAPIResource;
  
  /**
   * The sprites of the Pokemon.
   */
  sprites: Sprites;
}