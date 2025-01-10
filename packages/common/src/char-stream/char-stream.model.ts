import {LexicalNode2} from '#analyzer';
import {Boolean2, Char, commonPackageType, Integer, Nothing, Text} from '#common';
import {$Type, Brand, Model} from '#typing';

export type CharStream = Model &
  Brand<'Common.CharStream'> & {
    takeWhile(
      $type: $Type,
      predicate: (char: Char, index: Integer, text: Text) => Boolean2,
      length?: Integer | Nothing,
    ): LexicalNode2 | Nothing;
  };

export const $CharStream = commonPackageType<CharStream>('CharStream');
