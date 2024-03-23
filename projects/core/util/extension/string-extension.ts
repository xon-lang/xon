import {Array2, Boolean2, Char, Integer, Nothing, Number2, String2, nothing} from '../../lib/core';

const UPPER_A_CODE = 'A'.charCodeAt(0);
const UPPER_Z_CODE = 'Z'.charCodeAt(0);
const LOWER_A_CODE = 'a'.charCodeAt(0);
const LOWER_Z_CODE = 'z'.charCodeAt(0);
const DIGIT_0_CODE = '0'.charCodeAt(0);
const DIGIT_9_CODE = '9'.charCodeAt(0);

String.prototype.takeWhile = function (
  predicate: (value: Char, index: Integer) => Boolean2,
  startIndex = 0,
  includeConditionChar = false,
): String2 {
  for (let i = startIndex; i < this.length; i++) {
    if (!predicate(this[i], i)) {
      return this.slice(startIndex, includeConditionChar ? i + 1 : i);
    }
  }

  return this.slice(startIndex, this.length);
};

String.prototype.take = function (length: Integer, index: Integer = 0): String2 {
  return this.slice(index, index + length);
};

String.prototype.toCharCodes = function (): Uint8Array {
  const utf8Encoder = new TextEncoder();

  return utf8Encoder.encode(this as string);
  // return Array.from(this).map((x) => x.charCodeAt(0));
};

String.prototype.isUpperLetter = function (index: Integer): Boolean2 {
  const char = this[index].charCodeAt(0);

  return char >= UPPER_A_CODE && char <= UPPER_Z_CODE;
};

String.prototype.isLowerLetter = function (index: Integer): Boolean2 {
  const char = this[index].charCodeAt(0);

  return char >= LOWER_A_CODE && char <= LOWER_Z_CODE;
};

String.prototype.isLetter = function (index: Integer): Boolean2 {
  const char = this[index].charCodeAt(0);

  return (char >= UPPER_A_CODE && char <= UPPER_Z_CODE) || (char >= LOWER_A_CODE && char <= LOWER_Z_CODE);
};

String.prototype.isDigit = function (index: Integer): Boolean2 {
  const char = this[index].charCodeAt(0);

  return char >= DIGIT_0_CODE && char <= DIGIT_9_CODE;
};

String.prototype.isLetterOrDigit = function (index: Integer): Boolean2 {
  const char = this[index].charCodeAt(0);

  return (
    (char >= DIGIT_0_CODE && char <= DIGIT_9_CODE) ||
    (char >= UPPER_A_CODE && char <= UPPER_Z_CODE) ||
    (char >= LOWER_A_CODE && char <= LOWER_Z_CODE)
  );
};

String.prototype.some = function (predicate: (value: Char, index: Integer, array: Array2<Char>) => Boolean2): Boolean2 {
  const array = Array.from(this);

  return array.some(predicate);
};

String.prototype.sum = function (select: (value: Char, index: Integer, array: Array2<Char>) => Number2): Number2 {
  const array = Array.from(this);

  return array.reduce((sum, val, index, array) => sum + select(val, index, array), 0);
};

String.prototype.count = function (predicate: (value: Char, index: Integer, array: Array2<Char>) => Boolean2): Integer {
  const array = Array.from(this);

  return array.reduce((sum, val, index, array) => sum + (predicate(val, index, array) ? 1 : 0), 0);
};

String.prototype.first = function (
  predicate?: (value: Char, index: Integer, array: String) => Boolean2,
): Char | Nothing {
  if (this.length === 0) {
    return nothing;
  }

  if (!predicate) {
    return this[0] ?? nothing;
  }

  for (let index = 0; index < this.length; index++) {
    const element = this[index];

    if (predicate(element, index, this)) {
      return element;
    }
  }

  return nothing;
};

String.prototype.last = function (
  predicate?: (value: Char, index: Integer, array: String) => Boolean2,
): Char | Nothing {
  if (this.length === 0) {
    return nothing;
  }

  if (!predicate) {
    return this[this.length - 1] ?? nothing;
  }

  for (let index = this.length - 1; index >= 0; index--) {
    const element = this[index];

    if (predicate(element, index, this)) {
      return element;
    }
  }

  return nothing;
};
