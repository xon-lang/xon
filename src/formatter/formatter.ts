import { ParserRuleContext } from 'antlr4ts';
import { FormatterConfig } from '~/formatter';
import { Boolean2, Number2, String2 } from '~/lib';

export abstract class Formatter {
  indentCount: Number2 = 0;
  broken: Boolean2 = false;

  ctx: ParserRuleContext;
  config: FormatterConfig;

  indent(value: Number2): Formatter {
    this.indentCount = value;
    return this;
  }

  break(value: Boolean2): Formatter {
    this.broken = value;
    return this;
  }

  abstract toString(): String2;
}
