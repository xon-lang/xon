import { DeclarationContext, ExpressionContext, ValueBodyContext } from '../../grammar/xon-parser';
import { String2 } from '../../lib/core';
import { getBodyFormatter } from '../body/body-formatter-helper';
import { getDeclarationsFormatter } from '../declarations/declarations-formatter-helper';
import { getExpressionFormatter } from '../expression/expression-formatter-helper';
import { Formatter } from '../formatter';
import { FormatterConfig } from '../formatter-config';

export class DeclarationFormatter extends Formatter {
  constructor(public ctx: DeclarationContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const modifier = (this.ctx._modifier && this.ctx._modifier.text + ' ') || '';
    const params = this.ctx._params.map((x) => getDeclarationsFormatter(x, this.config)).join('');
    const type = this.typeFormatter(this.ctx.valueType()?.expression());
    let body = this.valueBodyFormat(this.ctx.valueBody(), this.ctx.valueType()?.expression());

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

  valueBodyFormat(ctx: ValueBodyContext, type: ExpressionContext): String2 {
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
