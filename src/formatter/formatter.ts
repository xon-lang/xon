import { ParserRuleContext } from 'antlr4ts';
import { Boolean, Number, String } from '../lib/core';
import { FormatterConfig } from './formatter-config';

export abstract class Formatter {
  indentCount: Number = 0;
  broken: Boolean = false;

  ctx: ParserRuleContext;
  config: FormatterConfig;

  indent(value: number): Formatter {
    this.indentCount = value;
    return this;
  }

  break(value: Boolean): Formatter {
    this.broken = value;
    return this;
  }

  abstract toString(): String;
}
