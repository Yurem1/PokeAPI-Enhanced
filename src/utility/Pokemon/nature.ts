import { MoveBattleStylePreference } from '../../interfaces/Pokemon/Natures/move_battle_style_preferences';
import { Name } from '../../interfaces/Pokemon/Natures/name';
import { NatureStateChange } from '../../interfaces/Pokemon/Natures/pokeathlon_stat_changes';
import { INature } from '../../interfaces/Pokemon/nature';
import { NamedAPIResource } from '../../interfaces/api_resource';

export class Nature {
  private readonly id: number | null;
  private readonly name: string | null;
  private readonly decrease_stat: NamedAPIResource | null;
  private readonly increased_state: NamedAPIResource | null;
  private readonly hates_flavor: NamedAPIResource | null;
  private readonly likes_flavor: NamedAPIResource | null;
  private readonly pokeathlon_stat_changes: NatureStateChange[] | null;
  private readonly move_battle_style_preferences: MoveBattleStylePreference[] | null;
  private readonly names: Name | null;

  public constructor(_nature: INature) {
    this.id = _nature.id;
    this.name = _nature.name;
    this.decrease_stat = _nature.decrease_stat;
    this.increased_state = _nature.increased_state;
    this.hates_flavor = _nature.hates_flavor;
    this.likes_flavor = _nature.likes_flavor;
    this.pokeathlon_stat_changes = _nature.pokeathlon_stat_changes;
    this.move_battle_style_preferences = _nature.move_battle_style_preferences;
    this.names = _nature.names;
  }

  /**
   * Getter for the Pokémon ID
   */
  public get getPokemonID(): number | null {
    return this.id;
  }

  /**
   * Getter for the nature name
   */
  public get getName(): string | null {
    return this.name;
  }

  /**
   * Getter for the stat that is decreased by this nature
   */
  public get getDecreaseStat(): NamedAPIResource | null {
    return this.decrease_stat;
  }

  /**
   * Getter for the stat that is increased by this nature
   */
  public get getIncreasedStat(): NamedAPIResource | null {
    return this.increased_state;
  }

  /**
   * Getter for the flavor that the Pokémon hates when this nature is active
   */
  public get getHatesFlavor(): NamedAPIResource | null {
    return this.hates_flavor;
  }

  /**
   * Getter for the flavor that the Pokémon likes when this nature is active
   */
  public get getLikesFlavor(): NamedAPIResource | null {
    return this.likes_flavor;
  }

  /**
   * Getter for the stat changes that occur to the Pokémon when participating in Pokéathlon
   */
  public get getPokeathlonStatChanges(): NatureStateChange[] | null {
    return this.pokeathlon_stat_changes;
  }

  /**
   * Getter for the move battle style preferences for this nature
   */
  public get getMoveBattleStylePreferences(): MoveBattleStylePreference[] | null {
    return this.move_battle_style_preferences;
  }

  /**
   * Getter for the localized names for this nature
   */
  public get getNames(): Name | null {
    return this.names;
  }
}
