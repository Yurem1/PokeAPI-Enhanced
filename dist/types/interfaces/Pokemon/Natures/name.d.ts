import { NamedAPIResource } from '../../api_resource';
/**
 * The name for this Pokémon.
 */
export interface Name {
    /**
     * The localized name for an API resource in a specific language.
     */
    name: string;
    /**
     * The language this name is in.
     */
    language: NamedAPIResource;
}
