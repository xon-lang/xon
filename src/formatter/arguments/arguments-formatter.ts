import { Formatter, FormatterConfig, getArgumentFormatter } from '~/formatter';
import { ArgumentsContext } from '~/grammar';
import { String2 } from '~/lib';

export class ArgumentsFormatter extends Formatter {
  constructor(public ctx: ArgumentsContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
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
