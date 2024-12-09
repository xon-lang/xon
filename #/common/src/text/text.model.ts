// todo fix it. remove @ts-ignore
// todo rename to 'StringData' ???

import {
  $ArrayData,
  $Char,
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

// @ts-ignore
export interface Text extends ArrayData<Char> {
  slice(startIndex: Integer, stopIndex?: Integer | Nothing): Text;
  slice(range: TextRange): Text;
  lineText(line: Integer): Text;
  addFirst(...items: Char[]): Text;
  addLast(...items: Char[]): Text;
  removeFirst(length?: Integer | Nothing): Text;
  removeLast(length?: Integer | Nothing): Text;

  takeWhile(
    predicate?: (value: Char, index: Integer) => Boolean2,
    startIndex?: Integer,
    includeConditionItem?: Boolean2,
  ): Text;
  take(length: Integer, startIndex?: Integer): Text;

  sort(compareFn?: (a: Char, b: Char) => Number2): this;
  sortBy(select: (item: Char) => Number2, ascending?: Boolean2): Text;

  setPadding(padding: Integer): Text;
  trim(): Text;
  repeat(count: Integer): Text;

  equals(other: Text): Boolean2;
  equals(other: ArrayData<Char>): Boolean2;
  equals(other: String2): Boolean2;
  clone(): Text;
  toString(): String2;
}

export const $Text = commonPackageType<Text>('TextData', $ArrayData($Char));
