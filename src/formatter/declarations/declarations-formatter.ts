import { getParameterFormatter } from '~/formatter/declaration/declaration-formatter-helper';
import { Formatter } from '~/formatter/formatter';
import { FormatterConfig } from '~/formatter/formatter-config';
import { DeclarationContext, DeclarationsContext } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';

export class ParametersFormatter extends Formatter {
  constructor(public ctx: DeclarationsContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
    const openSymbol = this.ctx.open().text;
    const closeSymbol = this.ctx.close().text;

    if (this.ctx.declaration().length === 0) {
      return openSymbol + closeSymbol;
    }

    let sortedParameters: DeclarationContext[] = [];
    if (this.ctx.close().CLOSE_BRACE()) {
      sortedParameters = this.ctx
        .declaration()
        .sort((a, b) => a._name.text?.localeCompare(b._name?.text ?? '') ?? 0);
    } else {
      sortedParameters = this.ctx.declaration();
    }
    const parameters = sortedParameters.map((x) =>
      getParameterFormatter(x, this.config)?.indent(this.indentCount),
    );

    let result = openSymbol + parameters.join(', ') + closeSymbol;

    if (this.broken || result.length > this.config.printWidth || result.includes(this.config.nl)) {
      const parameterIndent = this.config.indent(this.indentCount + 1);
      const joinedParameters =
        parameters
          .map((x) => parameterIndent + (x?.indent(this.indentCount + 1) ?? ''))
          .join(',' + this.config.nl) + ((parameters.length > 1 && ',') || '');
      result =
        openSymbol +
        this.config.nl +
        joinedParameters +
        this.config.nl +
        this.config.indent(this.indentCount) +
        closeSymbol;
    }

    return result;
  }
}
