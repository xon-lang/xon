import {Boolean2, Integer} from '../../../lib/src/types';

export type FormatterConfig = {
  insertFinalNewline: Boolean2;
  maxNewLines: Integer;
  indentSpaceLength: Integer;
};

export const DEFAULT_FORMATTER_CONFIG: FormatterConfig = {
  insertFinalNewline: true,
  maxNewLines: 2,
  indentSpaceLength: 2,
};
