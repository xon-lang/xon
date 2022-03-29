import { Number, String } from '../lib/core';

export class FormatterConfig {
  printWidth = 100;
  tabWidth = 2;
  nl = '\n';
  nl2 = this.nl.repeat(2);

  indent(count: Number) {
    return ' '.repeat(this.tabWidth).repeat(count);
  }

  startLineLength(value: String) {
    return value.split(this.nl)[0].length;
  }

  endLineLength(value: String) {
    return value.split(this.nl).slice(-1)[0].length;
  }
}

export const defaultFormatterConfig = new FormatterConfig();
