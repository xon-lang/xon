import { ExpressionContext, ParameterContext, ValueBodyContext } from '../../grammar/xon-parser';
import { String } from '../../lib/core';
import { getBodyFormatter } from '../body/body-formatter-helper';
import { getExpressionFormatter } from '../expression/expression-formatter-helper';
import { Formatter } from '../formatter';
import { FormatterConfig } from '../formatter-config';
import { getParametersFormatter } from '../parameters/parameters-formatter-helper';

export class ParameterFormatter extends Formatter {
  constructor(public ctx: ParameterContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const params = getParametersFormatter(this.ctx._params, this.config) || '';
    const type = this.typeFormatter(this.ctx.valueType()?.expression());
    let body = this.valueBodyFormat(this.ctx.valueBody(), this.ctx.valueType()?.expression());

    if (this.ctx._name) {
      return `${this.ctx._name.text}${params}${type}${body}`;
    }

    const destructure = getParametersFormatter(this.ctx._destructure, this.config);
    return `${destructure}${params}${type}${body}`;
  }

  typeFormatter(type: ExpressionContext): String {
    if (!type && this.ctx.COLON() && this.ctx.valueBody()?._value) return ' :';
    if (!type && !this.ctx.COLON() && this.ctx.valueBody()?._value) return ' ';
    if (!type) return '';

    return (
      ': ' +
      getExpressionFormatter(this.ctx.valueType()?.expression(), this.config).indent(this.indentCount).toString().trim()
    );
  }

  valueBodyFormat(ctx: ValueBodyContext, type: ExpressionContext): String {
    if (!ctx) return '';

    if (ctx._value) {
      const expressionFormatter = getExpressionFormatter(ctx._value, this.config).indent(
        this.indentCount,
      );
      return ((this.ctx.valueType()?.expression() && ' = ') || '= ') + expressionFormatter.toString();
    }

    return getBodyFormatter(ctx.body(), this.config).indent(this.indentCount).toString();
  }
}
