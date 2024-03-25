import { AbilityEffectChange } from '../../interfaces/Pokemon/Abilities/effect_changes';
import { VerboseEffect } from '../../interfaces/Pokemon/Abilities/effect_entries';
import { AbilityFlavorText } from '../../interfaces/Pokemon/Abilities/flavor_text_entries';
import { AbilityPokemon } from '../../interfaces/Pokemon/Abilities/pokemon';
import { Name } from '../../interfaces/Pokemon/Natures/name';
import { IAbilities } from '../../interfaces/Pokemon/abilities';
import { NamedAPIResource } from '../../interfaces/api_resource';
/**
 * @class
 * A comprehensive representation of a Pokémon's abilities, containing all the resources available in the Pokémon API.
 * This class encapsulates data such as the ability's ID, name, whether it's from the main series, the generation it belongs to,
 * its names in different languages, verbose effects, and effect changes.
 * It provides convenient getter methods to access each attribute of the Pokémon's abilities.
 *
 * Use this class to easily retrieve and manipulate Pokémon ability data from the https://pokeapi.co API.
 */
export declare class Abilities {
    private readonly id;
    private readonly name;
    private readonly is_main_series;
    private readonly generation;
    private readonly names;
    private readonly effect_entries;
    private readonly effect_changes;
    private readonly flavor_text_entries;
    private readonly pokemon;
    constructor(_abilities: IAbilities);
    /**
     * Gets the ID of this ability.
     * @returns The ID of the ability, or null if not available.
     */
    get getId(): number | null;
    /**
     * Gets the name of this ability.
     * @returns The name of the ability, or null if not available.
     */
    get getName(): string | null;
    /**
     * Gets boolean if the ability is from the main series.
     * @returns Whether the ability is from the main series, or null if not available.
     */
    get getIsMainSeries(): boolean | null;
    /**
     * Gets the generation for this ability.
     * @returns The generation the ability belongs to, or null if not available.
     */
    get getGeneration(): NamedAPIResource | null;
    /**
     * Getter the names of this abilities.
     * @returns The names of the ability in different languages, or null if not available.
     */
    get getNames(): Name[] | null;
    /**
     * Gets the verbose effects of this ability.
     * @returns The verbose effects of the ability, or null if not available.
     */
    get getEffectEntries(): VerboseEffect[] | null;
    /**
     * Gets the effect changes of this ability.
     * @returns The effect changes of the ability, or null if not available.
     */
    get getEffectChanges(): AbilityEffectChange[] | null;
    /**
     * Gets the pokémon flavor text changes of this ability.
     * @returns The flavor text changes, or null if not available.
     */
    get getFlavorTextEntries(): AbilityFlavorText[] | null;
    /**
     * Gets the pokémons that use this ability.
     * @returns The pokémons, or null if not available.
     */
    get getPokemons(): AbilityPokemon[] | null;
}
