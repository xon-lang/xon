import { String2 } from '~/lib/core';

export interface ParserConfig {
  code: String2;
  location: String2;
  keywords: String2[];
  operators: String2[];
}

// '. ::',
export const operators = ['!', '?', '^', '* / %', '+ -', '..', '< <= >= >', '== !=', 'is as in', '&', '|', ': ='];
export const keywords = ['break', 'continue', 'do', 'else', 'export', 'for', 'if', 'import', 'return', 'while'];
