import { Pokemon } from '../types/pokemon/pokemon';
import { urls } from '../misc.json';

/**
 * Represents a Pokedex.
 */
export class Pokedex {
  private name: string;

  /**
   * Creates a new instance of the Pokedex class.
   * @param _name - The name of the Pokedex.
   */
  public constructor(_name: string) {
    this.name = _name
  }

  /**
   * Retrieves information about a Pokemon from the API.
   * @returns A Promise that resolves to a Pokemon object, or void if an error occurs.
   */
  async getPokemon(): Promise<Pokemon | null> {
    const URL = urls.pokemon;

    try {
      // Fetch the pokemon from our name property
      const req = await fetch(`${URL}${this.name}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });

      // Finally return our Pokémon object.
      return await req.json() as Pokemon;

    } catch(error) {
      return null;
    }
  }
}