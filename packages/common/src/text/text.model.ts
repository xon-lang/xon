import {
  $ArrayData,
  $Character,
  $CommonType,
  ArrayData,
  Boolean2,
  Character,
  Integer,
  Nothing,
  Number2,
} from '#common';

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
  repeat(count: Integer): Text;
  equals(other: Character): Boolean2;
  equals(other: ArrayData<Character>): Boolean2;
  equals(other: string): Boolean2;
  toString(): string;
  toNativeString(): string;
}

export const $Text = () => $CommonType<Text>('Text', $ArrayData($Character()));
