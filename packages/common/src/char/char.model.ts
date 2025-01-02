import {Boolean2, String2, commonPackageType} from '#common';
import {Model} from '#typing';

export interface Char extends Model {
  _string: String2;

  isUpperLetter(): Boolean2;
  isLowerLetter(): Boolean2;
  isLetter(): Boolean2;
  isDigit(): Boolean2;
  isLetterOrDigit(): Boolean2;
  equals(other: Char): Boolean2;
  toNativeString(): String2;
}

export const $Char = commonPackageType<Char>('Char');
