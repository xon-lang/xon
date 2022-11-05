import { getArgumentFormatter } from '@/formatter/argument/argument-formatter-helper';
import { Formatter } from '@/formatter/formatter';
import { FormatterConfig } from '@/formatter/formatter-config';
import { ArgumentsContext } from '@/grammar/xon-parser';

export class ArgumentsFormatter extends Formatter {
  constructor(public ctx: ArgumentsContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const openSymbol = this.ctx.open().text;
    const closeSymbol = this.ctx.close().text;

    if (this.ctx.argument().length === 0) {
      return openSymbol + closeSymbol;
    }

    const args = this.ctx
      .argument()
      .map((x) => getArgumentFormatter(x, this.config).indent(this.indentCount));

    let result = openSymbol + args.join(', ') + closeSymbol;

    if (this.broken || result.length > this.config.printWidth || result.includes(this.config.nl)) {
      const argumentIndent = this.config.indent(this.indentCount + 1);
      const joinedArguments =
        args
          .map((x) => argumentIndent + x.indent(this.indentCount + 1))
          .join(',' + this.config.nl) + ((args.length > 1 && ',') || '');
      result =
        openSymbol +
        this.config.nl +
        joinedArguments +
        this.config.nl +
        this.config.indent(this.indentCount) +
        closeSymbol;
    }

    return result;
  }
}
