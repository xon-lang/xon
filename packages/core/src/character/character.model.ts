import {$CoreType, Boolean2, Model} from '#core';

export interface Character extends Model {
  _string: string;

  isUpperLetter(): Boolean2;
  isLowerLetter(): Boolean2;
  isLetter(): Boolean2;
  isDigit(): Boolean2;
  isLetterOrDigit(): Boolean2;
  equals(other: Character): Boolean2;
  toNativeString(): string;
}

export const $Character = () => $CoreType<Character>('Character');
