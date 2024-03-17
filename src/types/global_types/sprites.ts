import { NamedAPIResource } from "./global";

/**
 * Sprites from Dreamworld.
 */
export interface DreamWorld {
  front_default: string | null;
  front_shiny: string | null;
}

/**
 * Sprites from Pokémon home.
 */
export interface Home {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

/**
 * Official sprites for this pokemon.
 */
export interface OfficialArtwork {
  front_default: string | null;
  front_shiny: string | null;
}

/**
 * Sprites from Pokémon Showdown.
 */
export interface Showdown {
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_shiny: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
}

/**
 * Other sprites for this pokemon.
 */
export interface OtherSprites {
  dream_world: DreamWorld;
  home: Home;
  'official-artwork': OfficialArtwork;
  showdown: Showdown;
}

/**
 * Represents the sprites of a Pokemon.
 */
export interface PokemonSprites {
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_shiny: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
  other: OtherSprites;
}
