import { String2 } from '~/lib/core';

export interface ParserConfig {
  code: String2;
  location: String2;
  keywords: String2[];
  operators: String2[];
}
