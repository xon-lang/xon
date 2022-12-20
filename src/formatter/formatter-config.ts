import { Integer, String2 } from '~/lib/core';

const PRINT_WIDTH = 100;

export class FormatterConfig {
  printWidth = PRINT_WIDTH;
  tabWidth = 2;
  nl = '\n';
  nl2 = this.nl.repeat(2);

  indent(count: Integer): String2 {
    return ' '.repeat(this.tabWidth).repeat(count);
  }

  startLineLength(value: String2): Integer {
    return value.split(this.nl)[0].length;
  }

  endLineLength(value: String2): Integer {
    return value.split(this.nl).slice(-1)[0].length;
  }
}

export const defaultFormatterConfig = new FormatterConfig();
