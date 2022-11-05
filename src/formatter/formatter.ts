import { ParserRuleContext } from 'antlr4ts';
import { Boolean2, Number2, String2 } from '../lib/core';
import { FormatterConfig } from './formatter-config';

export abstract class Formatter {
  indentCount: Number2 = 0;
  broken: Boolean2 = false;

  ctx: ParserRuleContext;
  config: FormatterConfig;

  indent(value: number): Formatter {
    this.indentCount = value;
    return this;
  }

  break(value: Boolean2): Formatter {
    this.broken = value;
    return this;
  }

  abstract toString(): String2;
}
