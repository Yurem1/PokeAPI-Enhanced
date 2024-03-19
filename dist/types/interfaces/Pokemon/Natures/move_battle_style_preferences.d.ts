import { NamedAPIResource } from '../../api_resource';
export interface MoveBattleStylePreference {
    /**
     * Chance of using the move, in percent, if HP is under one half.
     */
    low_hp_preference: number;
    /**
     * Chance of using the move, in percent, if HP is over one half.
     */
    high_hp_preference: number;
    /**
     * The move battle style.
     */
    move_battle_styles: NamedAPIResource;
}
