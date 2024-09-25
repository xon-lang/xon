import {Boolean2, Char, Integer, Nothing, String2, TextRange} from '#common';
import {Predicate} from '#core';
import {$} from '#typing';

export type TextData = {
  characters: Char[];
  $: $.TextData;

  slice(startIndex: Integer, stopIndex?: Integer | Nothing): TextData;
  slice(range: TextRange): TextData;
  lineText(line: Integer): TextData;
  firstIndex(characters: Char[], startIndex?: Integer): Integer;
  firstIndex(string: String2, startIndex?: Integer): Integer;
  firstIndex(data: TextData, startIndex?: Integer): Integer;
  lastIndex(characters: Char[], startIndex?: Integer): Integer;
  lastIndex(string: String2, startIndex?: Integer): Integer;
  lastIndex(data: TextData, startIndex?: Integer): Integer;

  takeWhile(predicate?: Predicate<Char>, startIndex?: Integer, includeConditionItem?: Boolean2): TextData;
  take(length: Integer, startIndex?: Integer): TextData;

  append(characters: Char[]): TextData;
  append(string: String2): TextData;
  prepend(characters: Char[]): TextData;
  prepend(string: String2): TextData;

  clone(): TextData;
  length(): Integer;
  equals(other: String2): Boolean2;
  equals(other: TextData): Boolean2;

  // todo should we use only 'TextData' without 'String' ???
  toString(): String2;
};
