import {Boolean2, Char, commonPackageType, Integer, Text, TextPosition} from '#common';
import {Brand, Model} from '#typing';

export type CharStream = Model &
  Brand<'Common.CharStream'> & {
    position: TextPosition;

    take(count: Integer): Text;
    takeWhile(predicate: (char: Char) => Boolean2): Text;
  };

export const $CharStream = commonPackageType<CharStream>('CharStream');
