import { BodyContext, ExpressionContext, ParameterContext } from '../../grammar/xon-parser';
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
    const type = this.typeFormatter(this.ctx._type);
    let body = this.bodyFormat(this.ctx._value || this.ctx.body(), this.ctx._type);

    if (this.ctx._name) return `${this.ctx._name.text}${type}${body}`;

    const parameters = getParametersFormatter(this.ctx.parameters(), this.config);
    return `${parameters}${type}${body}`;
  }

  typeFormatter(type: ExpressionContext): String {
    if (!type && this.ctx.COLON() && this.ctx._value instanceof ExpressionContext) return ' :';
    if (!type && !this.ctx.COLON() && this.ctx._value instanceof ExpressionContext) return ' ';
    if (!type) return '';

    return (
      ': ' +
      getExpressionFormatter(this.ctx._type, this.config).indent(this.indentCount).toString().trim()
    );
  }

  bodyFormat(body: ExpressionContext | BodyContext, type: ExpressionContext): String {
    if (!body) return '';

    if (body instanceof ExpressionContext) {
      const expressionFormatter = getExpressionFormatter(body, this.config).indent(
        this.indentCount,
      );
      return ((this.ctx._type && ' = ') || '= ') + expressionFormatter.toString();
    }

    return getBodyFormatter(body, this.config).indent(this.indentCount).toString();
  }
}
