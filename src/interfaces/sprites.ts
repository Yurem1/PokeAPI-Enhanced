import { NamedAPIResource } from "./api_resource";

/**
 * Sprites from Dreamworld.
 */
export interface DreamWorld {
  /**
   * The URL for the default front sprite.
   */
  front_default: string | null;
  
  /**
   * The URL for the shiny front sprite.
   */
  front_shiny: string | null;
}

/**
 * Sprites from Pokémon home.
 */
export interface Home {
  /**
   * The URL for the default front sprite.
   */
  front_default: string | null;
  
  /**
   * The URL for the female front sprite.
   */
  front_female: string | null;
  
  /**
   * The URL for the shiny front sprite.
   */
  front_shiny: string | null;
  
  /**
   * The URL for the shiny female front sprite.
   */
  front_shiny_female: string | null;
}

/**
 * Official sprites for this pokemon.
 */
export interface OfficialArtwork {
  /**
   * The URL for the default front sprite.
   */
  front_default: string | null;
  
  /**
   * The URL for the shiny front sprite.
   */
  front_shiny: string | null;
}

/**
 * Sprites from Pokémon Showdown.
 */
export interface Showdown {
  /**
   * The URL for the default back sprite.
   */
  back_default: string | null;
  
  /**
   * The URL for the shiny back sprite.
   */
  back_shiny: string | null;
  
  /**
   * The URL for the female back sprite.
   */
  back_female: string | null;
  
  /**
   * The URL for the shiny female back sprite.
   */
  back_shiny_female: string | null;
  
  /**
   * The URL for the default front sprite.
   */
  front_default: string | null;
  
  /**
   * The URL for the shiny front sprite.
   */
  front_shiny: string | null;
  
  /**
   * The URL for the female front sprite.
   */
  front_female: string | null;
  
  /**
   * The URL for the shiny female front sprite.
   */
  front_shiny_female: string | null;
}

/**
 * Other sprites for this pokemon.
 */
export interface OtherSprites {
  /**
   * The sprites from Dreamworld.
   */
  dream_world: DreamWorld;
  
  /**
   * The sprites from Pokémon home.
   */
  home: Home;
  
  /**
   * The official artwork sprites.
   */
  'official-artwork': OfficialArtwork;
  
  /**
   * The sprites from Pokémon Showdown.
   */
  showdown: Showdown;
}

/**
 * Represents the sprites of a Pokemon.
 */
export interface PokemonSprites {
  /**
   * The URL for the default back sprite.
   */
  back_default: string | null;
  
  /**
   * The URL for the shiny back sprite.
   */
  back_shiny: string | null;
  
  /**
   * The URL for the female back sprite.
   */
  back_female: string | null;
  
  /**
   * The URL for the shiny female back sprite.
   */
  back_shiny_female: string | null;
  
  /**
   * The URL for the default front sprite.
   */
  front_default: string | null;
  
  /**
   * The URL for the shiny front sprite.
   */
  front_shiny: string | null;
  
  /**
   * The URL for the female front sprite.
   */
  front_female: string | null;
  
  /**
   * The URL for the shiny female front sprite.
   */
  front_shiny_female: string | null;
  
  /**
   * The other sprites for this pokemon.
   */
  other: OtherSprites;
}
