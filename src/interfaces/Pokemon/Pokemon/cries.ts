/**
 * Represents the cries of this Pokemon.
 */
export default interface PokemonCries {
  /**
   * The latest cry of the Pokemon.
   */
  latest: string | null;

  /**
   * The legacy cry of the Pokemon.
   */
  legacy: string | null;
}