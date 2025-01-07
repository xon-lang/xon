import {Char, commonPackageType, Integer, Nothing} from '#common';
import {Brand, Model} from '#typing';

export type CharStream = Model &
  Brand<'Common.CharStream'> & {
    index: Integer;

    next(): Char | Nothing;
    previous(): Char | Nothing;
  };

export const $CharStream = commonPackageType<CharStream>('CharStream');
