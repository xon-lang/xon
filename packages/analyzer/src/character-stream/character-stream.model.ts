import {LexicalNode} from '#analyzer';
import {$CoreType, $Type, Boolean2, Brand, Character, Integer, Model, Nothing, Text} from '#core';

export type CharacterStream = Model &
  Brand<'Core.CharacterStream'> & {
    takeWhile(
      $type: $Type,
      predicate: (character: Character, index: Integer, text: Text) => Boolean2 | Nothing,
      // todo remove length parameter if we check it in predicate
      length?: Integer | Nothing,
    ): LexicalNode | Nothing;
  };

export const $CharacterStream = () => $CoreType<CharacterStream>('CharacterStream');
