import {LexicalNode2} from '#analyzer';
import {Boolean2, Char, commonPackageType, Integer, Nothing, Text} from '#common';
import {$Type, Brand, Model} from '#typing';

export type CharacterStream = Model &
  Brand<'Common.CharacterStream'> & {
    takeWhile(
      $type: $Type,
      predicate: (char: Char, index: Integer, text: Text) => Boolean2,
      length?: Integer | Nothing,
    ): LexicalNode2 | Nothing;
  };

export const $CharacterStream = commonPackageType<CharacterStream>('CharacterStream');
