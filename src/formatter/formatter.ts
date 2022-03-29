import { ParserRuleContext } from 'antlr4ts';
import { Number, String } from '../lib/core';
import { FormatterConfig } from './formatter-config';

export abstract class Formatter {
  indentCount: Number = 0;
  indentString: String = '';
  broken: Boolean = false;
  brokenMember: Boolean = false;

  ctx: ParserRuleContext;
  config: FormatterConfig;

  indent(value: number): Formatter {
    this.indentCount = value;
    this.indentString = this.config.indent(value);
    return this;
  }

  break(value: Boolean): Formatter {
    this.broken = value;
    return this;
  }

  breakMember(value: Boolean): Formatter {
    this.brokenMember = value;
    return this;
  }

  abstract toString(): string;
}
