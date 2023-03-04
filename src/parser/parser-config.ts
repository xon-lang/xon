import { String2 } from '~/lib/core';

export interface ParserConfig {
  code: String2;
  location: String2;
  keywords: String2[];
  leftOperators: String2[];
  rightOperators: String2[];
}

export const leftOperators = ['!', '?', '^', '* / %', '+ -', '..', '< <= >= >', '== !=', 'is as in', '&', '|'];
export const rightOperators = ['=>', ': ='];
export const keywords = ['break', 'continue', 'do', 'else', 'export', 'for', 'if', 'import', 'return', 'while'];
