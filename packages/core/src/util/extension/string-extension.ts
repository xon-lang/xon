import {Boolean2, Char, Integer, Nothing, String2} from '#common';

const UPPER_A_CODE = 'A'.charCodeAt(0);
const UPPER_Z_CODE = 'Z'.charCodeAt(0);
const LOWER_A_CODE = 'a'.charCodeAt(0);
const LOWER_Z_CODE = 'z'.charCodeAt(0);
const DIGIT_0_CODE = '0'.charCodeAt(0);
const DIGIT_9_CODE = '9'.charCodeAt(0);

String.prototype.takeWhile = function (
  predicate?: (value: String2, index: Integer, array: Char[]) => Boolean2,
  startIndex = 0,
  includeConditionItem = false,
): String2 {
  return Array.from(this).takeWhile(predicate, startIndex, includeConditionItem).join('');
};

String.prototype.take = function (length: Integer, startIndex: Integer = 0): String2 {
  return this.slice(startIndex, startIndex + length);
};

String.prototype.some = function (
  predicate: (value: Char, index: Integer, array: Char[]) => Boolean2,
): Boolean2 {
  return Array.from(this).some((value, index, array) => predicate(value, index, array));
};

String.prototype.count = function (
  predicate: (value: Char, index: Integer, array: Char[]) => Boolean2,
): Integer {
  return Array.from(this).count(predicate);
};

String.prototype.first = function (
  predicate?: (value: Char, index: Integer, array: Char[]) => Boolean2,
): Char | Nothing {
  return Array.from(this).first(predicate);
};

String.prototype.last = function (
  predicate?: (value: Char, index: Integer, array: Char[]) => Boolean2,
): Char | Nothing {
  return Array.from(this).last(predicate);
};

String.prototype.removeFirst = function (): String2 {
  return this.slice(1);
};

String.prototype.removeLast = function (): String2 {
  return this.slice(0, -1);
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

String.prototype.setPadding = function (padding: Integer): String2 {
  if (this.length === 0) {
    return this.toString();
  }

  // todo use constant NL ???
  const lines = this.split('\n').map((x) => ({
    str: x,
    padding: x.takeWhile((x) => x === ' ').length,
  }));

  const minLinePadding = lines.reduce(
    (min, line) => (line.str.length > 0 ? Math.min(line.padding, min) : min),
    this.length,
  );

  if (minLinePadding === padding) {
    return this.toString();
  }

  const resultLines = lines.map((x) => {
    if (x.str.length === 0) {
      return x.str;
    }

    const indent = ' '.repeat(x.padding + (padding - minLinePadding));

    return indent + x.str.trimStart();
  });

  return resultLines.join('\n');
};

String.prototype.toCharCodes = function (): Uint8Array {
  const utf8Encoder = new TextEncoder();

  return utf8Encoder.encode(this as string);
  // return Array.from(this).map((x) => x.charCodeAt(0));
};
