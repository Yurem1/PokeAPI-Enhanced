import { NamedAPIResource } from '../api_resource';
import { MoveBattleStylePreference } from './Natures/move_battle_style_preferences';
import { Name } from './Natures/name';
import { NatureStateChange } from './Natures/pokeathlon_stat_changes';
/**
 * @class
 * A comprehensive representation of a Pokémon nature, containing various attributes and relationships.
 *
 * @remarks
 * This interface represents the structure of a Pokémon nature in the PokeAPI.
 * It includes properties such as the nature's ID, name, stat changes, flavor preferences, and more.
 */
export interface INature {
    /**
     * The identifier for this resource.
     */
    id: number;
    /**
     * The name for this resource.
     */
    name: string;
    /**
     * The stat decreased by 10% in Pokémon with this nature.
     */
    decrease_stat: NamedAPIResource;
    /**
     * The stat increased by 10% in Pokémon with this nature.
     */
    increased_state: NamedAPIResource;
    /**
     * The flavor hated by this Pokémon with this nature.
     */
    hates_flavor: NamedAPIResource;
    /**
     * The flavor liked by this Pokémon with this nature.
     */
    likes_flavor: NamedAPIResource;
    /**
     * A list of Pokéathlon stats with this nature effects and how much it affects them.
     */
    pokeathlon_stat_changes: NatureStateChange[];
    /**
     * A list of battle styles and how likely a Pokémon with this nature is to
     * use them in the Battle Palace or Battle Tent.
     */
    move_battle_style_preferences: MoveBattleStylePreference[];
    /**
     * The name of this resource listed in different languages.
     */
    names: Name;
}
