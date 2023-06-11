import { FormatterConfig } from '~/formatter/formatter-config';
import { Boolean2, Integer, String2 } from '~/lib/core';

export abstract class Formatter {
  indentCount: Integer = 0;
  broken: Boolean2 = false;

  ctx: ParserRuleContext | null = null;
  config: FormatterConfig | null = null;

  indent(value: Integer): Formatter {
    this.indentCount = value;

    return this;
  }

  break(value: Boolean2): Formatter {
    this.broken = value;

    return this;
  }

  abstract toString(): String2;
}
