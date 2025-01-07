import {Char, commonPackageType, Nothing} from '#common';
import {Brand, Model} from '#typing';

export type CharStream = Model &
  Brand<'Common.CharStream'> & {
    next(): Char | Nothing;
    previous(): Char | Nothing;
  };

export const $CharStream = commonPackageType<CharStream>('CharStream');
