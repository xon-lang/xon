import { String2 } from '~/lib/core';

export interface ParserConfig {
  code: String2;
  location: String2;
  keywords: String2[];
  operators: String2[];
}

// '. ::',
export const tempOperators = ['!', '^', '* / %', '+ -', '..', '< <= >= >', '== !=', 'is as in', '&', '|'];
export const tempKeywords = ['break', 'continue', 'do', 'else', 'export', 'for', 'if', 'import', 'return', 'while'];
