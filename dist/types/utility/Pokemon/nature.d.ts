import { MoveBattleStylePreference } from '../../interfaces/Pokemon/Natures/move_battle_style_preferences';
import { Name } from '../../interfaces/Pokemon/Natures/name';
import { NatureStateChange } from '../../interfaces/Pokemon/Natures/pokeathlon_stat_changes';
import { INature } from '../../interfaces/Pokemon/nature';
import { NamedAPIResource } from '../../interfaces/api_resource';
export declare class Nature {
    private readonly id;
    private readonly name;
    private readonly decrease_stat;
    private readonly increased_state;
    private readonly hates_flavor;
    private readonly likes_flavor;
    private readonly pokeathlon_stat_changes;
    private readonly move_battle_style_preferences;
    private readonly names;
    constructor(_nature: INature);
    /**
     * Getter for the Pokémon ID
     */
    get getPokemonID(): number | null;
    /**
     * Getter for the nature name
     */
    get getName(): string | null;
    /**
     * Getter for the stat that is decreased by this nature
     */
    get getDecreaseStat(): NamedAPIResource | null;
    /**
     * Getter for the stat that is increased by this nature
     */
    get getIncreasedStat(): NamedAPIResource | null;
    /**
     * Getter for the flavor that the Pokémon hates when this nature is active
     */
    get getHatesFlavor(): NamedAPIResource | null;
    /**
     * Getter for the flavor that the Pokémon likes when this nature is active
     */
    get getLikesFlavor(): NamedAPIResource | null;
    /**
     * Getter for the stat changes that occur to the Pokémon when participating in Pokéathlon
     */
    get getPokeathlonStatChanges(): NatureStateChange[] | null;
    /**
     * Getter for the move battle style preferences for this nature
     */
    get getMoveBattleStylePreferences(): MoveBattleStylePreference[] | null;
    /**
     * Getter for the localized names for this nature
     */
    get getNames(): Name | null;
}
