import {ArrayData, Boolean2, Char, CharData, Integer, Nothing, Number2, String2, TextRange} from '#common';

// todo fix it. remove @ts-ignore
// @ts-ignore
export interface TextData extends ArrayData<CharData> {
  slice(startIndex: Integer, stopIndex?: Integer | Nothing): TextData;
  slice(range: TextRange): TextData;
  lineText(line: Integer): TextData;
  addFirst(...items: CharData[]): TextData;
  addLast(...items: CharData[]): TextData;
  removeFirst(length?: Integer | Nothing): TextData;
  removeLast(length?: Integer | Nothing): TextData;

  takeWhile(
    predicate?: (value: CharData, index: Integer) => Boolean2,
    startIndex?: Integer,
    includeConditionItem?: Boolean2,
  ): TextData;
  take(length: Integer, startIndex?: Integer): TextData;

  sort(compareFn?: (a: CharData, b: CharData) => Number2): this;
  sortBy(select: (item: CharData) => Number2, ascending?: Boolean2): TextData;

  setPadding(padding: Integer): TextData;
  trim(): TextData;
  repeat(count: Integer): TextData;

  equals(other: TextData): Boolean2;
  equals(other: ArrayData<CharData>): Boolean2;
  equals(other: String2): Boolean2;
  equals(other: Char[]): Boolean2;
  clone(): TextData;
  toString(): String2;
}
