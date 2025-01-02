import {Boolean2, commonPackageType} from '#common';
import {Model} from '#typing';

export interface Char extends Model {
  _string: string;

  isUpperLetter(): Boolean2;
  isLowerLetter(): Boolean2;
  isLetter(): Boolean2;
  isDigit(): Boolean2;
  isLetterOrDigit(): Boolean2;
  equals(other: Char): Boolean2;
  toNativeString(): string;
}

export const $Char = commonPackageType<Char>('Char');
