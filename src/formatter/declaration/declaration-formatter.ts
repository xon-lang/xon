import {
  Formatter,
  FormatterConfig,
  getBodyFormatter,
  getDeclarationsFormatter,
  getExpressionFormatter,
} from '~/formatter';
import { DeclarationContext, ExpressionContext, ValueBodyContext } from '~/grammar';
import { String2 } from '~/lib';

export class DeclarationFormatter extends Formatter {
  constructor(public ctx: DeclarationContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
    const modifier = (this.ctx._modifier && this.ctx._modifier.text + ' ') || '';
    const params = this.ctx._params.map((x) => getDeclarationsFormatter(x, this.config)).join('');
    const type = this.typeFormatter(this.ctx.valueType()?.expression());
    const body = this.valueBodyFormat(this.ctx.valueBody());

    if (this.ctx._name) {
      return `${modifier}${this.ctx._name.text}${params}${type}${body}`;
    }

    const destructure = getDeclarationsFormatter(this.ctx._destructure, this.config);
    return `${destructure}${params}${type}${body}`;
  }

  typeFormatter(type: ExpressionContext): String2 {
    if (!type && this.ctx.valueType()?.COLON() && this.ctx.valueBody()?._value) return ' :';
    if (!type && !this.ctx.valueType()?.COLON() && this.ctx.valueBody()?._value) return ' ';
    if (!type) return '';

    return (
      ': ' +
      getExpressionFormatter(this.ctx.valueType()?.expression(), this.config)
        .indent(this.indentCount)
        .toString()
        .trim()
    );
  }

  valueBodyFormat(ctx: ValueBodyContext): String2 {
    if (!ctx) return '';

    if (ctx._value) {
      const expressionFormatter = getExpressionFormatter(ctx._value, this.config).indent(
        this.indentCount,
      );
      return (
        ((this.ctx.valueType()?.expression() && ' = ') || '= ') + expressionFormatter.toString()
      );
    }

    return getBodyFormatter(ctx.body(), this.config).indent(this.indentCount).toString();
  }
}
