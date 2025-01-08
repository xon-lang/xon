import {Boolean2, Char, commonPackageType, Integer, Nothing, Text, TextPosition} from '#common';
import {Brand, Model} from '#typing';

export type CharStream = Model &
  Brand<'Common.CharStream'> & {
    length: Integer;
    position: TextPosition;

    takeWhile(predicate: (char: Char) => Boolean2, length?: Integer | Nothing): Text | Nothing;
  };

export const $CharStream = commonPackageType<CharStream>('CharStream');
