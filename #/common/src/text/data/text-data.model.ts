import {
  $ArrayData,
  $CharData,
  ArrayData,
  Boolean2,
  Char,
  commonPackageType,
  Integer,
  Nothing,
  Number2,
  String2,
  TextRange,
} from '#common';

// todo fix it. remove @ts-ignore
// todo rename to 'StringData' ???
// @ts-ignore
export interface TextData extends ArrayData<Char> {
  slice(startIndex: Integer, stopIndex?: Integer | Nothing): TextData;
  slice(range: TextRange): TextData;
  lineText(line: Integer): TextData;
  addFirst(...items: Char[]): TextData;
  addLast(...items: Char[]): TextData;
  removeFirst(length?: Integer | Nothing): TextData;
  removeLast(length?: Integer | Nothing): TextData;

  takeWhile(
    predicate?: (value: Char, index: Integer) => Boolean2,
    startIndex?: Integer,
    includeConditionItem?: Boolean2,
  ): TextData;
  take(length: Integer, startIndex?: Integer): TextData;

  sort(compareFn?: (a: Char, b: Char) => Number2): this;
  sortBy(select: (item: Char) => Number2, ascending?: Boolean2): TextData;

  setPadding(padding: Integer): TextData;
  trim(): TextData;
  repeat(count: Integer): TextData;

  equals(other: TextData): Boolean2;
  equals(other: ArrayData<Char>): Boolean2;
  equals(other: String2): Boolean2;
  clone(): TextData;
  toString(): String2;
}

export const $TextData = commonPackageType<TextData>('TextData', $ArrayData($CharData));
