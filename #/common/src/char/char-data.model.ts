import {Boolean2, commonPackageType, Model_V2, String2, TextData} from '#common';

export interface CharData extends Model_V2 {
  _string: String2;

  isUpperLetter(): Boolean2;
  isLowerLetter(): Boolean2;
  isLetter(): Boolean2;
  isDigit(): Boolean2;
  isLetterOrDigit(): Boolean2;
  equals(other: CharData): Boolean2;
  equals(other: TextData): Boolean2;
  equals(other: String2): Boolean2;
  toString(): String2;
}

export const $CharData = commonPackageType<CharData>('CharData');
