import {
  $ArrayData,
  $Character,
  $CoreType,
  ArrayData,
  Boolean2,
  Character,
  Integer,
  Nothing,
  Number2,
} from '#core';

export interface Text extends ArrayData<Character> {
  lineText(line: Integer): Text;
  split(separator: Text): ArrayData<Text>;
  margin(value: Integer): Text;
  // todo add trim* parameter
  trim(): Text;
  trimStart(): Text;
  trimEnd(): Text;
  startsWith(searchText: Text, startIndex?: Number2 | Nothing): Boolean2;
  endsWith(searchText: Text, startIndex?: Number2 | Nothing): Boolean2;
  lowerCase(): Text;
  upperCase(): Text;
  repeat(count: Integer): Text;
  equals(other: Character): Boolean2;
  equals(other: ArrayData<Character>): Boolean2;
  equals(other: string): Boolean2;
  toString(): string;
  toNativeString(): string;
}

export const $Text = () => $CoreType<Text>('Text', $ArrayData($Character()));
