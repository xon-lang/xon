import {Boolean2, String2, Text, commonPackageType} from '#common';
import {Model} from '#typing';

export interface Char extends Model {
  _string: String2;

  isUpperLetter(): Boolean2;
  isLowerLetter(): Boolean2;
  isLetter(): Boolean2;
  isDigit(): Boolean2;
  isLetterOrDigit(): Boolean2;
  equals(other: Char): Boolean2;
  equals(other: Text): Boolean2;
  equals(other: String2): Boolean2;
  toString(): String2;
}

export const $Char = commonPackageType<Char>('Char');
