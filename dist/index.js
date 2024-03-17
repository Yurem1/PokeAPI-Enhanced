var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { URL } from './misc.json';
/**
 * Represents a Pokedex.
 */
export class Pokedex {
    /**
     * Creates a new instance of the Pokedex class.
     * @param _name - The name of the Pokedex.
     */
    constructor(_name) {
        this.name = _name;
    }
    /**
     * Retrieves information about a Pokemon from the API.
     * @returns A Promise that resolves to a Pokemon object, or void if an error occurs.
     */
    getPokemon() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = URL.pokemon;
            try {
                // Fetch the pokemon from our name property
                const req = yield fetch(`${url}${this.name}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                // Finally return our Pokémon object.
                return yield req.json();
            }
            catch (error) {
                return null;
            }
        });
    }
}
