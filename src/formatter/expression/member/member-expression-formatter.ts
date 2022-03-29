import { MemberExpressionContext } from '../../../grammar/xon-parser';
import { FormatterConfig } from '../../formatter-config';
import { ExpressionFormatter } from '../expression-formatter';
import { getExpressionFormatter } from '../expression-formatter-helper';

export class MemberExpressionFormatter extends ExpressionFormatter {
  broken: boolean;

  constructor(public ctx: MemberExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const expression = getExpressionFormatter(this.ctx.expression(), this.config)
      .indent(this.indentCount)
      .break(this.broken);
    const name = this.ctx._name.text;

    let result = `${expression}.${name}`;
    const endLineCharPosition = this.config.endLineCharPosition(result);

    if (this.broken || this.brokenMember || endLineCharPosition > this.config.printWidth) {
      this.broken = true;
      this.brokenMember = true;
      result = `${expression.breakMember(true)} \\\n${this.config.indent(
        this.indentCount + 1,
      )}.${name}`;
    }

    return result;
  }
}
