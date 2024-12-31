// todo fix it. remove @ts-ignore
// todo rename to 'StringData' ???

import {$ArrayData, $Char, ArrayData, Boolean2, Char, commonPackageType, Integer, String2} from '#common';

// @ts-ignore
export interface Text extends ArrayData<Char> {
  lineText(line: Integer): Text;
  setPadding(padding: Integer): Text;
  trim(): Text;
  repeat(count: Integer): Text;
  equals(other: Text): Boolean2;
  equals(other: ArrayData<Char>): Boolean2;
  equals(other: String2): Boolean2;
  toNativeString(): String2;
}

export const $Text = commonPackageType<Text>('TextData', $ArrayData($Char));
