import {$Character, ArrayData, Boolean2, Character, newArrayData} from '#common';

const UPPER_A_CODE = 'A'.charCodeAt(0);
const UPPER_Z_CODE = 'Z'.charCodeAt(0);
const LOWER_A_CODE = 'a'.charCodeAt(0);
const LOWER_Z_CODE = 'z'.charCodeAt(0);
const DIGIT_0_CODE = '0'.charCodeAt(0);
const DIGIT_9_CODE = '9'.charCodeAt(0);

export function newCharacter(charString: string): Character {
  return {
    $: $Character(),
    _string: charString,

    isUpperLetter(): Boolean2 {
      const character = this._string.charCodeAt(0);

      return character >= UPPER_A_CODE && character <= UPPER_Z_CODE;
    },

    isLowerLetter(): Boolean2 {
      const character = this._string.charCodeAt(0);

      return character >= LOWER_A_CODE && character <= LOWER_Z_CODE;
    },

    isLetter(): Boolean2 {
      const character = this._string.charCodeAt(0);

      return (character >= UPPER_A_CODE && character <= UPPER_Z_CODE) || (character >= LOWER_A_CODE && character <= LOWER_Z_CODE);
    },

    isDigit(): Boolean2 {
      const character = this._string.charCodeAt(0);

      return character >= DIGIT_0_CODE && character <= DIGIT_9_CODE;
    },

    isLetterOrDigit(): Boolean2 {
      const character = this._string.charCodeAt(0);

      return (
        (character >= DIGIT_0_CODE && character <= DIGIT_9_CODE) ||
        (character >= UPPER_A_CODE && character <= UPPER_Z_CODE) ||
        (character >= LOWER_A_CODE && character <= LOWER_Z_CODE)
      );
    },

    equals(other: Character): Boolean2 {
      return this._string === other._string;
    },

    toNativeString(): string {
      return this._string;
    },
  };
}

export function stringToCharArray(string: string): ArrayData<Character> {
  const characters = string.match(/.|\s/gu)?.map((x) => newCharacter(x)) ?? [];

  return newArrayData(characters);
}
