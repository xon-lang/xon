import {LexicalNode} from '#analyzer';
import {$CoreType, Boolean2, Character, Integer, Nothing, Text} from '#core';
import {$Type, Brand, Model} from '#typing';

export type CharacterStream = Model &
  Brand<'Core.CharacterStream'> & {
    takeWhile(
      $type: $Type,
      predicate: (character: Character, index: Integer, text: Text) => Boolean2 | Nothing,
      length?: Integer | Nothing,
    ): LexicalNode | Nothing;
  };

export const $CharacterStream = () => $CoreType<CharacterStream>('CharacterStream');
