import { NamedAPIResource } from '../../api_resource';

/**
 * The ability flavor text for this pokémon.
 */
export interface AbilityFlavorText {
  /**
   * The localized name for an API resource in a specific language.
   */
  flavor_text: string;

  /**
   * The language this text resource is in.
   */
  language: NamedAPIResource;

  /**
   * The version group that uses this flavor text.
   */
  version_group: NamedAPIResource;
}