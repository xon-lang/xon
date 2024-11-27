import {Boolean2, String2, TextData} from '#/common';
import {$, $Model} from '#/typing';

export interface CharData extends $Model {
  $: $.CharData;
  _string: String2;

  isUpperLetter(): Boolean2;
  isLowerLetter(): Boolean2;
  isLetter(): Boolean2;
  isDigit(): Boolean2;
  isLetterOrDigit(): Boolean2;
  equals(other: CharData): Boolean2;
  equals(other: TextData): Boolean2;
  equals(other: String2): Boolean2;
  toString(): String2;
}
