import { Boolean2, Char, Integer, String2 } from '../../lib/core';

export const UPPER_A_CODE = 'A'.charCodeAt(0);

export const UPPER_Z_CODE = 'Z'.charCodeAt(0);

export const LOWER_A_CODE = 'a'.charCodeAt(0);

export const LOWER_Z_CODE = 'z'.charCodeAt(0);

export const DIGIT_0_CODE = '0'.charCodeAt(0);

export const DIGIT_9_CODE = '9'.charCodeAt(0);

String.prototype.takeWhile = function takeWhile(
  predicate: (value: Char, index: number) => unknown,
  startIndex = 0,
): String2 {
  for (let i = startIndex; i < this.length; i++) {
    if (!predicate(this[i], i)) {
      return this.slice(startIndex, i);
    }
  }

  return this.slice(startIndex, this.length);
};

String.prototype.margin = function margin(delimiter?: String2): String2 {
  throw new Error(`Not implemented ${delimiter}`);
};

String.prototype.toCharCodes = function toCharCodes(): Uint8Array {
  const utf8Encoder = new TextEncoder();

  return utf8Encoder.encode(this as string);
  // return Array.from(this).map((x) => x.charCodeAt(0));
};

String.prototype.isDigit = function isDigit(index: Integer): Boolean2 {
  const char = this[index].charCodeAt(0);

  return char >= DIGIT_0_CODE && char <= DIGIT_9_CODE;
};

String.prototype.isUpperLetter = function isUpperLetter(index: Integer): Boolean2 {
  const char = this[index].charCodeAt(0);

  return char >= UPPER_A_CODE && char <= UPPER_Z_CODE;
};

String.prototype.isLowerLetter = function isLowerLetter(index: Integer): Boolean2 {
  const char = this[index].charCodeAt(0);

  return char >= LOWER_A_CODE && char <= LOWER_Z_CODE;
};

String.prototype.isLetter = function isLetter(index: Integer): Boolean2 {
  const char = this[index].charCodeAt(0);

  return (char >= UPPER_A_CODE && char <= UPPER_Z_CODE) || (char >= LOWER_A_CODE && char <= LOWER_Z_CODE);
};

String.prototype.isDigitOrLetter = function isDigitOrLetter(index: Integer): Boolean2 {
  const char = this[index].charCodeAt(0);

  return (
    (char >= DIGIT_0_CODE && char <= DIGIT_9_CODE) ||
    (char >= UPPER_A_CODE && char <= UPPER_Z_CODE) ||
    (char >= LOWER_A_CODE && char <= LOWER_Z_CODE)
  );
};