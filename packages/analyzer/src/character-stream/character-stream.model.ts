import {LexicalNode} from '#analyzer';
import {$CommonType, Boolean2, Character, Integer, Nothing, Text} from '#common';
import {$Type, Brand, Model} from '#typing';

export type CharacterStream = Model &
  Brand<'Common.CharacterStream'> & {
    takeWhile(
      $type: $Type,
      predicate: (character: Character, index: Integer, text: Text) => Boolean2 | Nothing,
      length?: Integer | Nothing,
    ): LexicalNode | Nothing;
  };

export const $CharacterStream = () => $CommonType<CharacterStream>('CharacterStream');
