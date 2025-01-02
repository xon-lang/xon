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
} from '#common';

export interface Text extends ArrayData<Char> {
  lineText(line: Integer): Text;
  split(separator: Text): ArrayData<Text>;
  setPadding(padding: Integer): Text;
  // todo add trim* parameter
  trim(): Text;
  trimStart(): Text;
  trimEnd(): Text;
  startsWith(searchText: Text, position?: Number2 | Nothing): Boolean2;
  endsWith(searchText: Text, position?: Number2 | Nothing): Boolean2;
  repeat(count: Integer): Text;
  equals(other: Char): Boolean2;
  equals(other: ArrayData<Char>): Boolean2;
  equals(other: String2): Boolean2;
  toString(): String2;
  toNativeString(): String2;
}

export const $Text = commonPackageType<Text>('TextData', $ArrayData($Char));
